import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["experience", "websites", "softwares","products", "application", "platforms", "solutions"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="relative z-20 mt-4 pt-4 pl-4 md:mt-8 md:pt-6 md:pl-6 text-left rounded-3xl text-white font-pixelify">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-7xl font-medium drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="text-4xl font-semibold text-[#FAFAFA]">Hi, I'm </span>
          <span className="font-extrabold md:text-7xl text-[#FFD740] drop-shadow-[0_0_16px_rgba(255,200,120,0.35)]"> Ranjit Singh Dhunna</span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl font-semibold text-[#FAFAFA] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] -mt-4 md:mt-0 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            — designing and developing
          </motion.p>
          <motion.p
            className="text-6xl font-semibold text-[#FAFAFA] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] -mt-4 md:-mt-6 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <span className="mr-3 relative -top-2 md:-top-3 text-[#FAFAFA]">seamless</span>
            <span className="inline-block align-baseline relative top-1 md:top-2">
              <FlipWords
                words={words}
                className="font-black text-8xl text-amber-200 drop-shadow-[0_0_18px_rgba(255,215,150,0.35)]"
              />
            </span>
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-5xl font-medium text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="text-4xl font-semibold text-[#FAFAFA]">Hi, I'm </span>
          <span className="font-extrabold text-5xl text-[#FFD740] drop-shadow-[0_0_16px_rgba(255,200,120,0.35)]">Ranjit Singh Dhunna</span>
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-[#FAFAFA] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] -mt-3 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            — designing
          </motion.p>
          <motion.p
            className="text-5xl font-semibold text-[#FAFAFA] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] -mt-3 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <span className="inline-block align-baseline relative top-1">
              <FlipWords
                words={words}
                className="font-bold text-6xl text-amber-200 drop-shadow-[0_0_16px_rgba(255,215,150,0.35)]"
              />
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
