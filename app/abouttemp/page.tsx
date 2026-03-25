import Table from "../about/components/Table";
import Team from "../about/components/Team";
import Values from "../about/components/Values";

const AboutPage = () => {
  return (
    <main className="text-white">
      <div className="py-16 text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
          Melbourne Property Styling
        </p>
        <h1 className="font-shelley text-5xl lg:text-6xl text-white/95 font-light">
          About Us
        </h1>
        <div className="w-20 h-px bg-primary mx-auto my-4" />
        <p className="text-[10px] tracking-[0.18em] uppercase text-white/40">
          30+ years transforming Melbourne properties
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-center text-base leading-relaxed text-white/80 mb-12">
          With over 30 years of experience, Presentation Counts specialises in
          styling homes for sale across Melbourne. From apartments and
          townhouses to family homes and developments, we create beautiful
          spaces that attract buyers.
        </p>

        <Table />
        <Values />
        <Team />
      </div>
    </main>
  );
};

export default AboutPage;
