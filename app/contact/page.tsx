import Image from "next/image";
import Table from "../components/contact/Table";
import { Metadata } from "next";

const ContactPage = () => {
  return (
    <div className="text-white">
      <div className="sr-only">
        <h1>Contact Us</h1>
        <p>
          Ready to style your Melbourne home for sale? Get in touch with our
          property styling team today for an obligation-free quote.
        </p>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 mx-auto px-6 py-14 max-w-175 gap-6">
        <div className="order-1 lg:order-0">
          <Table />
        </div>
        <Image
          src={"/images/gallery/33image.jpg"}
          alt={
            "Beautifully styled Melbourne home interior by Presentation Counts"
          }
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-lg "
        />
      </article>
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Presentation Counts for a property styling quote. Call Tess on 0406 988 011 for styling enquiries, or Caroline on 0420 254 767 for trade enquiries. Serving all Melbourne suburbs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Presentation Counts",
    description:
      "Get in touch with Melbourne's leading property stylists. Call for a quote today.",
    images: [
      {
        url: "/images/gallery/33image.jpg",
        width: 1200,
        height: 630,
        alt: "Beautifully styled Melbourne home interior by Presentation Counts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/gallery/33image.jpg"],
  },
};
