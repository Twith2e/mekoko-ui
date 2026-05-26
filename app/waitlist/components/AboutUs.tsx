"use client";

import { AboutUsData } from "@/app/_lib/data";
import { AboutUsCard } from "./AboutUsCard";

export const AboutUs = () => {
  return (
    <div className="lg:px-20 px-3 py-12 mt-20 flex flex-col lg:flex-row gap-12 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,#FEF7ED_0%,#F2ECE6_100%)]">
      <div className="lg:w-1/2">
        <h2 className="font-garamond text-3xl lg:text-5xl text-fluorescent-fire font-medium mb-6">
          The Mekoko Way
        </h2>
        <p className="font-sans text-sm lg:text-base text-darkout">
          In a world of fast fashion, we choose the slow road. Every Mekoko
          piece is handmade by master artisans using sustainably sourced, 100%
          natural fibers. From our signature summer totes to our weighted winter
          cardigans, we create garments that are meant to be cherished for a
          lifetime.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-6">
        {AboutUsData.map((aboutUs) => (
          <AboutUsCard
            key={aboutUs.id}
            header={aboutUs.header}
            icon={aboutUs.icon}
            body={aboutUs.body}
          />
        ))}
      </div>
    </div>
  );
};
