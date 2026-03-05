"use client";
import { useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useLockBodyScroll(isOpen);
  return (
    <header
      className={`  flex ${
        isOpen && "min-h-[120dvh] items-start pt-12"
      } min-h-30 text-2xl pt-4 md:px-4 lg:sticky top-0 z-50 linear-bg`}
    >
      <div
        className={`grid grid-cols-3 gap-y-7 lg:flex lg:items-center mx-auto max-w-360`}
      >
        <Image
          src="/images/icon.jpg"
          alt="logo"
          className="w-20 h-20"
          width={100}
          height={100}
        />
        <div className="flex flex-col items-center ">
          <Link href="/" className="col-span-2 self-center pr-12" tabIndex={-1}>
            <Image
              className="select-none px-4 lg:px-0 w-90 "
              src="/images/logo.png"
              alt="Presentation Counts Logo"
              width={500}
              height={100}
            />
          </Link>
          <span className="text-black uppercase tracking-widest text-sm">
            Property StyleLists
          </span>
        </div>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
