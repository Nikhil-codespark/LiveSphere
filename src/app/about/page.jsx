"use client";

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";
import React from "react";
import { 
  FaHandshake, 
  FaSwatchbook, 
  FaShieldAlt, 
  FaUsers, 
  FaLightbulb, 
  FaHeart 
} from 'react-icons/fa';

const page = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "anticipate"
      }
    }
  };

  return (
   <>
   {/* About Header  */}
<section className="mt-32 py-16 px-4 bg-dark">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-50">About Us</h1>
    <p className="text-xl text-gray-300">
      We're redefining how people connect in real life across all aspects of their lives.
    </p>
  </div>
</section>

{/* Our Story  */}
<motion.section 
      className="py-16 px-4 bg-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-50"
              variants={itemVariants}
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              className="text-gray-500 mb-4"
              variants={itemVariants}
            >
              <span className="font-semibold text-gray-400">Livesphere: The Future of Networking</span> <br/><br/>
              
              Founded in 2024 by entrepreneur Dr. Michael Rouhana, D.C., Livesphere is designed to seamlessly connect people of all ages and backgrounds—anytime, anywhere.
              
              The platform bridges the gap between personal and professional connections that were once difficult to establish. Imagine carrying a digital business card or profile that makes you visible to others around you—only when you choose to be.
              
              Livesphere blends the best features of Uber, LinkedIn, Facebook, and Instagram, powered by live geo-mapping technology. Whether someone is just a few feet away at the mall or across the globe, users can connect instantly based on customized filters and preferences.
              
              <br/><br/> <span className="text-gray-400">Welcome to the next generation of networking. Welcome to Livesphere.</span>
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={imageVariants}
          >
            <motion.img 
              src="/assets/images/team.jpg" 
              alt="Our Team" 
              className="rounded-lg shadow-md w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>

{/* Mission & Values  */}
<section className="pt-16  bg-dark bg-[url('/assets/images/about-bg-gradient2.png')] bg-center bg-no-repeat bg-cover text-gray-300">
{/* <div className=" bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div> */}

  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-white mb-12">Our Mission & Values</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Value 1 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-blue-400">
          <FaHandshake />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Real Connections</h3>
        <p className="text-gray-300">
          We prioritize meaningful, real-world interactions over superficial online engagement.
        </p>
      </div>
      
      {/* Value 2 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-purple-400">
          <FaSwatchbook />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Versatility</h3>
        <p className="text-gray-300">
          One app for all your connection needs - personal, professional, and social.
        </p>
      </div>
      
      {/* Value 3 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-green-400">
          <FaShieldAlt />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Privacy First</h3>
        <p className="text-gray-300">
          You control who sees you and when. Your data belongs to you.
        </p>
      </div>
      
      {/* Value 4 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-orange-400">
          <FaUsers />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Community</h3>
        <p className="text-gray-300">
          Building local networks that strengthen real communities.
        </p>
      </div>
      
      {/* Value 5 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-yellow-400">
          <FaLightbulb />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
        <p className="text-gray-300">
          Continuously improving how people connect in meaningful ways.
        </p>
      </div>
      
      {/* Value 6 */}
      <div className="p-6 bg-white/10  rounded-xl border border-white/20 hover:border-blue-500/75 transition-all duration-300 overflow-hidden shadow-xl hover:scale-105">
        <div className="text-4xl mb-4 text-pink-400">
          <FaHeart />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">Inclusivity</h3>
        <p className="text-gray-300">
          A platform for everyone, regardless of what connections they're seeking.
        </p>
      </div>
    </div>
  </div>
  <div className=" bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

</section>

{/* Team  */}
<section className="py-16 px-4 bd-dark ">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Meet The Team</h2>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Team Member 1  */}
      <div className="text-center">
        <img src="/assets/images/team-member1.jpg" alt="Alex Johnson" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"/>
        <h3 className="text-xl font-semibold">Dr. Michael Rouhana</h3>
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