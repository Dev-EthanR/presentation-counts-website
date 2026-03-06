import fs from "fs";
import Image from "next/image";
import path from "path";

const photosDir = path.join(process.cwd(), "public/images/gallery");

const PropertyStylingGallery = () => {
  const files = fs.readdirSync(photosDir);
  return (
    <div className="bg-secondary pb-6">
      <h1 className="text-center text-2xl font-semibold text-white py-4">
        Property Styling Gallery
      </h1>
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
