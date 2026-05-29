import fs from "fs";
import { Metadata } from "next";
import Image from "next/image";
import path from "path";

const photosDir = path.join(process.cwd(), "public/images/gallery");

const PropertyStylingGallery = () => {
  const files = fs.readdirSync(photosDir);
  return (
    <main className="py-6">
      <header>
        <p className="text-center text-sm md:text-base leading-relaxed text-white/80 mb-12 max-w-261.25 mx-auto px-3">
          At Presentation Counts we believe the strategic art of preparing a
          home for sale is to maximize its market appeal, aiming for a faster
          sale and a higher price. With over 20+ years experience we curate
          spaces using carefully selected furniture, artwork, and accessories or
          create an aspirational lifestyle that appeals to a broad range of
          buyers.
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  max-w-360 mx-auto px-12">
        {files.map((file, index) => (
          <Image
            className="h-80 w-full object-cover"
            key={file}
            src={`/images/gallery/${file}`}
            alt={`Professionally styled Melbourne property — photo ${index + 1}`}
            width={500}
            height={500}
            loading="lazy"
          />
        ))}
      </section>
    </main>
  );
};

export default PropertyStylingGallery;

export const metadata: Metadata = {
  title: "Styling Gallery",
  description:
    "Browse our property styling gallery showcasing 20+ years of beautifully staged Melbourne homes. See how Presentation Counts transforms properties to sell faster and at higher prices.",

  openGraph: {
    title: "Styling Gallery | Presentation Counts",
    description:
      "Browse our gallery of professionally styled Melbourne homes. See the Presentation Counts difference.",
    images: [
      {
        url: "/images/gallery/01image.jpg",
        width: 1200,
        height: 630,
        alt: "Professionally styled Melbourne home by Presentation Counts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/gallery/01image.jpg"],
  },
};
