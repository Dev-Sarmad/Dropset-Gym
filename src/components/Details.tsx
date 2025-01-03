import Pointer from "./Pointer";

function Details() {
  return (
    <div className="main-container mt-20">
      <div className="relative flex items-center justify-around overflow-x-hidden">
        <div className="p-3">
          <div className="absolute top-[170px] md:top-[15rem] lg:top-[280px]">
            <Pointer
              lineText="distance & pace"
              lineWidth="200px"
              show="block"
            />
          </div>
          <div className="absolute top-[220px] md:top-[18rem] lg:top-[350px]">
            <Pointer lineText="sets & reps" lineWidth="200px" show="block" />
          </div>
          <div className="absolute top-[270px] lg:top-[450px] md:top-[22rem]">
            <Pointer lineText="intervals" lineWidth="200px" show="block" />
          </div>
          <div className="absolute top-[320px] lg:top-[530px] md:top-[25rem]">
            <Pointer
              lineText="Mark-to-complete"
              lineWidth="200px"
              show="block"
            />
          </div>
          <div className="absolute top-[370px] lg:top-[600px] md:top-[30rem]">
            <Pointer lineText="duration timer" lineWidth="200px" show="block" />
          </div>
        </div>
        <div className="p-3 translate-x-48">
          <img src="details.png" alt="" className="md:w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Details;
