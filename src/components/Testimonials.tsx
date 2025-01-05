import { testimonials } from "../constants";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StarRating from "./StarRating";

function Testimonials() {
  return (
    <div className="main-container p-4 mt-20">
      <Heading
        headline="what other people think."
        className="text-5xl font-bold md:ml-24  "
      />
      <p className="pl-4 text-[#898d9c] md:ml-24">Review from our customers.</p>
      <div className=" flex flex-col space-y-3 space-x-0 md:flex-row md:flex-wrap md:justify-around ml-3">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial p-4 mt-3 md:w-[400px]" key={index}>
            <StarRating stars={testimonial.rating} />
            <h1 className="mt-4 font-bold text-xl">{testimonial.remarks}</h1>
            <Paragraph
              paragraph={testimonial.feedback}
              className="mt-4 text-left text-[#898d9c] text-xl tracking-tighter md:text-2xl"
            />
            <strong className="mt-2">{testimonial.date}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
