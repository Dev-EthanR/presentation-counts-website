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
    <>
      <header
        className={` ${
          isOpen && "min-h-[120dvh]  pt-12"
        } min-h-30 text-2xl pt-4 md:px-4 linear-bg pb-4`}
      >
        <div className={`grid grid-cols-3 gap-y-7 lg:flex lg:items-center `}>
          <Image
            src="/images/icon.png"
            alt="logo"
            className="w-20 h-20"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center justify-center lg:col-start-1 lg:col-span-3 mx-auto">
            <Link
              href="/"
              className="col-span-2 self-center pr-12"
              tabIndex={-1}
            >
              <span className="font-shelley text-6xl text-center text-white">
                Presentation Counts
              </span>
            </Link>
            <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
              Property Stylists
            </span>
          </div>
          <div className="lg:hidden">
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      <div className="hidden lg:flex justify-center py-4 bg-secondary lg:sticky top-0 z-50 ">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
