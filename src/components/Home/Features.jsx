"use client";
import React from 'react';
import { animationOnce } from "@/Configs/config";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRef } from 'react';

const Features = ({ curBgColor }) => {
  const refEle1 = useRef();
  const refEle2 = useRef();
  const refEle3 = useRef();

  return (
    <section className={`w-full h-fit px-4 md:px-6 text-gray-600 flex flex-col justify-center items-center py-12 md:py-24 ${curBgColor}`}>
      {/* First Feature Section */}
      <div className="w-full py-12 md:py-24">
        <motion.div
          initial={{ translateX: 0, translateY: 20, opacity: 0.4 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
          ref={refEle1}
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl w-[70%] text-center mx-auto">
            "Livesphere bridges the gap between where you are and who you need
            to meet <br/> —welcome to the future of networking."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 50, translateY: 0, opacity: 0.7 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full py-6 md:py-9 flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
            <Image
              src={"/features/friends.jpg"}
              fill
              alt="Friends networking"
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-yellow-300">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/features/zoomout.mov" />
            </video>
          </div>
        </motion.div>
      </div>

      {/* Second Feature Section */}
      <div className="w-full py-12 md:py-24">
        <motion.div
          initial={{ translateX: 0, translateY: 20, opacity: 0.4 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
          ref={refEle2}
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl lg:w-[70%] text-center mx-auto">
            "Turn every moment into an opportunity <br/>—connect instantly with
            anyone, anywhere, in real time."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 0, translateY: 20, opacity: 0.7 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full py-6 md:py-9 flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
            <Image
              src={"/features/help.jpg"}
              fill
              alt="People helping each other"
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-yellow-300">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/features/doctor.mov" />
            </video>
          </div>
        </motion.div>
      </div>

      {/* Third Feature Section */}
      <div className="w-full py-12 md:py-24">
        <motion.div
          initial={{ translateX: 0, translateY: 20, opacity: 0.4 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
          ref={refEle3}
        >
          <h3 className="text-sm md:text-xl font-bold lg:text-2xl lg:w-[70%] text-center mx-auto">
            "Safe, simple, and spontaneous. Discover new connections while
            staying in control of your privacy and preferences."
          </h3>
        </motion.div>
        <motion.div
          initial={{ translateX: 50, translateY: 0, opacity: 0.7 }}
          whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
          viewport={{ once: animationOnce }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full py-6 md:py-9 flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
            <Image
              src={"/features/spontaneous.jpg"}
              fill
              alt="Spontaneous connections"
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-yellow-300">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/features/explore.mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;