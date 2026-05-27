import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const images = [
  {
    before: "/images/before-after/01before.jpg",
    after: "/images/before-after/01after.webp",
  },
  {
    before: "/images/before-after/02before.webp",
    after: "/images/before-after/02after.webp",
  },
  {
    before: "/images/before-after/03before.webp",
    after: "/images/before-after/03after.webp",
  },
  {
    before: "/images/before-after/04before.webp",
    after: "/images/before-after/04after.webp",
  },
];

const BeforeAfter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
      {images.map((image) => (
        <Fragment key={image.before}>
          <figure className="overflow-hidden rounded-lg shadow-lg relative aspect-square">
            <Image
              src={image.before}
              alt="After"
              width={600}
              height={400}
              className="object-cover h-full"
            />
            <figcaption className="text-center mt-2 text-3xl text-gray-100 text-shadow-md text-shadow-black absolute top-0 right-4 font-extrabold">
              Before
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg shadow-lg relative aspect-square">
            <Image
              src={image.after}
              alt="After"
              width={600}
              height={400}
              className="object-cover h-full"
            />
            <figcaption className="text-center mt-2 text-3xl text-gray-100 text-shadow-md text-shadow-black absolute top-0 right-4 font-extrabold">
              After
            </figcaption>
          </figure>
        </Fragment>
      ))}
    </div>
  );
};

export default BeforeAfter;
