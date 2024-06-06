import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className=" w-full relative h-[320px] rounded-lg" />
      <div className="space-y-2 flex flex-col">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
