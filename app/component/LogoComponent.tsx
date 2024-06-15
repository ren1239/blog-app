"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import LogoDark from "../../public/LogoDark.png";

export default function LogoComponent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // If not mounted, return null or a loading spinner
    return null;
  }

  return (
    <>
      <Link href={"/"}>
        <Image
          src={theme === "light" ? Logo : LogoDark}
          alt="logo"
          className="w-10 lg:w-14"
        />
      </Link>
    </>
  );
}
