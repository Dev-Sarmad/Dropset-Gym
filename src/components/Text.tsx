import { useScroll, motion, useTransform } from "motion/react";
import { useRef } from "react";

function Text({ text, direction }: { text: string; direction: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [-100 * dir, 100 * dir]);

  return (
    <div
      ref={ref}
      className="main-container flex flex-col overflow-hidden mt-10"
    >
      <motion.h2
        style={{ x }}
        className="text-6xl font-extrabold text-center md:text-8xl lg:text-9xl"
      >
        {text}
      </motion.h2>
    </div>
  );
}

export default Text;
