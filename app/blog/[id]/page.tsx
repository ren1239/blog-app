import TechStackShowcase from "@/app/component/TechStackShowcase";
import prisma from "@/app/lib/db";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

function formatText(text: string) {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

async function getData(blogId: string) {
  noStore();
  const data = await prisma.blogPost.findUnique({
    where: {
      id: blogId,
    },
    select: {
      id: true,
      videoUrl: true,
      day: true,
      learning: true,
      title: true,
      resources: true,
      create: true,
      reflection: true,
      appreciation: true,
      thumbnailUrl: true,
      stack: true,
    },
  });
  return data;
}

export default async function BlogRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const stack = data?.stack || []; // Ensure stack is an array

  return (
    <div className="w-[75%] mx-auto mt-10 mb-36">
      <div className="flex space-x-4 pb-4">
        {" "}
        <TechStackShowcase techStackName={stack} />
      </div>
      <div className="grid grid-cols-2 ">
        <div className=" w-[80%]">
          <video
            loop
            muted
            controls
            className="rounded-lg flex items-center w-full object-fill mb-3"
            poster={`https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/thumbnails/${data?.thumbnailUrl}`}
          >
            <source
              src={`https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/videos/${data?.videoUrl}`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className=" font-semibold text-3xl">Day {data?.day}</h1>
          <h2 className="font-base text-xl ">{data?.title}</h2>
          <div className="pt-6">
            <h3 className=" underline pb-2"> What did i learn? </h3>
            <p className="text-sm text-muted-foreground tracking-tight leading-2">
              {data?.learning && formatText(data.learning)}
            </p>
          </div>
          <div className="pt-6">
            <h3 className=" underline pb-2"> What did i create? </h3>
            <p className="text-sm text-muted-foreground tracking-tight leading-2">
              {data?.create && formatText(data.create)}
            </p>
          </div>
          <div className="pt-6">
            <h3 className=" underline pb-2"> What resources did i use? </h3>
            <p className="text-sm text-muted-foreground tracking-tight leading-2">
              {data?.resources && formatText(data.resources)}
            </p>
          </div>

          <div className="pt-6">
            <h3 className=" underline pb-2"> Final Thoughts </h3>
            <p className="text-sm text-muted-foreground tracking-tight leading-2">
              {data?.reflection && formatText(data.reflection)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
