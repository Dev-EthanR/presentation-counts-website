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
        />
        <h1 className="absolute top-1/4 left-1/4 -translate-y-1/4 -translate-x-1/4 ">
          <span className="italic text-warmwhite text-7xl font-cormorant ">
            Styled
          </span>{" "}
          <br />
          <span className="uppercase text-white text-[5.625rem] font-montserrat font-extrabold ">
            to sell
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
