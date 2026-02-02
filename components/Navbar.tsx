"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const currentPathname = usePathname();
  const navItems = [
    {
      path: "/",
      displayText: "Home",
    },
    {
      path: "/companions",
      displayText: "Companions",
    },
    {
      path: "/my-journey",
      displayText: "My Journey",
    },
  ];

  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer gap-2.5">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        {navItems?.map((nav) => (
          <Link
            key={nav.path}
            className={cn(
              currentPathname === nav?.path && "text-primary font-bold",
            )}
            href={nav?.path}
          >
            {nav?.displayText}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
