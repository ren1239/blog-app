import Link from "next/link";
interface iAppProps {
  videoPath: string;
  day: number;
  learning: string;
  title: string;
  thumbnailPath: string;
}

export default function BlogCard({
  videoPath,
  day,
  learning,
  title,
  thumbnailPath,
}: iAppProps) {
  return (
    <div className="flex flex-col ">
      <div className="  w-full relative">
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
        <Link href={""}>
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
