"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${
                idx == 2
                  ? "bg-gradient-to-r from-indigo-600 p-2 to-[#003b95] inline-block text-transparent bg-clip-text"
                  : "dark:text-gray-700 text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="text-white text-5xl z-3 md:text-8xl lg:text-8xl font-semibold flex justify-center items-center">
      <span className="bg-gradient-to-r from-indigo-600 p-2 to-green-500 text-transparent bg-clip-text text-5xl md:text-8xl lg:text-8xl ">
        {renderWords()}
      </span>
    </div>
  );
};
