"use client";

import Image from 'next/image';
import React from 'react'

const ThreeDynamics = () => {
  return (
    <section className="w-full pb-[13rem] text-gray-200 px-6 flex flex-col justify-center items-center">
      <div className="w-full py-6 flex justify-center items-center">
        <h2 className="font-bold text-5xl text-gray-700">
          Meet Closer, Go Further
        </h2>
      </div>
      <div className="w-[70%] cursor-pointer py-6 flex justify-center gap-2  items-center">
        <div className="w-[33%] relative hover:w-[80%] transition-all delay-100 duration-500 ease-in-out rounded-2xl h-[35rem] bg-blue-100 overflow-hidden">
          <img
            src={"/HomeImages/threeDynamics1.jpg"}
            alt="Picture of the author"
            className=" object-cover h-full w-full"
          />{" "}
          <div className="w-full absolute bottom-0  flex justify-center items-center flex-col py-6">
            <h3 className="font-bold text-2xl text-center">Ethan Brooks</h3>
            <p className="text-gray-200 text-sm">Fashion Designer</p>
          </div>
        </div>
        <div className="w-[33%] relative hover:w-[80%] transition-all delay-100 duration-500 ease-in-out rounded-2xl h-[35rem] bg-blue-100 overflow-hidden">
          <img
            src={"/HomeImages/threeDynamics2.jpg"}
            alt="Picture of the author"
            className=" object-cover h-full w-full"
          />{" "}
          <div className="w-full absolute bottom-0  flex justify-center items-center flex-col py-6">
            <h3 className="font-bold text-3xl">Olivia Chen</h3>
            <p className="text-gray-200 text-sm">Doctor </p>
          </div>
        </div>
        <div className="w-[33%] hover:w-[80%] transition-all delay-100 duration-500 ease-in-out rounded-2xl h-[35rem] bg-blue-100 overflow-hidden relative">
          <img
            src={"/HomeImages/threeDynamics3.jpg"}
            alt="Picture of the author"
            className=" object-cover h-full w-full"
          />{" "}
          <div className="w-full absolute bottom-0  flex justify-center items-center flex-col py-6">
            <h3 className="font-bold text-2xl text-center">
              Jake & Mason Reynolds
            </h3>
            <p className="text-gray-200 text-sm">Two Randoms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeDynamics