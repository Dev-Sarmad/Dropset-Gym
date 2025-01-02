import Pointer from "./Pointer";
function Hero() {
  return (
    <div className="main-container mt-10">
      <img src="badge.svg" alt="" className="p-3" />
      <div className="relative flex justify-around items-center mt-10">
        <div>
          <div className="absolute top-[200px] ">
            <Pointer lineWidth="400px" lineText="workouts" />
          </div>
          <div className="absolute top-[300px]">
            <Pointer lineWidth="600px" lineText="Body metrics" />
          </div>
          <div className="absolute bottom-[430px]">
            <Pointer lineWidth="400px" lineText="Streak & Cooldown" />
          </div>
          <div className="absolute bottom-36 ">
            <Pointer lineWidth="370px" lineText="Highly customisable" />
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
