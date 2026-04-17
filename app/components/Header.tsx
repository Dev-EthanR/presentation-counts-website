"use client";
import { useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import Image from "next/image";
import NavBar from "./Navbar";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useLockBodyScroll(isOpen);
  return (
    <>
      <header
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
            <div className="font-montserrat text-2xl md:text-3xl lg:text-6xl tracking-wide text-white font-extralight">
              Presentation Counts
            </div>
            <p className="text-yellow-200/80 text-xs tracking-[0.3em] uppercase mt-1">
              Property Stylists
            </p>
          </div>
          <div className="w-15">
            <div className="lg:hidden">
              <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent" />
      </header>
      <div className="hidden lg:flex justify-center py-4 bg-secondary lg:sticky top-0 z-50 ">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
