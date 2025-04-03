"use client";
import React from 'react'
import { animationOnce } from "@/Configs/config";
import { motion } from "framer-motion";
import Image from 'next/image';


const Features = () => {
  return (
    <section className="w-[100vw] bg-white h-fit px-6 text-gray-600 flex flex-col justify-center items-center py-[6rem]">
      <div className="w-full py-[10rem] overflow-hidden">
        <motion.div
          initial={{ translateX: 0, translateY: 0, opacity: 0.4 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full"
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl pr-[30%]">
            "Livesphere bridges the gap between where you are and who you need
            to meet—welcome to the future of networking."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 188, translateY: 0, opacity: 0.7 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full py-9 flex justify-start items-center gap-6 overflow-y-scroll no-scrollbar"
        >
          <Image
            src={"/features/friends.jpg"}
            width={700}
            height={700}
            alt="Picture of the author"
            className="rounded-[2rem] "
          />
          <video
            className="rounded-[2rem] bg-yellow-300"
            autoPlay
            muted
            loop
            width={840}
          >
            <source src="/features/zoomout.mov" />
          </video>
        </motion.div>
      </div>
      <div className="w-full py-[10rem]">
        <motion.div
          initial={{ translateX: 0, translateY: 63, opacity: 0.4 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full"
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl pl-[30%]">
            "Turn every moment into an opportunity—connect instantly with
            anyone, anywhere, in real time."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 0, translateY: 63, opacity: 0.7 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full py-9 flex justify-start items-center gap-6 overflow-y-scroll scrollable-y no-scrollbar"
        >
          <Image
            src={"/features/help.jpg"}
            width={700}
            height={700}
            alt="Picture of the author"
            className="rounded-[2rem] "
          />
          <video
            className="rounded-[2rem] bg-yellow-300"
            autoPlay
            muted
            loop
            width={840}
          >
            <source src="/features/doctor.mov" />
          </video>
        </motion.div>
      </div>
      <div className="w-full py-[10rem] overflow-hidden">
        <motion.div
          initial={{ translateX: 0, translateY: 0, opacity: 0.4 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full"
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl pr-[30%]">
            "Safe, simple, and spontaneous. Discover new connections while
            staying in control of your privacy and preferences."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 188, translateY: 0, opacity: 0.7 }} // Initially, clip the whole element
          whileInView={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Animation duration
          style={{ transformOrigin: "top right" }}
          className="w-full py-9 flex justify-start items-center gap-6 overflow-y-scroll no-scrollbar"
        >
          <Image
            src={"/features/friends.jpg"}
            width={700}
            height={700}
            alt="Picture of the author"
            className="rounded-[2rem] "
          />
          <video
            className="rounded-[2rem] bg-yellow-300"
            autoPlay
            muted
            loop
            width={840}
          >
            <source src="/features/zoomout.mov" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default Features