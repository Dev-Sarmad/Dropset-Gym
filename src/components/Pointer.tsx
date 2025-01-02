import { motion } from "motion/react";

interface LineProps {
  lineWidth: string;
  lineText: string;
}
function Pointer({ lineText, lineWidth }: LineProps) {
  return (
    <motion.div className="hidden md:block items-center" initial={{opacity:0}} whileInView={{opacity:35}} viewport={{amount:"all"}} transition={{duration:2}}>
      <div className="w-10 h-10  rounded-full flex items-center justify-center ml-4">
        <span className=" text-lg font-semibold">{lineText}</span>
      </div>
      <hr
        className="ml-4  h-[1px] mt-5 "
        style={{ width: lineWidth }}
      />
    </motion.div>
  );
}

export default Pointer;
