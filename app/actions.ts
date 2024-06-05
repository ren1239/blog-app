"use server"

import { redirect } from "next/navigation"
import prisma from "./lib/db"
import { supabase } from "./lib/supabase"
import ffmpeg from "fluent-ffmpeg"
import fs from 'fs/promises'




export async function createBlog({userId}:{userId:string}) {
    const data = await prisma.blogPost.findFirst({
        where:{
            userId:userId
        },
        orderBy:{
            createdAt:"desc"
        }
    })

    if(data === null){
        const data = await prisma.blogPost.create({
            data:{
                userId:userId
            }
        })
        return redirect(`/create/${data.id}/structure`)
    }
    else if(!data.addedCategory && !data.addedDescription && !data.addedVideo){
        return redirect(`/create/${data.id}/structure`)       
    }
    else if(data.addedCategory && !data.addedDescription && !data.addedVideo){
       return  redirect(`/create/${data.id}/description`)  
    }
    else if(data.addedCategory && data.addedDescription && !data.addedVideo){
        return  redirect(`/create/${data.id}/video`)  
     }
     else if (data.addedCategory && data.addedDescription && data.addedVideo){
        const data = await prisma.blogPost.create({
            data:{
                userId:userId
            }
        })
        return redirect(`/create/${data.id}/structure`)
     }

   
}

export async function CreateCategoryPage(formData:FormData){
    const categoryName = formData.get('categoryName') as string
    const blogId = formData.get('blogId') as string
    const data =  await prisma.blogPost.update({
        
        where:{
            id:blogId
        }
        ,data:{
            categoryName : categoryName,
            addedCategory : true,
        }

    })
    return redirect(`/create/${blogId}/description`)  
}

export async function CreateDescriptionPage(formData:FormData){
    const day = formData.get('day') as string
    const title = formData.get('title') as string
    const learning = formData.get('learning') as string
    const create = formData.get('create') as string
    const resources = formData.get('resources') as string
    const reflection = formData.get('reflection') as string

    const blogId = formData.get('blogId') as string

    const data = await prisma.blogPost.update({
        where:{
            id:blogId
        },
        data:{
            day : Number(day),
            addedDescription : true,

            title : title,
            learning : learning,
            create: create,
            resources : resources,
            reflection : reflection
        }
    })
    
    return redirect(`/create/${blogId}/video`)
}



// Function to upload the video and return its URL
async function uploadVideo(videoFile: File): Promise<{ path:string} > {
    const { data: videoData , error} = await supabase.storage.from('videos').upload(
        `${videoFile.name}-${new Date()}`,
        videoFile,
        {
            cacheControl: "2592000",
            contentType: "video/mp4"
        }
    );

    if (error || !videoData) {
        throw new Error('Failed to upload video to Supabase');
    }
    return videoData
}

async function getVideoThumbnail(videoUrl: string , videoFile : File): Promise<string> {
    const uploadFolder = './tmp'; // Modify this path as needed
    const outputFilename = `${videoFile.name}-thumbnail.png`;
    const supabaseVideoUrl = `https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/videos/${videoUrl}`;
    console.log('this is the supabasevideourl',supabaseVideoUrl)
    return new Promise((resolve, reject) => {

        ffmpeg(supabaseVideoUrl)
        .on('end',()=>{
            resolve(outputFilename); // Path to the saved thumbnail

        })
            .on('error', (err) => {
                reject(err);
            
            })
            .screenshots({
                timestamps: [4],
                filename: outputFilename,
                folder: uploadFolder,
                size: '540x960'
            })
    });
}

// Function to delete the thumbnail
async function deleteThumbnail(thumbnailPath: string) {
    const uploadFolder = './tmp/'; // Modify this path as needed
    try {
        await fs.unlink(`${uploadFolder}${thumbnailPath}`);
        console.log("Thumbnail deleted successfully:", thumbnailPath);
    } catch (error) {
        console.error("Error deleting thumbnail:", error);
    }
}


// Main function to handle the video page creation
export async function CreateVideoPage(formData: FormData) {
    const videoFile = formData.get('video') as File;
    const blogId = formData.get('blogId') as string;


    // Get the video URL after uploading

    const videoData = await uploadVideo(videoFile);
    const videoUrl = videoData.path;

    // Update the blog post with the video URL
    const data = await prisma.blogPost.update({
        where: {
            id: blogId
        },
        data: {
            videoUrl: videoUrl,
            addedVideo: true,
        }
    });

    // After successful video update, chain a promise for thumbnail generation
    try {
        const thumbnailPath = await getVideoThumbnail(videoUrl as string , videoFile as File);
        console.log("Thumbnail generated:", `./tmp/${thumbnailPath}`);

        // Read the thumbnail file from the temporary directory
        const thumbnailBuffer = await fs.readFile(`./tmp/${thumbnailPath}`);
    

        // Upload the thumbnail data
        const { data: thumbnailData , error} = await supabase.storage.from('thumbnails').upload(
            `${thumbnailPath}-${new Date()}`,
            thumbnailBuffer,
            {
                cacheControl: "2592000",
                contentType: "image/png"
            }
            
        );
        if (error || !thumbnailData) {
            throw new Error('Failed to upload thumbnail to Supabase');
        }
        

        const data = await prisma.blogPost.update({
            where: {
                id: blogId
            },
            data: {
                thumbnailUrl: thumbnailData?.path,
            }
        });

        // Delete the thumbnail after it's been processed
        await deleteThumbnail(thumbnailPath);
        console.log("Thumbnail deteled:");


    } catch (error) {
        console.error("Error generating thumbnail:", error);
        // Handle thumbnail generation error
    }

    return redirect(`/`);
}
