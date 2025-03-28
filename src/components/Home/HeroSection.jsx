"use client";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";




const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-start bg-white">
      <img
        src={"/HomeImages/people.png"}
        alt="img"
        className="absolute bg-cover z-2 right-[-5rem] w-[46rem]"
      />
      <img
        src={"/HomeImages/citybg.png"}
        alt="img"
        className="absolute bg-auto z-[1] right-[-40rem] bottom-[-25rem] h-[200%]"
      />
      <div className="w-[65%] pl-[7rem] z-2 ">
        <div className=" w-full">
          <TextGenerateEffect
            words={"Find Anyone, Anytime"}
            className="text-[40px] md:text-6xl lg:text-7xl"
          />
          <p className="text-gray-600 px-3 pr-[6rem]">
            "Our platform connects you with the people and professionals you
            need—right in your neighborhood. Whether you're looking for a
            doctor, mechanic, engineer, or even a new friend, we make it easy to
            find and connect with trusted individuals nearby."
          </p>
        </div>
        <div className="w-full flex flex-row justify-start items-center pl-3 gap-[3rem] mt-[3rem]">
          <button className="bg-[#003b95] text-md font-bold rounded-[2rem] px-5 py-3 hover:bg-gray-800 cursor-pointer transition-all flex  text-gray-100 items-center gap-2">
            <FaApple size={25} />
            App Store
          </button>
          <button className="bg-[#003b95] text-md font-bold rounded-[2rem] px-5 py-3 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100  items-center gap-2">
            <BiLogoPlayStore size={25} />
            Play Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection