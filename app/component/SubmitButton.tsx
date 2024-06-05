"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button size={"lg"} disabled>
          <Loader2 className="animate-spin w-4 h-4 mr-2" />
          Please wait
        </Button>
      ) : (
        <Button size={"lg"}>Submit</Button>
      )}
    </>
  );
}
