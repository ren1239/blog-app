"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const answer = ["Yes", "No"];
  return (
    <div className="grid grid-cols-2 gap-8 mt-10 w-2/5 mx-auto mb-36">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory as string}
      />
      {answer.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <Card
            className={
              selectedCategory === item ? "border-primary border-2" : ""
            }
            onClick={() => setSelectedCategory(item)}
          >
            <CardHeader>
              <CardTitle>{item}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
