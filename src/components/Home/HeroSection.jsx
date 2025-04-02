"use client";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";




const HeroSection = () => {
  return (
    <section className="w-full pt-[9rem] pb-[5rem] md:py-[13rem] lg:py-[13rem]  flex flex-col justify-center  items-start bg-white relative overflow-hidden">
      <img
        src={"/HomeImages/people.png"}
        alt="img"
        className="absolute  invisible md:visible lg:visible z-[-2rem] md:z-2 lg:z-2 right-[-10%] top-[3rem] w-[46rem]"
      />
      <img
        src={"/HomeImages/citybg.png"}
        alt="img"
        className="absolute bg-auto invisible md:visible lg:visible z-[1] right-[-40%] bottom-[-31rem] h-[200%]"
      />
      <div className="w-full md:w-[65%] lg:w-[65%] px-4 md:px-[7rem] lg:px-[7rem] z-2 ">
        <div className=" w-full">
          <TextGenerateEffect
            words={"Find Anyone, Anytime"}
            className="text-[40px] md:text-6xl lg:text-7xl"
          />
          <p className="text-gray-600 px-3 pr-0 md:pr-[6rem] lg:pr-[6rem]">
            "Our platform connects you with the people and professionals you
            need—right in your neighborhood. Whether you're looking for a
            doctor, mechanic, engineer, or even a new friend, we make it easy to
            find and connect with trusted individuals nearby."
          </p>
        </div>
        <div className="w-full flex flex-row justify-start items-center pl-3 gap-[2rem] mt-[3rem]">
          <button className="bg-[#003b95] text-sm md:text-md font-bold rounded-[2rem] px-5 py-3 hover:bg-gray-800 cursor-pointer transition-all flex  text-gray-100 items-center gap-2">
            <FaApple size={20} />
            App Store
          </button>
          <button className="bg-[#003b95] text-sm md:text-md font-bold rounded-[2rem] px-5 py-3 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100  items-center gap-2">
            <BiLogoPlayStore size={20} />
            Play Store
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection