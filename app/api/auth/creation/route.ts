import prisma from '@/app/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server';
import React from 'react'

export async function GET() {
    const {getUser} = getKindeServerSession();
    const user = await getUser()

    if (!user || user === null || !user.id){
        throw new Error('Sorry something went wrong')
    }

    let dbUser = await prisma.user.findUnique({
        where:{
            id : user.id
        }
    })
    if(!dbUser) {
        let dbUser = await prisma.user.create({
            data:{
                email : user.email ?? "" ,
                firstName : user.given_name ?? '',
                lastName : user.family_name ?? "",
                id: user.id , 
                profileImage : user.picture ?? `https://avatar.vercel.sh/${user.given_name}`

            }
        })
        return NextResponse.redirect('http://localhost:3000/')
    }

  // Return a response if the user already exists
  return NextResponse.redirect('http://localhost:3000/')
  
}
