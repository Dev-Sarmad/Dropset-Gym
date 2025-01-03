import { motion } from "motion/react";

interface LineProps {
  lineWidth?: string;
  lineText: string;
  show?: string;
}
function Pointer({ lineText, lineWidth, show }: LineProps) {
  return (
    <motion.div
      className={`${show}  items-center`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 35 }}
      viewport={{ amount: "all" }}
      transition={{ duration: 2 }}
    >
      <div className="md:text-center w-15 md:w-36 lg:w-60  rounded-full flex flex-wrap items-center justify-center ml-4">
        <span className="text-sm md:text-lg font-semibold ">{lineText}</span>
      </div>
      <hr className="ml-4  h-[1px] mt-5 " style={{ width: lineWidth }} />
    </motion.div>
  );
}

export default Pointer;
