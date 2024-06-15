import BlogCard from "../component/BlogCard";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MapFilteredItems } from "../component/MapFilteredItems";

async function getData({ userId }: { userId: string | undefined }) {
  const data = await prisma.blogPost.findMany({
    where: {
      addedDescription: true,
      addedVideo: true,
      addedCategory: true,
      addedTechStack: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      videoUrl: true,
      id: true,
      day: true,
      learning: true,
      title: true,
      thumbnailUrl: true,
      Favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
    },
  });
  return data;
}

export default async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ userId: user?.id });

  return (
    <div className="w-4/5 mx-auto">
      <MapFilteredItems />

      <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
        Daily Blog
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data.map((item) => (
          <div className="" key={item.id}>
            <BlogCard
              key={item.id}
              videoPath={item.videoUrl as string}
              day={item.day as number}
              learning={item.learning as string}
              title={item.title as string}
              thumbnailPath={item.thumbnailUrl as string}
              blogId={item.id}
              pathName={"/dashboard"}
              isInFavoriteList={item.Favorite.length > 0 ? true : false}
              favoriteId={item.Favorite[0]?.id}
              userId={user?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
