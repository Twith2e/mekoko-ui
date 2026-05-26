"use client";

import EmailSignupForm from "@/app/_components/EmailSignupForm";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-3 lg:px-20 flex flex-col-reverse lg:flex-row gap-12 items-center font-sans">
      <div className="lg:w-[50%]">
        <div className="bg-peaceful-peach text-fluorescent-fire text-xs lg:text-sm font-sans font-medium rounded-full px-3 py-1 w-fit">
          Coming Soon
        </div>
        <p className="text-darkout font-garamond text-3xl lg-text-[4rem] lg:leading-20 mt-6">
          Handmade warmth,
          <br className="lg:hidden" />
          <span className="italic text-fluorescent-fire">
            {" "}
            stitched for you
          </span>
        </p>
        <p className="text-espresso text-sm lg:pr-36 my-6">
          Artisanal crochet pieces crafted with slow-fashion values. Each stitch
          tells a story of patience, quality, and timeless style.
        </p>
        <EmailSignupForm />
      </div>
      <div className="h-162.5 lg:w-[50%] w-full relative">
        <Image
          className="object-cover z-0 rounded-2xl lg:rounded-[4rem] animate-bounce"
          src="/hero-image.png"
          alt="hero-image"
          loading="eager"
          fill
        />
      </div>
    </div>
  );
};
