import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex gap-3">
      <div>
        <Image
          src="/images/gallerys/image1.jpg"
          alt=""
          width={100}
          height={100}
        />
        <p>Property Syling</p>
      </div>
      <div>
        <Image
          src="/images/gallerys/image1.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Hero;
