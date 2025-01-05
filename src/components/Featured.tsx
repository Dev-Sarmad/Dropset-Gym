import Text from "./Text";
import { featured } from "../constants";
function Featured() {
  return (
    <div className="main-container p-4 mt-28">
      <Text text="Fully" direction="left" />
      <Text text="featured." direction="right" />
      <div id="featured" className="flex flex-col items-center mt-20 ">
        {featured.map((item) => (
          <div className="mt-5" key={item.heading}>
            <h1 className="text-4xl font-extrabold md:text-7xl">
              {item.heading}
            </h1>
            <h3 className="mt-3 font-medium text-xl text-[#898d9c] tracking-tight md:mt-4 md:text-3xl">
              {item.subHeading}
            </h3>
            <div className="lg:h-[130vh] lg:w-full ">
              <img
                src={item.image}
                alt={item.image}
                className="mt-3 md:mt-10 lg:h-full lg:object-contain lg:w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
