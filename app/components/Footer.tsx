"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { links } from "./Navbar";

const Footer = () => {
  return (
    <footer className="bg-size-[83px] h-full lg:h-40 w-full text-2xl flex flex-col py-4 lg:py-8 text-white bg-secondary">
      <h2 className="text-center italic text-xl lg:text-3xl w-full">
        Experienced.{" "}
        <span className="text-primary">Professional. Trusted.</span>
      </h2>

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
          <span className="text-base bottomBorder whitespace-nowrap lg:whitespace-normal lg:w-full lg:border-b-0 lg:border-r lg:pr-3 border-white ">
            03 9482 2722
          </span>
          <span className="text-base bottomBorder lg:border-b-0 lg:pl-3 lg:max-w-28 border-white">
            info@presentationcounts.com.au
          </span>
        </div>
        <div className="mx-12 mt-2">
          <a
            href="https://www.instagram.com/presentationcounts/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
