"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { links } from "./Navbar";

const Footer = () => {
  return (
    <>
      <div className="h-0.5 bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
      <footer className="bg-size-[83px] h-full lg:h-40 w-full text-2xl flex flex-col py-4 lg:py-8 text-white bg-secondary ">
        <ul className="flex flex-col lg:hidden text-base pl-12 pt-4">
          {links.map((link) => (
            <li
              key={link.href}
              className="hover:brightness-85 bottomBorder whitespace-nowrap"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col  md:flex-row justify-between  max-w-375 w-full mx-auto">
          <div className="flex flex-col pl-12 pt-2 lg:block">
            <Link
              href="mailto:presentationcounts@bigpond.com.au"
              aria-label="Email us"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <IoMdMail className="text-lg shrink-0" />
              <span className="text-sm">presentationcounts@bigpond.com.au</span>
            </Link>
          </div>
          <div className="mx-12 mt-2">
            <Link
              href="https://www.instagram.com/presentationcounts/?hl=en"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-yellow-400 transition-colors" />
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/40 text-center mt-8">
          © {new Date().getFullYear()} Presentation Counts. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
