"use client";
import React from "react";
import Image from "next/image";
import Navigate from "@/app/Components/Navigate";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-bgHome bg-cover flex justify-center ">
      <div className="flex">
        <div className="max-md:ml-[2rem] ">
          <Navigate/>
        </div>
        <div className="mt-[212px] max-lg:mt-[20rem] max-xl:ml-[1rem] max-md:mt-[27rem]">
          <Image width={562} height={688} alt="Yogs's image" src="/yogs.png"/>
        </div>

        <div className="w-[500px] text-[23px] justify-center items-center max-md:w-[1rem]">
          <div className="font-bold mt-[25rem] ml-[2rem] max-md:mt-[8rem] max-md:ml-[-20rem]">
            <h1 className="text-5xl max-md:text-[30px] max-lg:text-[28px] max-xl:text-[40px] ">Hello ,Im Shandana</h1>
            <div className=" text-white text-[35px] max-lg:text-[30px] max-md:text-[30px]"><TypeAnimation
              sequence={[
                "Web Developer",
                1000, 
                "Designer",
                1000,
                "UI / UX",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{  display: "inline-block" }}
              repeat={Infinity}
            /></div>
            <p className="font-medium mt-4 max-md:text-[10px] max-xl:text-[1rem] max-lg:text-[15px] ">
              I am an ITB Stikom Bali student who is <br />currently doing an
              internship at Taksu tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
