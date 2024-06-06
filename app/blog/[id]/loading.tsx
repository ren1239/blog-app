import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="w-[75%] mx-auto mt-10 mb-36">
      <div className="grid grid-cols-2 ">
        <Skeleton className=" w-3/4  h-[600px]" />
        <div className="flex flex-col gap-y-4">
          <Skeleton className=" w-1/4   h-11" />
          <Skeleton className=" w-2/4   h-11" />
          <Skeleton className=" w-1/4   h-4" />
          <Skeleton className=" w-full   h-[400px]" />
          <Skeleton className=" w-1/4   h-4" />
          <Skeleton className=" w-full   h-[400px]" />{" "}
          <Skeleton className=" w-1/4   h-4" />
          <Skeleton className=" w-full   h-[400px]" />
        </div>
      </div>
    </div>
  );
}
