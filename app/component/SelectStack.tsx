"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { stackItems } from "../lib/stackItems";
import Image from "next/image";

export default function SelectStack() {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const handleCardClick = (itemName: string) => {
    setSelectedStacks((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      <input
        type="hidden"
        name="techStack"
        value={selectedStacks as string[]}
      />
      {selectedStacks.map((stack, index) => (
        <input key={index} type="hidden" name="categoryNames[]" value={stack} />
      ))}

      {stackItems.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <Card
            className={
              selectedStacks.includes(item.name)
                ? "border-primary border-2"
                : ""
            }
            onClick={() => handleCardClick(item.name)}
          >
            <CardHeader>
              <div className="relative w-6 h-6 ">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-6 h-6"
                />
              </div>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
