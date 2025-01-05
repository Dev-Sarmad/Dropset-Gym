import { MdOutlineDownload } from "react-icons/md"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import { landingPageParagraphs } from "../constants"

function CTA() {
  return (
    <div className="main-container p-4 mt-10">
        <div className="flex items-center justify-center">

        <Heading headline="Download from the app store" className="text-4xl font-semibold md:text-7xl md:font-bold lg:text-8xl xl:p-4" />
        <MdOutlineDownload size={100} className="size-52 lg:size-60 lg:pr-3 xl:mr-28" />
        </div>
        <Paragraph paragraph={landingPageParagraphs.downloadPara} className=" text-left text-xl tracking-tighter p-3 lg:w-3/4 lg:text-2xl lg:text-left xl:text-3xl xl:font-thin xl:p-4 xl:ml-5" /> 
    </div>
  )
}

export default CTA