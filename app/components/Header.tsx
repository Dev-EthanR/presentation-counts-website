"use client";
import { useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Navbar";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useLockBodyScroll(isOpen);
  return (
    <>
      <header
        // className={` ${
        //   isOpen && "min-h-[120dvh]  pt-12"
        // } min-h-30 text-2xl pt-4 md:px-4 linear-bg pb-4 relative bg-black`}
        aria-label="Site header"
        className={clsx(
          "bg-linear-to-r from-black via-[#8c7a2b] to-black text-white",
          isOpen && "min-h-[120dvh]  pt-12",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Image
            src="/images/icon.png"
            alt="Presentation Counts ornament"
            className="size-12 lg:size-20 "
            width={80}
            height={80}
          />
          <div className="text-center">
            <div className="font-shelley text-3xl lg:text-6xl tracking-wide text-white">
              Presentation Counts
            </div>
            <p className="text-yellow-200/80 text-xs tracking-[0.3em] uppercase mt-1">
              {" "}
              Property Stylists
            </p>
          </div>
          <div className="w-15">
            <div className="lg:hidden">
              <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
        {/* <div className={`grid grid-cols-3 gap-y-7 lg:flex lg:items-center `}>
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
        </div> */}
        <div className="h-0.5 bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
      </header>
      <div className="hidden lg:flex justify-center py-4 bg-secondary lg:sticky top-0 z-50 ">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
