import Image from "next/image";
import Table from "./components/Table";

const ContactPage = () => {
  return (
    <main className="text-white">
      <div className="py-16 text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
          Melbourne Property Styling
        </p>
        <h1 className="font-shelley text-5xl lg:text-6xl text-white/95 font-light">
          Contact Us
        </h1>
        <div className="w-20 h-px bg-primary mx-auto my-4" />
        <p className="text-[10px] tracking-[0.18em] uppercase text-white/40">
          30+ years transforming Melbourne properties
        </p>
      </div>
      <div className="grid grid-cols-2 max-h-20 mx-auto px-6 py-14 max-w-175 gap-6">
        <Table />
        <Image
          src={"/images/gallery/22image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </main>
  );
};

export default ContactPage;
