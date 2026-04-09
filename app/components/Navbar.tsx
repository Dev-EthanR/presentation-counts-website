"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface Link {
  name: string;
  href: string;
}

export const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Styling Gallery", href: "/property-styling-gallery" },
  {
    name: "Makeover Gallery",
    href: "/makeover-gallery",
  },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();
  const menuStateImage = isOpen
    ? "/images/icons/close.svg"
    : "/images/icons/menu.svg";

  const navLinks = () => {
    return (
      <nav className="text-[#F5F5F2] col-span-full bg-secondary " id="menu">
        <div className="flex flex-col gap-4  lg:flex-row lg:text-xl lg:justify-end xl:justify-start text-2xl lg:flex-wrap">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-shadow-md text-shadow-background text-center lg:text-left
                ${pathname === link.href && "text-primary"}
                `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  return (
    <>
      <div className="lg:hidden flex justify-end items-start ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && "absolute top-0 right-0 z-40 mt-6 pr-5"}`}
          aria-expanded={isOpen}
          aria-controls="menu"
        >
          <Image
            className="fillter-white w-10"
            src={menuStateImage}
            alt=""
            width={40}
            height={40}
          />
        </button>
        {isOpen && (
          <>
            <div className="w-full absolute top-0 left-0 h-full bg-secondary" />
            <div className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              {navLinks()}
            </div>
          </>
        )}
      </div>
      <div className="hidden lg:block">{navLinks()}</div>
    </>
  );
};

export default NavBar;
