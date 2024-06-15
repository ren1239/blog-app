import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import { UserNav } from "./UserNav";
import { DarkModeToggle } from "./DarkModeToggle";
import LogoComponent from "./LogoComponent";
import { Skeleton } from "@/components/ui/skeleton";
import LogoDark from "../../public/LogoDark.png";

export default function NavBar() {
  return (
    <nav className="w-full bg-black text-white ">
      <div className="flex items-center justify-between  mx-auto px-5 lg:px-10 py-5 ">
        <Link href={"/"}>
          <Image src={LogoDark} alt="logo" className="w-10 lg:w-14" />
        </Link>
        <div className="flex gap-2 items-center">
          <div className=" flex gap-x-6 px-10">
            <Link className="text-sm block" href={"/main"}>
              Journey
            </Link>
            <Link className="text-sm hidden md:block" href={"/main"}>
              About
            </Link>
            <Link className="text-sm hidden md:block" href={"/main"}>
              Contact
            </Link>
          </div>
          <DarkModeToggle />
          <UserNav />
        </div>
      </div>
    </nav>
  );
}
