"use client";
import React from "react";
import Image from "next/image";
import Navigate from "@/app/Components/Navigate";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="">
      <div className="bg-bgAbout bg-cover flex justify-center ">
        <div className="flex">
          <div className="max-md:ml-[1rem] max-lg:ml-[-10rem]">
            <Navigate/>
            
          </div>
          <div className="pt-[212px]  max-xl:ml-[1rem] max-lg:w-[300px] max-lg:ml-[4rem] max-lg:mt-[12rem] max-md:mt-[12rem] max-md:ml-[1rem] max-md:w-[270px]">
            <Image
              width={562}
              height={688}
              alt="Yogs's image"
              src="/yogsa.png"
            />
          </div>

          <div className="w-[500px] text-[23px] grid justify-center items-center mt-64 max-md:w-[1rem] max-lg:w-[8rem]">
            <div className="font-bold w-96 max-md:mt-[20rem] max-md:ml-[-26rem] max-lg:w-[15rem] max-lg:ml-[15rem]">
              <h1 className="text-5xl max-lg:text-[2rem] max-lg:ml-[-3rem] max-lg:w-[13rem] max-md:text-[30px] max-md:mt-[-34rem] max-md:ml-[6rem] max-md:w-[11rem]">About Me</h1>
              
              <div className=" text-white text-[35px] max-lg:text-[2rem] max-lg:ml-[-3rem] max-lg:w-[18rem] max-md:text-[30px] max-md:ml-[6rem] max-md:w-[16rem]"><TypeAnimation
              sequence={[
                "I Love Music",
                1000, 
                "I Love Teknologi",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            /></div>

              <p className="font-medium mt-4 max-lg:text-[1rem] max-lg:ml-[-3rem] max-lg:w-[18rem] max-md:text-[10px] max-md:ml-[6rem] max-md:w-[16rem]">
                Besides I like the world of technology <br />I also like the world of
                music
              </p>
              <div className=" animate-bounce mt-[8rem] text-8xl cursor-pointer max-lg:hidden max-md:hidden">
               <div><Image
              width={62}
              height={77}
              alt="Yogs's image"
              src="/panah.png"/></div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom image */}
      </div>

      <div className="bg-bgAboutBottom bg-cover flex justify-center h-screen max-xl:h-[120vh]">
        <div className="flex">
          <div className="text-[23px] grid">
            <div className="font-bold w-[13rem] max-md:ml-[-4rem]">
              <h1 className="text-5xl text-white mt-40 max-xl:text-[3rem] max-xl:ml-[-1rem] max-lg:ml-[-3rem] max-lg:text-[2rem] max-lg:mt-[7rem] max-lg:w-[12rem] max-md:mt-[3rem] max-md:ml-[2rem] max-md:text-[33px] max-md:w-[18rem]" >Music is an important thing in life</h1>
              <p className="font-semibold mt-20 text-white w-44 max-xl:text-[20px] max-xl:ml-[-1rem] max-lg:ml-[-3rem] max-lg:text-[1rem] max-lg:mt-[2rem] max-lg:w-[8rem] max-md:mt-[1rem] max-md:ml-[2rem] max-md:text-[15px] max-md:w-[18rem]" >
              Music can give me  high enthusiasm to  accompany me in coding and designing
              </p>
            </div>
          </div>

         <div className="ml-[8rem] max-xl:w-[330px] max-xl:ml-[-1rem] max-lg:w-[220px] max-lg:ml-[-4rem] max-md:hidden ">
         <Image
              width={390}
              height={623}
              alt="Yogs's image"
              src="/yogsb.png"
              className="mr-36"
            />
         </div>
       

          <div className="w-[500px] text-[23px] items-center max-xl:ml-[-5rem] max-lg:w-[20rem] max-md:mt-[12rem] max-md:w-[15rem] max-md:ml-[-11rem]">
            <div className="font-bold mt-[7rem] max-lg:w-[20rem]">
              <h1 className="text-4xl text-white text-center max-xl:text-[2rem] max-xl:ml-[6rem] max-lg:w-[12rem] max-lg:ml-[35px] max-md:text-[25px] ">My Skill</h1>
                <div className="max-xl:w-[450px] max-xl:ml-[4rem] max-lg:w-[16rem] max-md:w-[300px] max-md:ml-[-1rem]">
                  <Image src="/skill.png" width={500} height={300} alt="" className="m-auto mt-8 animate-pulse " />
                  </div>
            </div>
          </div>
        </div>

        {/* bottom image */}
      </div>
    </div>
  );
};

export default About;
