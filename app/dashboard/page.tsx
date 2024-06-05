import BlogCard from "../component/BlogCard";
import prisma from "../lib/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    where: {
      addedDescription: true,
      addedVideo: true,
      addedCategory: true,
    },
    select: {
      videoUrl: true,
      id: true,
      day: true,
      learning: true,
      title: true,
    },
  });
  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="w-4/5 mx-auto">
      <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
        Daily Blog
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data.map((item) => (
          <div className="">
            <BlogCard
              key={item.id}
              videoPath={item.videoUrl as string}
              day={item.day as number}
              learning={item.learning as string}
              title={item.title as string}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
