import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/Logo.png";
import { UserNav } from "./UserNav";

export default function NavBar() {
  return (
    <nav className="flex space justify-between items-center mx-auto px-5  lg:px-10 container gap-x-4 py-5">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className="w-10 lg:w-14 " />
      </Link>
      <Input
        type="text"
        placeholder="Seach"
        className=" rounded-full py-2 px-5 w-36 max-w-sm"
      />
      <div>
        <UserNav />
      </div>
    </nav>
  );
}
