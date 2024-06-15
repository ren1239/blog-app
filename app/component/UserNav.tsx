import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { createBlog } from "../actions";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createBlogWithId = createBlog.bind(null, {
    userId: user?.id as string,
  });

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full py-2 px-2 lg:px-4 lg-px-4 items-center gap-x-3 flex border-2 ">
          <MenuIcon className="w-6 h-6" />
          <Image
            className="w-6 hidden lg:block rounded-full"
            src={
              user?.picture ??
              "https://static.thenounproject.com/png/3263829-200.png"
            }
            alt="userimage"
            width={16}
            height={16}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-[200px]">
          {user ? (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <form className="w-full" action={createBlogWithId}>
                    <button type="submit" className="w-full  text-start">
                      Post new blog
                    </button>
                  </form>
                </DropdownMenuItem>
                <DropdownMenuItem> Settings</DropdownMenuItem>
                <DropdownMenuItem> Profile</DropdownMenuItem>
                <DropdownMenuItem> Settings</DropdownMenuItem>
                <DropdownMenuItem disabled> Support Me</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutLink className="w-full flex justify-between">
                  Logout
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </LogoutLink>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel>Welcome</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* <DropdownMenuItem>
                  <RegisterLink className="w-full">Register</RegisterLink>
                </DropdownMenuItem> */}
                <DropdownMenuItem>
                  <LoginLink className="w-full ">Login</LoginLink>
                </DropdownMenuItem>
                <DropdownMenuItem disabled> Support Me</DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
