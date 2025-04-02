"use client";

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const page = () => {
  return (
   <>
   {/* About Header  */}
<section className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-6 text-blue-400">About Us</h1>
    <p className="text-xl text-gray-600">
      We're redefining how people connect in real life across all aspects of their lives.
    </p>
  </div>
</section>

{/* Our Story  */}
<section className="py-16 px-4">
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-500 mb-4">
        Livesphere was founded in 2024 by entrepreneur dr. michael rouhana d.c. its purpose is to automatically connect people of all ages and backgrounds, anytime, anywhere.

the platform bridges the gap between personal and professional connections that were previously hard to make. think of it as carrying a digital business card or profile that automatically makes you visible to others around you - when you choose.

it combines the best of uber, linkedin, facebook, and instagram with live geo-mapping technology. whether someone is a few feet away at the mall or across the globe, users can connect instantly based on their chosen filters and settings.

welcome to the next generation of networking - welcome to livesphere.</p>
        
      </div>
      <div className="md:w-1/2">
        <img src="/assets/images/team.jpg" alt="Our Team" className="rounded-lg shadow-md w-full"/>
      </div>
    </div>
  </div>
</section>

{/* Mission & Values  */}
<section className="py-16 px-4 bg-gray-50 text-gray-600">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Our Mission & Values</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Value 1  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Real Connections</h3>
        <p className="text-gray-500">
          We prioritize meaningful, real-world interactions over superficial online engagement.
        </p>
      </div>
      
      {/* Value 2  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Versatility</h3>
        <p className="text-gray-500">
          One app for all your connection needs - personal, professional, and social.
        </p>
      </div>
      
      {/* Value 3  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
        <p className="text-gray-500">
          You control who sees you and when. Your data belongs to you.
        </p>
      </div>
      
      {/* Value 4  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Community</h3>
        <p className="text-gray-500">
          Building local networks that strengthen real communities.
        </p>
      </div>
      
      {/* Value 5  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Innovation</h3>
        <p className="text-gray-500">
          Continuously improving how people connect in meaningful ways.
        </p>
      </div>
      
      {/* Value 6  */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
        <p className="text-gray-500">
          A platform for everyone, regardless of what connections they're seeking.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Team  */}
<section className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Meet The Team</h2>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Team Member 1  */}
      <div className="text-center">
        <img src="/assets/images/team-member1.jpg" alt="Alex Johnson" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"/>
        <h3 className="text-xl font-semibold">Alex Johnson</h3>
        <p className="text-blue-600 mb-2">Founder & CEO</p>
        <p className="text-gray-500 text-sm">
          Former product lead at major social network, passionate about meaningful connections.
        </p>
      </div>
      
      {/* Team Member 2  */}
      <div className="text-center">
        <img src="/assets/images/team-member2.jpg" alt="Sam Lee" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"/>
        <h3 className="text-xl font-semibold">Sam Lee</h3>
        <p className="text-blue-600 mb-2">CTO</p>
        <p className="text-gray-500 text-sm">
          Location technology expert with 10+ years in proximity-based apps.
        </p>
      </div>
      
      {/* Team Member 3  */}
      <div className="text-center">
        <img src="/assets/images/team-member3.jpg" alt="Taylor Smith" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"/>
        <h3 className="text-xl font-semibold">Taylor Smith</h3>
        <p className="text-blue-600 mb-2">Head of Product</p>
        <p className="text-gray-500 text-sm">
          UX specialist focused on creating intuitive multi-purpose platforms.
        </p>
      </div>
    </div>
  </div>
</section>
   </>
  );
};

export default page;


{/* <section classNameName="w-full pt-[9rem] pb-[5rem] md:py-[13rem] lg:py-[13rem]  flex flex-col justify-center  items-start bg-white">
     
<div classNameName="w-full md:w-[100%] lg:w-[100%] px-4 md:px-[7rem] gap-6 lg:px-[7rem] z-2 ">
    <h1 classNameName="text-[#003b95] text-5xl font-bold mb-6">About Us</h1>
    <p classNameName="text-gray-600">
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
</section> */}