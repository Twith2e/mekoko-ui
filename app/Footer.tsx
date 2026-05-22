"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/mekoko.ng",
    comingSoon: false,
  },
  { label: "Pinterest", href: "#", comingSoon: true },
];

const legalLinks = [
  { label: "Shipping Policy", href: "#", comingSoon: true },
  { label: "Returns", href: "#", comingSoon: true },
  { label: "Privacy", href: "#", comingSoon: true },
];

export const Footer = () => {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setToast(true);
  };

  return (
    <footer className="bg-peaceful-peach px-3 lg:px-20 pt-16 pb-70 md:pb-70 lg:pb-6 relative">
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-darkout text-white font-sans text-sm px-6 py-3 rounded-full shadow-lg animate-fade-in">
          This page is coming soon
        </div>
      )}

      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between items-start mb-16">
        <div className="max-w-xs">
          <p className="font-garamond text-3xl font-medium text-sienna mb-4">
            Mekoko
          </p>
          <p className="font-sans text-sm text-espresso leading-relaxed">
            Stitching beauty into everyday life through artisanal craftsmanship
            and sustainable design.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div>
            <p className="font-sans text-sm font-semibold text-sienna mb-4">
              Social
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, comingSoon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={comingSoon ? undefined : "_blank"}
                    onClick={comingSoon ? handleComingSoon : undefined}
                    className="font-sans text-sm text-darkout hover:text-sienna transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-sm font-semibold text-sienna mb-4">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(({ label, href, comingSoon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={comingSoon ? handleComingSoon : undefined}
                    className="font-sans text-sm text-darkout hover:text-sienna transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-sand pt-6">
        <p className="font-sans text-sm text-espresso text-center">
          © {new Date().getFullYear()} Mekoko Handmade. Crafted with love.
        </p>
      </div>
    </footer>
  );
};
