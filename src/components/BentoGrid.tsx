import { IoFlashOutline } from "react-icons/io5";
import {
  MdOutlineSwipe,
  MdSignalWifiConnectedNoInternet0,
} from "react-icons/md";
import { PiPlugsConnectedThin } from "react-icons/pi";
import Paragraph from "./Paragraph";
import { landingPageParagraphs } from "../constants";

function BentoGrid() {
  return (
    <div className="main-container max-w-6xl mx-auto md:w-3/4 mt-20">
      <div className="p-2 grid grid-cols-2 grid-rows-6 gap-2 md:grid-cols-3 md:grid-rows-4 md:gap-3 ">
        <div className="bg-[#151619] col-span-1 row-span-2 md:col-span-1 md:row-span-4 flex justify-center ">
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <PiPlugsConnectedThin size={50} className="md:size-[100px]" />
            <span className="font-semibold md:text-2xl">Big touch areas </span>
            <p className="text-xs text-left md:text-lg">
              friendly for tired hands.
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 bg-[#151619] flex justify-center">
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <MdSignalWifiConnectedNoInternet0
              size={50}
              className="md:size-[100px]"
            />
            <span className="font-semibold md:text-2xl">Works Offline </span>
            <p className="text-xs text-left md:text-lg">
              No need to worry about connectivity.
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-1 md:col-span-2 md:row-span-2 bg-[#151619] flex justify-center">
          <div className="flex justify-between space-x-10  items-center ">
            <IoFlashOutline size={50} className="md:size-[100px]" />
            <div className="flex flex-col space-y-2">
              <span className="font-semibold md:text-2xl">Fast as hell</span>
              <p className="text-xs text-left md:text-lg">
                Always smooth and speedy. <br />
                Never in your way
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#151619] col-span-2 row-span-2 md:col-span-2 md:row-span-1  flex justify-center rounded-md">
          <div className="flex flex-col p-4">
            <h1 className="text-5xl font-extrabold md:text-7xl">4:21</h1>
            <span className="mt-3 font-semibold md:text-2xl">
              viewable at distance
            </span>
            <p className="text-xs text-left md:text-lg md:pr-32">
              High availability even when putting phone down on the floor across
              the room, jumping up and down.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 md:row-span-1 bg-[#151619] flex justify-center rounded-md">
          <div className="flex flex-col items-center justify-center">
            <span className="mt-3 font-semibold md:text-2xl">
              Navigate by Swipe
            </span>
            <MdOutlineSwipe size={20} className="md:size-[100px]" />
          </div>
        </div>
      </div>
      <Paragraph
        paragraph={landingPageParagraphs.paragraph1}
        className="main-container p-3 mt-20 text-left text-2xl md:pr-28 "
      />
    </div>
  );
}

export default BentoGrid;
