import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full ">
      <div className="w-full relative">
        <Image
          src="/images/gallery/image18.jpg"
          alt=""
          width={8000}
          height={8000}
          className="select-none"
        />
        <h1 className="absolute top-1/3 left-1/6 lg:left-1/4 -translate-y-1/3 -translate-x-1/6 lg:-translate-x-1/4 ">
          <span className=" text-white text-base md:text-4xl  uppercase font-light font-montserrat  ">
            Styled to
          </span>{" "}
          <br />
          <span className="italic uppercase text-warmwhite text-[42px] md:text-8xl font-cormorant font-extrabold ">
            sell
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
