"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";

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

export function DeleteFromFavoriteButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button
      variant={"outline"}
      size={"icon"}
      className="bg-primary-foreground"
      disabled
    >
      <Loader2 className="w-4 h-4 text-primary animate-spin" />
    </Button>
  ) : (
    <Button
      variant={"outline"}
      size={"icon"}
      className="bg-primary-foreground"
      type="submit"
    >
      <Heart className="w-4 h-4 text-primary" fill="#E21C49" />
    </Button>
  );
}

export function AddToFavoriteButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button
      variant={"outline"}
      size={"icon"}
      className="bg-primary-foreground"
      disabled
    >
      <Loader2 className="w-4 h-4 text-primary animate-spin" />
    </Button>
  ) : (
    <Button
      variant={"outline"}
      size={"icon"}
      className="bg-primary-foreground"
      type="submit"
    >
      <Heart className="w-4 h-4 text-primary" />
    </Button>
  );
}
