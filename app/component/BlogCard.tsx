import Link from "next/link";
import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButton";
import { AddToFavorite, DeleteFromFavorite } from "../actions";
interface iAppProps {
  videoPath: string;
  day: number;
  learning: string;
  title: string;
  thumbnailPath: string;
  blogId: string;
  favoriteId: string;
  isInFavoriteList: boolean;
  userId: string | undefined;
  pathName: string;
}

export default function BlogCard({
  videoPath,
  day,
  learning,
  title,
  thumbnailPath,
  blogId,
  favoriteId,
  isInFavoriteList,
  userId,
  pathName,
}: iAppProps) {
  return (
    <div className="flex flex-col ">
      <div className="  w-full relative ">
        <div className="h-full min-h-[320px] relative">
          <video
            loop
            muted
            controls
            className="rounded-lg flex items-center w-full object-fill mb-3"
            poster={`https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/thumbnails/${thumbnailPath}`}
          >
            <source
              src={`https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/videos/${videoPath}`}
              type="video/mp4"
            />
          </video>
          {userId && (
            <div className="z-10 absolute top-2 right-2">
              {isInFavoriteList ? (
                <form action={DeleteFromFavorite}>
                  <input type="hidden" name="favoriteId" value={favoriteId} />
                  <input type="hidden" name="userId" value={userId} />
                  <input type="hidden" name="pathName" value={pathName} />
                  <DeleteFromFavoriteButton />
                </form>
              ) : (
                <form action={AddToFavorite}>
                  <input type="hidden" name="blogId" value={blogId} />
                  <input type="hidden" name="userId" value={userId} />
                  <input type="hidden" name="pathName" value={pathName} />
                  <AddToFavoriteButton />
                </form>
              )}
            </div>
          )}
        </div>
        <Link href={`/blog/${blogId}`}>
          <h3 className="font-bold text-base">Day {day}</h3>
          <h5 className="font-medium text-sm"> {title}</h5>
          <p className="text-muted-foreground text-xs line-clamp-4 pt-2">
            {learning}
          </p>
          <p className="pt-2 text-muted-foreground text-xs"> </p>
        </Link>
      </div>
    </div>
  );
}
