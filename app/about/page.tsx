import Image from "next/image";
import Information from "../components/Information";
import { Metadata } from "next";

const AboutPage = () => {
  return (
    <div className="text-white">
      <article className="max-w-3xl mx-auto px-6 py-14 flex flex-col">
        <Image
          src={"/images/gallery/03image.jpg"}
          alt={"Beautifully styled Melbourne living room by Presentation Counts"}
          width={400}
          height={400}
          className="object-cover w-full mb-6 rounded-lg"
        />
        <Information />
      </article>
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Presentation Counts team — Melbourne's experienced property stylists. Ray and Sally Rodgers lead a team with 20+ years of styling expertise, helping Melbourne homes sell faster.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Presentation Counts",
    description:
      "Meet the team behind Melbourne's most trusted property styling service. 20+ years experience.",
    images: [
      {
        url: "/images/gallery/03image.jpg",
        width: 1200,
        height: 630,
        alt: "Presentation Counts styled Melbourne property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/gallery/03image.jpg"],
  },
};
