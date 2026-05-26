"use client";

import { ShoppingBag, User2 } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed w-screen bg-sugar-milk z-50">
      <nav className="flex justify-between items-center py-3 px-12 bg-green border-b border-b-[#999]">
        <h2 className="font-garamond text-fluorescent-fire font-medium text-[2rem]">
          Mekoko
        </h2>
        <div className="font-garamond text-espresso gap-12 hidden">
          <Link className="hover:text-fluorescent-fire" href="/">
            <span>Shop</span>
          </Link>
          <Link className="hover:text-fluorescent-fire" href="/">
            <span>About</span>
          </Link>
          <Link className="hover:text-fluorescent-fire" href="/">
            <span>FAQ</span>
          </Link>
        </div>
        <div className="text-fluorescent-fire hidden gap-5">
          <Link
            className="hover:bg-terracotta hover:text-white h-7 w-7 flex items-center justify-center rounded-full"
            href="/"
          >
            <ShoppingBag size={20} />
          </Link>
          <Link
            className="hover:bg-terracotta hover:text-white h-7 w-7 flex items-center justify-center rounded-full"
            href="/"
          >
            <User2 size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
