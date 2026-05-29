import { JSX, ReactNode } from "react";

interface Props {
  title: string | JSX.Element;
  children: ReactNode;
  authorName: string;
  authorLocation: string;
}

const TestimonialBlockContent = ({
  title,
  authorName,
  authorLocation,
  children,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-5 md:gap-9">
      <div>
        <h2 className="text-xl lg:text-4xl text-white font-medium tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-white lg:max-w-100 leading-6 lg:leading-8 font-light text-xs lg:text-sm ">
          &quot;{children}&quot;
        </p>
      </div>
      <div>
        <p className="text-xs lg:text-sm  text-gray-300 mt-4 font-semibold mb-1.5">
          {authorName}
        </p>
        <p className="text-xs lg:text-sm tracking-tight uppercase text-primary">
          {authorLocation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialBlockContent;
