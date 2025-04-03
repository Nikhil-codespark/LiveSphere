"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { animationOnce } from "@/Configs/config";
import { motion } from "framer-motion";
import { BiLogoPlayStore } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";



const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname(); // Get current route path

  // Style for active tab
  const activeTabStyle = "px-4 py-[6px] text-gray-600 rounded-[0.8rem] bg-[#d1ddee] text-[0.9rem]";
  const inactiveTabStyle = "text-gray-600 hover:text-gray-400 transition-all text-[0.9rem]";

  return (
    <>
      <nav className="w-[100vw] flex justify-center items-center fixed z-10 top-0">
        <div className="h-[4rem] w-full bg-white border-b-2 py-[2.7rem] top-0 z-8 flex flex-row md:flex-row lg:flex-row justify-center items-center overflow-hidden">
          {/* Logo section remains the same */}
          <div className="w-[100%] md:w-[20%] lg:w-[20%] h-full flex justify-start pl-6 items-center gap-1">
            <img
              src={"/logo.png"}
              alt="logo"
              className="w-[2.3rem] bg-blend-color-dodge"
            />
            <Link
              href={"/"}
              className={`text-gray-600 font-sans hover:text-gray-300 transition-all cursor-pointer text-[1.3rem] font-semibold ${
                pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              LiveSphere
            </Link>
          </div>

          {/* Navigation links - updated with active styling */}
          <div className="w-[60%] h-full hidden md:visible lg:visible md:flex lg:flex justify-center items-center gap-4 md:gap-15 lg:gap-15">
            <Link
              href={"/features"}
              className={
                pathname === "/features" ? activeTabStyle : inactiveTabStyle
              }
            >
              Features
            </Link>
            <Link
              href={"/howItWorks"}
              className={
                pathname === "/howItWorks" ? activeTabStyle : inactiveTabStyle
              }
            >
              How It Works
            </Link>
            <Link
              href={"/about"}
              className={
                pathname === "/about" ? activeTabStyle : inactiveTabStyle
              }
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className={
                pathname === "/blog" ? activeTabStyle : inactiveTabStyle
              }
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className={
                pathname === "/contact" ? activeTabStyle : inactiveTabStyle
              }
            >
              Contact
            </Link>
          </div>

          {/* Rest of your code remains the same */}
          <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full hidden md:visible lg:visible md:flex lg:flex justify-end pr-6 items-center">
            <button
              className="bg-[#003b95] text-sm font-normal rounded-[0.7rem] px-[13] py-2 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100 items-center gap-2"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/in/app/livesphere-networking/id6738740493",
                  "_blank"
                ) ||
                window.location.replace(
                  "https://apps.apple.com/in/app/livesphere-networking/id6738740493"
                )
              }
            >
              Try for free
              <BiLogoPlayStore size={20} />
            </button>
          </div>
          <button
            onClick={() => setMenu((pre) => !pre)}
            className="bg-[#003b95] text-sm font-normal visible md:hidden lg:hidden rounded-[0.7rem] px-[13] py-2 mr-6 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100 items-center gap-2"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu - updated with active styling */}
      {menu && (
        <section className="w-[16rem] shadow-2xl h-full bg-[#d1ddee] fixed md:hidden lg:hidden top-0 right-0 z-20 py-6">
          <div className="h-[10%] w-full pl-6">
            <button
              onClick={() => setMenu((pre) => !pre)}
              className="bg-[#003b95] text-sm font-normal visible md:hidden lg:hidden rounded-[0.7rem] px-[13] py-2 mr-6 hover:bg-gray-800 cursor-pointer transition-all flex text-gray-100 items-center gap-2"
            >
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
          <div className="w-full h-full pl-3 flex flex-col md:hidden lg:hidden justify-start items-center gap-2 md:gap-15 lg:gap-15">
            <Link
              href={"/features"}
              className={`text-gray-600 rounded hover:text-gray-400 flex items-center justify-center transition-all w-full px-4 py-[6px] ${
                pathname === "/features" ? "bg-blue-200" : "bg-gray-200"
              } text-md font-semibold`}
            >
              Features
            </Link>
            <Link
              href={"/howItWorks"}
              className={`text-gray-600 rounded hover:text-gray-400 flex items-center justify-center transition-all w-full px-4 py-[6px] ${
                pathname === "/howItWorks" ? "bg-blue-200" : "bg-gray-200"
              } text-md font-semibold`}
            >
              How It Works
            </Link>
            <Link
              href={"/about"}
              className={`text-gray-600 rounded hover:text-gray-400 flex items-center justify-center transition-all w-full px-4 py-[6px] ${
                pathname === "/about" ? "bg-blue-200" : "bg-gray-200"
              } text-md font-semibold`}
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className={`text-gray-600 rounded hover:text-gray-400 flex items-center justify-center transition-all w-full px-4 py-[6px] ${
                pathname === "/blog" ? "bg-blue-200" : "bg-gray-200"
              } text-md font-semibold`}
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className={`text-gray-600 rounded hover:text-gray-400 flex items-center justify-center transition-all w-full px-4 py-[6px] ${
                pathname === "/contact" ? "bg-blue-200" : "bg-gray-200"
              } text-md font-semibold`}
            >
              Contact
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

// const Navbar = () => {
//   return (
//     <nav className="w-[100vw] bg-transparent flex justify-center items-center fixed z-10 top-0">
//       <motion.div
//         initial={{ x: 0, y: "-13vh", opacity: 0 }} // Initially, clip the whole element
//         whileInView={{
//           y: 0,
//           x: 0,
//           opacity: 1,
//         }}
//         viewport={{ once: animationOnce }}
//         transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration
//         style={{ transformOrigin: "top right" }}
//         className="h-[4rem] w-[30%] rounded-3xl   bg-gray-800 absolute top-9 z-8 flex flex-col md:flex-row lg:flex-row justify-center items-center overflow-hidden"
//       >

//           <div className="w-[100%] h-full  flex justify-center items-center  gap-4 md:gap-10 lg:gap-10">
//             <Link
//               href={"/"}
//               className="text-white hover:text-gray-300 transition-all cursor-pointer text-[0.9rem] font-bold"
//             >
//               LIVESPHERE
//             </Link>
//             <Link
//               href={"/about"}
//               className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
//             >
//               About
//             </Link>
//             <Link
//               href={"/blog"}
//               className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
//             >
//               Blog
//             </Link>
//             <Link
//               href={"/contact"}
//               className="text-gray-100 hover:text-gray-400 transition-all  text-sm"
//             >
//               Contact
//             </Link>
//           </div>
//       </motion.div>
//     </nav>
//   );
// };

export default Navbar;
