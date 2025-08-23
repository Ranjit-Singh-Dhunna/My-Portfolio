import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["experience", "websites", "softwares","products", "applications", "platforms", "solutions"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-4 pt-4 pl-4 md:mt-8 md:pt-6 md:pl-6 text-left rounded-3xl text-white font-pixelify">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-7xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="text-4xl font-semibold text-white">Hi, I'm </span>
          <span className="font-bold text-[rgb(253,195,133)]"> Ranjit Singh Dhunna</span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl font-semibold text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            — a developer crafting sleek,<br /> user-friendly digital
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-8xl text-[rgb(194,158,133)]"
            />
          </motion.div>
          <motion.p
            className="text-5xl font-semibold text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-5xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="text-4xl font-semibold text-white">Hi, I'm </span>
          <span className="font-bold text-[rgb(253,195,133)]">Ranjit Singh Dhunna</span>
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            developer for
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-6xl text-[rgb(194,158,133)]"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-semibold text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
           
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
