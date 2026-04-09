import Image from "next/image";
import Table from "./components/Table";
import Team from "./components/Team";
import Values from "./components/Values";

const AboutPage = () => {
  return (
    <main className=" text-white">
      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col">
        <Image
          src={"/images/gallery/03image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="object-cover w-full mb-6 rounded-lg"
        />
        <div>
          <p className="text-center text-base leading-relaxed text-white/80 mb-12">
            With over 20 years of experience, Presentation Counts specialises in
            styling homes for sale across Melbourne. From apartments and
            townhouses to family homes and developments, we create beautiful
            spaces that attract buyers.
          </p>

          <Table />
          <Values />
          <Team />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
