import React from "react";
import { stackItems } from "../lib/stackItems";
import Image from "next/image";

export default function TechStackShowcase({
  techStackName,
}: {
  techStackName: string[];
}) {
  const techStackItems = stackItems.filter((items) =>
    techStackName.includes(items.name)
  );

  console.log("techstackitems", techStackItems);

  return techStackItems.map((item) => (
    <div className=" flex w-8 h-8">
      <Image src={item.imageUrl} alt={"logo"} width={30} height={30} />
    </div>
  ));
}
