import Pointer from "./Pointer";
function Hero() {
  return (
    <div className="main-container mt-10">
      <div>
        <img src="badge.svg" alt="" />
      </div>
      <div className="relative flex justify-around items-center mt-10">
        <div>
          <div className="absolute top-[200px] ">
            <Pointer
              lineWidth="400px"
              lineText="workouts"
              show="hidden md:block"
            />
          </div>
          <div className="absolute top-[300px]">
            <Pointer
              lineWidth="600px"
              lineText="Body metrics"
              show="hidden md:block"
            />
          </div>
          <div className="absolute bottom-[430px]">
            <Pointer
              lineWidth="400px"
              lineText="Streak & Cooldown"
              show="hidden md:block"
            />
          </div>
          <div className="absolute bottom-36 ">
            <Pointer
              lineWidth="370px"
              lineText="Highly customisable"
              show="hidden md:block"
            />
          </div>
        </div>
        {/* main hero image */}
        <div className="p-3">
          <img src="workouts.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
