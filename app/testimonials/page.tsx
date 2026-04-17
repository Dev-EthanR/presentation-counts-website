import TestimonialBlockContent from "./components/TestimonialBlockContent";
import TestimonialBlockHeader from "./components/TestimonialBlockHeader";
import TestimonialBoxes from "./components/TestimonialBoxes";

const TestimonialPage = () => {
  return (
    <section className="pt-7 mx-4">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-22 lg:mb-20 mb-7.5 px-6">
        <TestimonialBlockHeader
          image={{
            src: "/images/gallery/02image.jpg",
            alt: "Styled living room with timber ceiling and gold abstract artwork",
          }}
        />
        <TestimonialBlockContent
          title={
            <>
              Success in Balwyn &{" "}
              <span className="lg:block"> Hawthorn East </span>
            </>
          }
          authorName="Charlie - Property Investor"
          authorLocation="Camberwell"
        >
          Tess has a great eye for design and interior decoration. After styling
          our Balwyn unit, which attracted multiple bidders and a successful
          auction sale, we use Presentation Counts again for our Hawthorn East
          flat in 2025, which sold within 8 days. We found Presentation Counts
          pleasant and efficient to deal with and Tess always ready to listen
          and liaise if we had suggestions of our own, making us feel very
          comfortable that our property sale would be afforded the best
          opportunity for a timely and successful sale.
        </TestimonialBlockContent>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center lg:gap-22 mb-20 mx-5">
        <TestimonialBlockHeader
          image={{
            src: "/images/gallery/15image.jpg",
            alt: "",
          }}
          style="lg:h-120! lg:w-120!"
        />
        <TestimonialBlockContent
          title="An Effortless Process"
          authorName="Leonie "
          authorLocation="Forest Hill"
        >
          We were so happy with the service provided by Presentation Counts.
          From the first phone call with Tess until the furniture was removed,
          the entire process was professional and effortless. The staging made
          our old house look fresh and modern, which created much more interest
          from buyers. The team installing and removing the furniture were very
          careful and the transformation happened surprisingly quickly. We would
          highly recommend their services.
        </TestimonialBlockContent>
      </div>
      <TestimonialBoxes />
    </section>
  );
};

export default TestimonialPage;
