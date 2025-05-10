"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  //{ name: "Theme", href: "/theme" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full backdrop-blur-3xl">
      <div className="max-w-[96rem] w-full flex flex-row items-center justify-between p-4 md:px-12 lg:px-24 mx-auto">
        <Link
          href="/"
          className="mt-6 md:mt-0 w-fit flex flex-col items-center justify-center text-crust font-bold font-plex text-3xl whitespace-nowrap"
        >
          <span className="text-lg">Kurt Schambach</span>
          <span className="pl-6">a3chron</span>
        </Link>
        <div>
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="z-30 bg-transparent backdrop-blur-xl fixed left-0 top-0 w-[100vw] h-[100vh] flex md:hidden items-center justify-center"
            >
              <ul className="flex flex-col items-center justify-center gap-8 bg-mantle p-4 px-6 rounded-xl border-2 border-text">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl font-bold font-plex duration-500 text-text hover:text-hover"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <ul className="hidden md:flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-bold font-plex duration-500 text-crust hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div
            onClick={() => setMenuOpen((prevBool) => !prevBool)}
            className="z-40 sticky block md:hidden bg-mantle p-4 mt-7 cursor-pointer rounded-xl text-text hover:text-hover duration-500"
          >
            {menuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
