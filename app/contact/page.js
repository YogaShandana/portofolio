"use client";
import React from "react";
import Image from "next/image";
import Navigate from "@/app/Components/Navigate";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-bgContact bg-cover flex justify-center h-[120vh] max-xl:h-[130vh]">
      <div className="flex">
        <div className="max-md:ml-[2rem]">
          <Navigate />
        </div>

        <div className="mt-[13rem] max-xl:mt-[15rem] max-lg:mt-[-6rem] max-lg:ml-[1rem] max-lg:pt-[26rem] max-md:ml-[1rem] max-md:mt-[2rem]">
          <div className="max-md:hidden">
          <Image
            width={562}
            height={558}
            alt="Yogs's image"
            src="/EllipseC.png"
          />
          </div>

          <div className="mt-[-28rem] max-xl:mt-[-25rem] max-xl:ml-[7rem] ml-[8rem] max-lg:mt-[-22rem] max-lg:ml-[4rem] max-md:mt-[1rem] max-md:ml-[3rem]">
            <div className="scale-100 hover:scale-110 max-md:w-[11rem]">
              <Link href="https://wa.me/+62881037745774"><Image width={282} height={64} alt="Yogs's image" src="/wa.png" /></Link>
            </div>
            <br />
            <div className="scale-100 hover:scale-110 max-md:w-[11rem]">
              <Link href="https://www.instagram.com/yogashandana_/"><Image width={282} height={64} alt="Yogs's image" src="/ig.png" /> </Link>
            </div>
            <br />
            <div className="scale-100 hover:scale-110 max-md:w-[11rem]">
              <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=yputu51@gmail.com"><Image width={282} height={64} alt="Yogs's image" src="/email.png" /></Link>
            </div>
            <br />
            <div className="scale-100 hover:scale-110 max-md:w-[11rem]"> 
              <Link href="https://github.com/YogaShandana"><Image width={282} height={64} alt="Yogs's image" src="/git.png" /></Link>
            </div>
          </div>
        </div>

        <div className="w-[500px] text-[23px] justify-center items-center max-md:w-[1rem]">
          <div className="font-bold mt-[25rem] ml-[2rem] max-md:mt-[8rem] max-md:ml-[-20rem]">
            <h1 className="text-5xl max-md:text-[30px]">Contact</h1>
            <div className=" text-white text-[35px] max-md:text-[30px]">
              <TypeAnimation
                sequence={["My Sosmed", 1000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="font-medium mt-4 max-md:text-[12px]">
              If you are interested in my CV <br />
              you can contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
