import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full ">
      <div className="w-full relative  h-[60vh] md:h-[85vh] after:absolute after:inset-0 after:bg-linear-to-r after:from-black/60 after:via-black/20 after:to-transparent">
        {" "}
        <Image
          src="/images/gallery/image18.jpg"
          alt="Styled dining room with timber ceiling and gold abstract artwork"
          fill
          priority
          className="object-cover object-center select-none"
        />
        <h1 className="absolute z-10 top-1/3 left-3 lg:left-1/5 -translate-y-1/3  lg:-translate-x-1/5 ">
          <span className="block text-white text-base md:text-4xl  uppercase font-light font-montserrat  ">
            Styled to
          </span>{" "}
          <span className="block italic uppercase text-warmwhite text-[42px] md:text-8xl font-cormorant font-extrabold ">
            sell
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
