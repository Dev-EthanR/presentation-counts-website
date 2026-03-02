import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const NavBar = ({ isOpen, setIsOpen }: Props) => {
  const menuStateImage = isOpen
    ? "/images/icons/close.svg"
    : "/images/icons/menu.svg";
  const navLinks = () => {
    return (
      <nav className="text-white col-span-full" id="menu">
        <div className="flex gap-6 lg:flex-row lg:text-xl text-2xl lg:justify-end lg:flex-wrap">
          <Link href="/">Home</Link>
          <Link href="about">Property Styling Gallery </Link>
          <Link href="services">Pre Sale Renovation Gallery</Link>
          <Link href="portfolio">Testimonials</Link>
          <Link href="contact">Contact</Link>
          <Link href="contact">About Us</Link>
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
