"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigate = () => {
  return (
    <>
      <div className="mt-[120px] relative left-[17rem] w-[100px] scale-100 hover:scale-110 max-lg:w-[3rem] max-lg:mt-[14rem] max-md:w-[3rem] max-md:mt-[23rem] max-md:ml-[-13rem] ">
       <Link href="/"><Image width={63} height={95} src="/home.png" alt="" /></Link> 
      </div>
      <div className="mt-[40px] relative left-[5rem] w-[100px] scale-100 hover:scale-105 max-lg:w-[3rem] max-lg:mt-[0] max-md:w-[3rem] max-md:mt-[1rem] max-md:ml-[-79px]">
       <Link href="/about"><Image width={63} height={88} src="/about.png" alt="" /></Link> 
      </div>
      <div className="mt-[140px] relative scale-100 hover:scale-105 max-lg:w-[5rem] max-lg:mt-[125px] max-md:w-[70px] max-md:mt-[3rem] max-md:ml-[-10px]">
       <Link href="/portofolio"><Image width={99} height={98} src="/por.png" alt="" /></Link> 
      </div>
      <div className="mt-[127px] left-[8rem] relative scale-100 hover:scale-105 max-lg:w-[4rem] max-lg:mt-[120px] max-lg:l-[8rem] max-md:w-[60px] max-md:mt-[2rem] max-md:ml-[-6rem]">
       <Link href="/contact"><Image width={79} height={90} src="/contact.png" alt="" /></Link> 
      </div>
    </>
  );
};

export default Navigate;
