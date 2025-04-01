import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';




const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full shadow-xl text-white">
      <div className="w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-9 bg-[#d1ddee]  py-[5rem]">
        <div className="w-[50%] md:w-[30%] lg:w-[30%] h-[12rem]  flex flex-col justify-start items-start">
          <h1
            className="lg:text-2xl text-gray-800 w-full text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            Livesphere
          </h1>
          <p className="text-gray-700 text-sm">Find anyone, anywhere</p>
          <div className="flex text-gray-600 mt-3 w-full justify-start gap-3 items-center">
            <LuInstagram size={20} />
            <FaLinkedin size={20} />
            <FaYoutube size={25} />
          </div>
        </div>

        <div className="w-[50%] md:w-[40%] lg:w-[40%] h-[7rem] flex flex-col justify-stat items-start">
          <h1
            className="lg:text-2xl text-gray-800 w-full text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            Address
          </h1>
          <p className="text-gray-700 text-sm">
            240 Riverside Dr Ste 4 Johnson City, NY 13790
          </p>
        </div>

        <div className="w-[50%] md:w-[30%] lg:w-[30%] h-[7rem] flex flex-col justify-start items-start">
          <h1
            className="lg:text-2xl text-gray-800 w-full text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            Livesphere
          </h1>
          <Link href={"/privacypolicy"} className="text-gray-700 text-sm">
            Privacy & Policy
          </Link>
          <Link href={"/legal"} className="text-gray-700 text-sm">
            Legal
          </Link>
          <Link href={"/cookies"} className="text-gray-700 text-sm">
            Cookies
          </Link>
          <Link href={"/terms&conditions"} className="text-gray-700 text-sm">
            Terms & Condition
          </Link>
        </div>
      </div>
      {/* <ItemsContainer /> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
}

export default Footer