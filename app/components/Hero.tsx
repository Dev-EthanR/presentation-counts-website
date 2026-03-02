import Image from "next/image";
const Hero = () => {
  const HeroImage = [
    {
      src: "/images/gallerys/image2.jpg",
      alt: "",
      text: "Property Syling",
    },
    {
      src: "/images/gallerys/image0.jpeg",
      alt: "",
      text: "Pre sale Renovation",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {HeroImage.map((img) => (
        <div key={img.text} className="max-h-198">
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={100}
            className="w-full h-[85%] object-cover "
            // className="w-133 h-90 object-cover"
          />
          <p className="text-center font-medium text-2xl mt-2 ">{img.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Hero;
