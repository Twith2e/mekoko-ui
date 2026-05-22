"use client";

import { Mail, Globe, MapPin } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hellomekoko@gmail.com",
    isLink: true,
    isMail: true,
  },
  {
    icon: Globe,
    label: "INSTAGRAM",
    value: "mekoko.ng",
    isLink: true,
    isMail: false,
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Ibadan, NG",
    isLink: false,
    isMail: false,
  },
];

export const Contact = () => {
  return (
    <div className="bg-peaceful-peach pt-20 px-20 pb-20 flex gap-12 items-start">
      <div className="w-1/2">
        <h2 className="font-garamond text-5xl font-medium text-darkout mb-4">
          Get in Touch
        </h2>
        <p className="font-sans text-espresso text-base mb-10">
          Have a question about a pattern, or just want to talk yarn? We&apos;d
          love to hear from you.
        </p>
        <div className="flex flex-col gap-6">
          {contactItems.map(({ icon: Icon, label, value, isMail, isLink }) => (
            <div key={label} className="flex items-start gap-4">
              <Icon className="text-sienna mt-1 shrink-0" size={20} />
              <div>
                <p className="font-sans text-xs font-semibold text-sienna tracking-widest uppercase mb-1">
                  {label}
                </p>
                {isLink ? (
                  <Link
                    target="_blank"
                    href={
                      isMail
                        ? "mailto:" + value
                        : "https://instagram.com/" + value
                    }
                    className="font-sans text-darkout text-sm hover:text-sienna hover:underline underline-offset-2 transition-colors"
                  >
                    {value}
                  </Link>
                ) : (
                  <p className="font-sans text-darkout text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 bg-white rounded-3xl p-8 shadow-sm">
        <div className="bg-sand/30 border border-sand rounded-2xl px-5 py-3 mb-6">
          <p className="font-sans text-sm text-espresso">
            Our contact form is coming soon. In the meantime, reach us directly at{" "}
            <a href="mailto:hellomekoko@gmail.com" className="text-sienna underline underline-offset-2 hover:text-darkout transition-colors">
              hellomekoko@gmail.com
            </a>
          </p>
        </div>
        <div className="flex gap-4 mb-4 opacity-40 pointer-events-none select-none">
          <div className="flex-1">
            <label className="font-sans text-sm text-darkout mb-2 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              disabled
              className="w-full border border-sand rounded-xl px-4 py-3 font-sans text-sm text-darkout placeholder:text-sand outline-none cursor-not-allowed bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="font-sans text-sm text-darkout mb-2 block">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              disabled
              className="w-full border border-sand rounded-xl px-4 py-3 font-sans text-sm text-darkout placeholder:text-sand outline-none cursor-not-allowed bg-transparent"
            />
          </div>
        </div>
        <div className="mb-6 opacity-40 pointer-events-none select-none">
          <label className="font-sans text-sm text-darkout mb-2 block">
            Message
          </label>
          <textarea
            placeholder="How can we help?"
            rows={5}
            disabled
            className="w-full border border-sand rounded-xl px-4 py-3 font-sans text-sm text-darkout placeholder:text-sand outline-none resize-none cursor-not-allowed bg-transparent"
          />
        </div>
        <button disabled className="w-full bg-sienna/40 text-white font-sans text-sm font-medium py-4 rounded-full cursor-not-allowed">
          Send Message
        </button>
      </div>
    </div>
  );
};
