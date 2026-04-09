import Image from "next/image";
import Information from "../components/Information";

const AboutPage = () => {
  return (
    <main className=" text-white ">
      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col">
        <Image
          src={"/images/gallery/03image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="object-cover w-full mb-6 rounded-lg"
        />
        <Information />
      </div>
    </main>
  );
};

export default AboutPage;
