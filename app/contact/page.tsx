import Image from "next/image";
import Table from "./components/Table";

const ContactPage = () => {
  return (
    <main className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-6 py-14 max-w-175 gap-6">
        <div className="order-1 lg:order-0">
          <Table />
        </div>
        <Image
          src={"/images/gallery/27image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-lg "
        />
      </div>
    </main>
  );
};

export default ContactPage;
