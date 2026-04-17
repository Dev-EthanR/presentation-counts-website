import fs from "fs";
import Image from "next/image";
import path from "path";

const photosDir = path.join(process.cwd(), "public/images/gallery");

const PropertyStylingGallery = () => {
  const files = fs.readdirSync(photosDir);
  return (
    <div className="py-6">
      <p className="text-center text-sm md:text-base leading-relaxed text-white/80 mb-12 max-w-261.25 mx-auto px-3">
        At Presentation Counts we believe the strategic art of preparing a home
        for sale is to maximize its market appeal, aiming for a faster sale and
        a higher price. With over 20+ years experience we curate spaces using
        carefully selected furniture, artwork, and accessories or create an
        aspirational lifestyle that appeals to a broad range of buyers.
      </p>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  max-w-360 mx-auto px-12">
        {files.map((file) => (
          <Image
            className="h-80 w-full object-cover"
            key={file}
            src={`/images/gallery/${file}`}
            alt=""
            width={500}
            height={500}
          />
        ))}
      </main>
    </div>
  );
};

export default PropertyStylingGallery;
