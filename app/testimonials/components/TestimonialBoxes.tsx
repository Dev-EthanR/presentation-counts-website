import TestimonialBox from "./TestimonialBox";

interface Words {
  text: string;
  author: string;
  colspan?: string;
}

export const testimonialContent: Words[] = [
  {
    text: "I have just viewed the property on realestate.com- it looks absolutely amazing, thank you so much for all you have done.",
    author: "Jane E- South Yarra",
  },
  {
    text: "Many thanks for all your work related to this property. It has certainly been much appreciated as had Presentation Counts positive /can-do attitude. I look forward to working with you again in the future.",
    author: "Sue B",
  },
  {
    text: "Thanks again for your wonderful styling. You and Ray certainly made it look fabulous and the buyer loved it straight away.",
    author: "Caroline C",
  },
  {
    text: "It looked absolutely fantastic and I’m sure it contributed in a huge way to our very quick sale and getting a good sale price. Thoroughly recommend this business. It was effortless on our part.",
    author: "Jennifer M",
  },
  {
    text: "We had a successful auction on Saturday and received lots of good feedback about the presentation of the unit. Thank you so much for presenting it so beautifully.",
    author: "Rita",
  },
  {
    text: "We would like to say thanks to you, Ray and the whole team for your professional service and the stylish furniture which defiantly helped with the sale of the property. We wish you all the best.",
    author: "David & Verity",
  },
  {
    text: "Thank you for your service. It has been a pleasure working with you, and our place at 73 River St, Richmond looked amazing.",
    author: "Geoff",
  },
  {
    text: "We were delighted with the beauty and professionalism of the styling of the unit which you carried out. So thank you once again to all the team members involved in this successful project.",
    author: "Nora P",
  },
  {
    text: "We just wanted to say thank you, with the way you styled our apartment at 539 St Kilda Rd it looks amazing and it exceeded our expectations and we love the inviting way you put it all together. It showcases our home.",
    author: "Tony & Judy",
    colspan: "col-span-2",
  },
  {
    text: "I had previously used the services of Presentation Counts & would be happy to use them again. On this recent occasion with my apartment in South Yarra they arranged a full suite of services including, plastering, internal painting, new carpet & furniture styling. They were very professional and easy to work with. And I did end up achieving a great result for the sale of this apartment.",
    author: "Jacqui",
    colspan: "col-span-2",
  },
];

const TestimonialBoxes = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto max-w-310 gap-8 mb-12 ">
      {testimonialContent.map((testimonial) => (
        <TestimonialBox
          key={testimonial.author}
          text={testimonial.text}
          author={testimonial.author}
          style={testimonial.colspan}
        />
      ))}
    </div>
  );
};

export default TestimonialBoxes;
