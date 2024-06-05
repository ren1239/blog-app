"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Counter({ name }: { name: string }) {
  const [day, setDay] = useState(0);

  const handleClick = (type: string) => {
    console.log(day);
    if (type === "plus") setDay(day + 1);
    if (day > 0 && type === "minus") setDay(day - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <input type="hidden" name={name} value={day} />

      <Button
        variant={"outline"}
        size={"icon"}
        type="button"
        onClick={() => handleClick("minus")}
      >
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <h1>{day}</h1>
      <Button
        variant={"outline"}
        size={"icon"}
        type="button"
        onClick={() => handleClick("plus")}
      >
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}
