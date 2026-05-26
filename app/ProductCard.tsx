"use client";

import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
  id,
  image_url,
  price,
  name,
  discount_percentage,
  best_seller,
}: {
  id: string;
  image_url: string;
  price: string;
  name: string;
  discount_percentage: string;
  best_seller: boolean;
}) => {
  return (
    <Link
      className="group relative bg-white p-6 rounded-3xl w-full h-fit text-center border border-[#EEE] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03]"
      href="/id"
    >
      {best_seller && (
        <div className="absolute top-10 left-10 z-50 bg-cottagecore-sunset rounded-2xl py-0.5 px-3 font-medium font-sans text-sm text-espresso">
          Best Seller
        </div>
      )}
      <div className="w-full rounded-3xl h-68 overflow-hidden">
        <Image
          className="w-full rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.03]"
          width={300}
          height={300}
          alt={image_url}
          src={image_url}
        />
      </div>
      <p className="font-garamond font-medium text-darkout text-2xl pt-6">
        {name}
      </p>
      <p className="font-sans font-medium pt-1 text-fluorescent-fire">{`₦${price}`}</p>
    </Link>
  );
};
