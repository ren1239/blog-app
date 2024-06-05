import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubmitButton from "./SubmitButton";

export default function CreationBottomBar() {
  return (
    <>
      <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24 ">
        <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full ">
          <Link href={"/"}>
            <Button variant={"secondary"} size={"lg"}>
              Cancel
            </Button>
          </Link>
          <SubmitButton />
        </div>
      </div>
    </>
  );
}
