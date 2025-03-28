"use client";
import Link from "next/link";

import { animationOnce } from "@/Configs/config";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <nav className="w-[100vw] bg-transparent flex justify-center items-center fixed z-10 top-0">
      <motion.div
        initial={{ x: 0, y: "-13vh", opacity: 0 }} // Initially, clip the whole element
        whileInView={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: animationOnce }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration
        style={{ transformOrigin: "top right" }}
        className="h-[4rem] w-[30%] rounded-3xl   bg-gray-800 absolute top-9 z-8 flex flex-col md:flex-row lg:flex-row justify-center items-center overflow-hidden"
      >

          <div className="w-[100%] h-full  flex justify-center items-center  gap-4 md:gap-10 lg:gap-10">
            <Link
              href={"/"}
              className="text-white hover:text-gray-300 transition-all cursor-pointer text-[0.9rem] font-bold"
            >
              LIVESPHERE
            </Link>
            <Link
              href={"/about"}
              className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
            >
              Contact
            </Link>
          </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
