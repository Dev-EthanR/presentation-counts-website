import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full ">
      <div>
        <Image
          src="/images/gallerys/image2.jpg"
          alt=""
          width={8000}
          height={8000}
          className="w-full "
        />
      </div>
    </section>
  );
};

export default Hero;
