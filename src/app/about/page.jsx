"use client";

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const page = () => {
  return (
    <section className="w-full pt-[9rem] pb-[5rem] md:py-[13rem] lg:py-[13rem]  flex flex-col justify-center  items-start bg-white">
      {/* <img
        src={"/HomeImages/people.png"}
        alt="img"
        className="absolute  invisible md:visible lg:visible z-[-2rem] md:z-2 lg:z-2 right-[-10%] top-[3rem] w-[46rem]"
      />
      <img
        src={"/HomeImages/citybg.png"}
        alt="img"
        className="absolute bg-auto invisible md:visible lg:visible z-[1] right-[-40%] bottom-[-31rem] h-[200%]"
      /> */}
      <div className="w-full md:w-[100%] lg:w-[100%] px-4 md:px-[7rem] gap-6 lg:px-[7rem] z-2 ">
          <h1 className="text-[#003b95] text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600">
            LIVESPHERE WAS FOUNDED, AND CREATED, BY ENTREPENEUR DR. MICHAEL
            ROUHANA D.C., IN 2024.ITS PURPOSE IS TO CONNECT PEOPLE FROM ALL
            WALKS OF LIFE, OF ALL AGES, ANYTIME, ANYWHERE, AUTOMATICALLY. IT
            BRIDGES THE VOID, BETWEEN PEOPLE WHO WANT, OR NEED, TO MAKE
            MEANINGFUL PERSONAL, OR PROFESSIONAL CONNECTIONS, THAT CURRENTLY
            HAVE BEEN UNAVAILABLE UNTIL NOW. LIVESPHERE, SERVES AS AN AUTOMATED
            WAY TO CONNECT WITH ANYONE, ANYWHERE, BY MAKING EVERYONE AROUND THEM
            VISIBLE TO THEM, IN ORDER TO MAKE THAT NEW CONNECTION. THINK OF IT,
            AS CARRYING YOUR BUSINESS CARD, OR PERSONAL PROFILE, AROUND WITH YOU
            AUTOMATICALLY, THAT CAN BE VISIBLE BY EVERYONE, WHENEVER YOU CHOOSE,
            ANYWHERE YOU GO, WITHOUT HAVING TO TELL THEM WHO YOU ARE, OR WHAT
            YOU DO. THEN, IF THEY WANT TO CONNECT WITH YOU, THEY HAVE THAT
            CHOICE, AND SO DO YOU! WE WOULD LIKE TO THINK OF LIVESPHERE AS, AN
            UBER, MEETS LINKED-IN, MEETS FACEBOOK, MEETS INSTAGRAM, ALL IN ONE,
            BUT UITLIZING LIVE GEOMAPPING TECHNOLOGY, TO BRIDGE THE GAP BETWEN
            PEOPLE BEING ABLE TO CONNECT INSTANTLY, ANYWHERE. NOW ANYONE,
            ANYWHERE, CAN MAKE A NEW CONNECTION IF THEY CHOOSE WITH SOMEONE THAT
            IS A FEW FEET AWAY FROM THEM AT THE MALL, TO THOUSANDS OF MILES AWAY
            ON THE OTHER SIDE OF THE GLOBE. JUST SET THE FILTERS, OR SETTINGS
            YOU CHOOSE, AND STEP INTO THE NEXT LEVEL OF NEW AGE AUTOMATED
            NETWORKING, AT YOUR FINGERTIPS. WE NOW PROUDLY BRING YOU THE NEXT
            GENERATION OF NETWORKING. WELCOME TO LIVESPHERE.
          </p>
      </div>
    </section>
  );
};

export default page;
