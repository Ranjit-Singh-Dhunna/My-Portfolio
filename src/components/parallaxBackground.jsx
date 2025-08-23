import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const x = useSpring(scrollYProgress, { damping: 50 });
  // Restore original ranges (only mountain-3 visual size will be reduced)
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 -z-10 pointer-events-none bg-black/20">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            // Apply a subtle dulling only on non-mobile
            filter: isMobile ? undefined : "saturate(0.85) brightness(0.95)",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: isMobile ? "calc(100% + 130px) 100%" : "calc(100% + 40px) 100%",
            backgroundRepeat: "no-repeat",
            // Responsive size: smaller height on mobile
            backgroundSize: isMobile ? "auto 120%" : "auto 175%",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 (parallax + gentle float) - hidden on mobile */}
        {!isMobile && (
          <motion.div className="absolute inset-0 -z-20" style={{ y: mountain2Y }}>
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/assets/mountain-2.png)",
                // add a little left padding (shift 16px from the edge)
                backgroundPosition: "20px bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "96% 103%",
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
        {/* Mountaine Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
