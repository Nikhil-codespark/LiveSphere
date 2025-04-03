"use client";
import { animationOnce } from "@/Configs/config";
import { motion } from "framer-motion";
import Image from "next/image";

const GridRows = () => {
  return (
    <div className="w-[100vw] h-fit text-gray-700 pb-[7rem] flex justify-center items-center md:my-[6rem] lg:my-[6rem]">
      <motion.div
        initial={{ translateX: -33, opacity: 0 }} // Initially, clip the whole element
        whileInView={{
          translateX: 0,
          opacity: 1,
        }}
        viewport={{ once: animationOnce }}
        transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
        style={{ transformOrigin: "top right" }}
        className="w-[60vw] pl-[6rem] "
      >
        <Image
          src={"/HomeImages/girl.jpg"}
          width={800}
          height={800}
          alt="Picture of the author"
          className="rounded-[2rem] "
        />
        {/* <p className="text-sm md:text-xl lg:text-2xl">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively. I have a keen eye for detail
          and a deep understanding of design principles, which I use to deliver
          projects that exceed my clients' expectations.
        </p> */}
      </motion.div>

      <motion.div
        initial={{ translateX: 33, opacity: 0 }} // Initially, clip the whole element
        whileInView={{
          translateX: 0,
          opacity: 1,
        }}
        viewport={{ once: animationOnce }}
        transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
        style={{ transformOrigin: "top right" }}
        className="flex flex-col justify-center items-center gap-6"
      >
        <div className="w-[40vw] flex flex-col gap-3 pl-[3rem] pr-[6rem] justify-centeritems-center">
          <h2 className="lg:text-5xl  text-5xl md:text-5xl font-bold text-right">
            Find Someone In Spots You Love{" "}
          </h2>
          <p className="lg:text-xl text-xl md:text-xl text-gray-400 w-full text-right">
            {" "}
            Turn every moment of your day into an opportunity to meet new
            people.{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GridRows;