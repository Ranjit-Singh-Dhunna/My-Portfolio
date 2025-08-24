"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data,
  title = "Experience",
  footerText,
  titleClassName = "",
  containerClassName = "c-space section-spacing",
  contentClassName = "relative pb-20",
  itemTopPaddingClass = "pt-10 md:pt-40",
  firstItemTopPaddingClass = "pt-10 md:pt-40",
  footerRevealStart = 0.8,
  lineEndOffset = 0,
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const dotRef = useRef(null);
  const lastDotRef = useRef(null);
  const [lineLeft, setLineLeft] = useState(24);

  useEffect(() => {
    const updateMetrics = () => {
      if (!ref.current) return;
      const containerRect = ref.current.getBoundingClientRect();

      if (dotRef.current) {
        const dotRect = dotRef.current.getBoundingClientRect();
        const left = dotRect.left - containerRect.left + dotRect.width / 2 - 1;
        setLineLeft(left);
      }

      if (lastDotRef.current) {
        const lastDotRect = lastDotRef.current.getBoundingClientRect();
        const newHeight =
          lastDotRect.top - containerRect.top + lastDotRect.height / 2 + lineEndOffset;
        setHeight(newHeight);
      } else {
        // fallback to full container height
        setHeight(containerRect.height);
      }
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // Footer appears near the end of the timeline (configurable)
  const footerOpacity = useTransform(scrollYProgress, [footerRevealStart, 1], [0, 1]);
  const footerX = useTransform(scrollYProgress, [footerRevealStart, 1], [12, 0]);

  return (
    <div className={containerClassName} ref={containerRef}>
      <h2 className={`text-heading ${titleClassName}`}>{title}</h2>
      <div ref={ref} className={contentClassName}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start ${index === 0 ? firstItemTopPaddingClass : itemTopPaddingClass} md:gap-10`}
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div ref={index === 0 ? dotRef : index === data.length - 1 ? lastDotRef : null} className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {item.contents.map((content, index) => (
                <p className="mb-3 font-normal text-neutral-400" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
            left: lineLeft,
          }}
          className="absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
        {footerText && (
          <motion.div
            className="pl-20 pr-4 md:pl-4 mt-10"
            style={{ opacity: footerOpacity, x: footerX }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-lg border-2 border-purple-500/50 shadow-[0_0_14px_rgba(168,85,247,0.22)]"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                background:
                  "linear-gradient(to bottom, rgba(3,4,18,0.55), rgba(3,4,18,0.25))",
              }}
            >
              <span className="text-neutral-400 text-xs md:text-sm font-medium whitespace-nowrap">{footerText}</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
