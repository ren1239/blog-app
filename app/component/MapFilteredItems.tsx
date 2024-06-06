"use client";

import Image from "next/image";
import { stackItems } from "../lib/stackItems";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import Link from "next/link";

export function MapFilteredItems() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathName = usePathname();

  const createQuaryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-0 gap-y-2 md:gap-x-3 mt-5 w-full justify-center flex-wrap pb-4">
      {stackItems.map((item) => (
        <div key={item.id}>
          <Link
            href={pathName + "?" + createQuaryString("filter", item.name)}
            className={cn(
              search === item.name
                ? "border-b-2  pb-2 flex-shrink-0"
                : "opacity-50 flex-shrink-0",
              "flex flex-col w-16 md:w-24 gap-y-3 items-center hover:opacity-100 hover:scale-110 py-1 shadow-md rounded-sm"
            )}
          >
            <div className="relative w-6 h-6 ">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={600}
                height={600}
                className="w-6 h-6"
              />
            </div>
            <p className="text-[8px] md:text-xs font-medium">{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
