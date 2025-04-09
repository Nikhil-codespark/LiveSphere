"use client";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";




const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-20 p-4 md:p-12 bg-white">
    <div className="flex flex-col">
      <div>
        <TextGenerateEffect
          words={"Find Anyone, Anytime"}
          className="text-3xl md:text-6xl lg:text-7xl"
        />
        <p className="text-gray-600 px-0 md:px-3 pr-0 md:pr-[6rem] lg:pr-[6rem] mt-4">
          "Our platform connects you with the people and professionals you
          need—right in your neighborhood. Whether you're looking for a
          doctor, mechanic, engineer, or even a new friend, we make it easy to
          find and connect with trusted individuals nearby."
        </p>
      </div>
      <div className="w-full flex flex-row justify-start items-center pl-0 md:pl-3 gap-4 md:gap-[2rem] mt-6 md:mt-[3rem]">
        <button className="bg-[#003b95] text-xs md:text-sm font-bold rounded-[2rem] px-4 py-2 md:px-5 md:py-3 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100 items-center gap-2">
          <FaApple size={16} className="md:size-[20px]" />
          App Store
        </button>
        <button className="bg-[#003b95] text-xs md:text-sm font-bold rounded-[2rem] px-4 py-2 md:px-5 md:py-3 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100 items-center gap-2">
          <BiLogoPlayStore size={16} className="md:size-[20px]" />
          Play Store
        </button>
      </div>
    </div>
    <div className="hidden md:flex lg:flex items-center justify-center mt-6 md:mt-0">
      <img
        src={"/assets/videos/Online connection.gif"}
        alt="img"
        className="w-full max-w-[32rem] h-auto md:h-[32rem]"
      />
    </div>
  </section>
   
  );
}

export default HeroSection

 