import Table from "./components/Table";

const ContactPage = () => {
  return (
    <main className=" text-white">
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

      <div className="max-w-3xl mx-auto px-6 py-14">
        <Table />
      </div>
    </main>
  );
};

export default ContactPage;
