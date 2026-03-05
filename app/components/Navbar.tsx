import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface Link {
  name: string;
  href: string;
}

const NavBar = ({ isOpen, setIsOpen }: Props) => {
  const menuStateImage = isOpen
    ? "/images/icons/close.svg"
    : "/images/icons/menu.svg";

  const links: Link[] = [
    { name: "Home", href: "/" },
    { name: "Styling Gallery", href: "property-styling-gallery" },
    {
      name: "Renovation Gallery",
      href: "pre-sale-renovation-gallery",
    },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
    { name: "About Us", href: "about" },
  ];

  const navLinks = () => {
    return (
      <nav className="text-[#F5F5F2] col-span-full " id="menu">
        <div className="flex gap-6 lg:flex-row lg:text-xl text-2xl lg:justify-end lg:flex-wrap">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-shadow-md text-shadow-background"
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
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="justify-self-end pr-5"
          aria-expanded={isOpen}
          aria-controls="menu"
        >
          <img className="fillter-white w-10" src={menuStateImage} alt="" />
        </button>
        {isOpen && navLinks()}
      </div>
      <div className="hidden lg:block">{navLinks()}</div>
    </>
  );
};

export default NavBar;
