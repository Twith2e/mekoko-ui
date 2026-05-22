"use client";

import Image from "next/image";
import EmailSignupForm from "./_components/EmailSignupForm";

export const Hero = () => {
  return (
    <div className="px-20 flex gap-12 items-center font-sans">
      <div className="w-[50%]">
        <div className="bg-peaceful-peach text-fluorescent-fire text-sm font-sans font-medium rounded-full px-3 py-1 w-fit">
          Coming Soon
        </div>
        <p className="text-darkout font-garamond text-[4rem] leading-20 mt-6">
          Handmade warmth,{" "}
          <span className="italic text-fluorescent-fire">stitched for you</span>
        </p>
        <p className="text-espresso text-lg pr-36 my-6">
          Artisanal crochet pieces crafted with slow-fashion values. Each stitch
          tells a story of patience, quality, and timeless style.
        </p>
        <EmailSignupForm />
      </div>
      <div className="h-162.5 w-[50%] relative">
        <Image
          className="object-cover z-0 rounded-[4rem] animate-bounce"
          src="/hero-image.png"
          alt="hero-image"
          fill
        />
      </div>
    </div>
  );
};
