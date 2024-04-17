"use client";
import React from "react";
import Image from "next/image";
import Navigate from "@/app/Components/Navigate";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Porto  = () => {
  return (

    <div className="bg-bgPor bg-cover flex justify-center h-[120vh] max-xl:h-[130vh]">
      <div className="flex">
        <div className="max-md:ml-[2rem]">
          <Navigate />
        </div>
        
        <div className="pt-[220px]" >
          <div className=" max-xl:mt-[1rem] max-xl:ml-[1rem] max-lg:mt-[-13rem] max-lg:pt-[20rem] max-md:hidden">
         <Image width={562} height={410} alt="Yogs's image" src="/EllipseP.png"/>
         </div>
         <div className="mt-[-29rem] ml-[5rem] max-xl:mt-[-27rem] max-xl:ml-[4rem] max-lg:mt-[-20rem] max-lg:ml-[2rem]">
          <div className="scale-100 hover:scale-105 max-md:ml-[-1rem] max-md:mt-[34rem] max-md:w-[250px]">

            <Link href="https://drive.google.com/file/d/1ccdU7G8WSQm0qfLV1ifwlCoY_yoBi89A/view?usp=drive_link"><Image width={400} height={558} alt="Yogs's image" src="/contentP.png"/></Link>

          </div>
          </div>
        </div>

       

        <div className="w-[500px] text-[23px] justify-center items-center  max-md:w-[1rem]">
          <div className="font-bold mt-[25rem] ml-[2rem] max-md:mt-[8rem] max-md:ml-[-20rem]">
            <h1 className="text-5xl max-md:text-[30px]">My Portofolio</h1>
            <div className=" text-white text-[35px] max-md:text-[30px]"><TypeAnimation
              sequence={[
                "Project",
                1000, 
                "click image",
                1000, 
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            /></div>
            <p className="font-medium mt-4 max-md:text-[12px]">
            If you are interested in my portofolio <br/>you can contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Porto