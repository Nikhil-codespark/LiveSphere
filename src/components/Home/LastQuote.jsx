"use client";
import React from 'react'
import { motion } from "framer-motion";
import { animationOnce } from "@/Configs/config";

const LastQuote = () => {
  return (
    <article className="w-[100vw]  my-0 md:pb-[13rem] lg:pb-[13rem] h-fit text-gray-700 flex justify-center items-center ">
      {/* <img
        src={"/HomeImages/Consultation/HomeBubble2.png"}
        alt="img"
        className="absolute z-[-1] bg-cover h-auto max-w-full"
      /> */}
      <div className="w-[23rem] md:w-[40rem]  lg:w-[40rem] flex flex-col justify-center items-center gap-6">
        <motion.div
          initial={{ scale: 0.6 }} // Initially, clip the whole element
          whileInView={{
            scale: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration
          style={{ transformOrigin: "center" }}
          className="w-full flex flex-col gap-3 justify-centeritems-center"
        >
          <p className="lg:text-2xl text-xl font-extralight md:text-2xl text-gray-700 w-full text-center">
            Livesphere isn’t just an app—it’s a revolution. A gateway to instant
            connections, meaningful encounters, and limitless possibilities.
            Step into a world where networking happens effortlessly, anywhere,
            anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ translateY: 94, opacity: 0 }} // Initially, clip the whole element
          whileInView={{
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration
          style={{ transformOrigin: "center" }}
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <div>
            <h2 className="lg:text-8xl text-5xl md:text-8xl font-semibold text-center">
              Livesphere
            </h2>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export default LastQuote