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
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:text-xl text-2xl">
          <Link href="/">Home</Link>
          <Link href="about">
            Property Styling <div className="text-center">Gallery</div>{" "}
          </Link>
          <Link href="services">
            Pre Sale Renovation <div className="text-center">Gallery</div>
          </Link>
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
