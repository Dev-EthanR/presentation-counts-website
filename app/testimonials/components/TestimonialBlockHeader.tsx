import clsx from "clsx";
import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  image: Image;
  style?: string;
}

const TestimonialBlockHeader = ({ image, style }: Props) => {
  return (
    <div className="max-w-130 relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={750}
        height={600}
        className={clsx(
          style,
          "object-cover max-w-130 w-full h-80 lg:h-150 mb-6 rounded-xl",
        )}
      />
    </div>
  );
};

export default TestimonialBlockHeader;
