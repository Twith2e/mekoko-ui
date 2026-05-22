"use client";

import { ComponentType } from "react";

export const AboutUsCard = ({
  icon: Icon,
  header,
  body,
}: {
  icon: ComponentType<{ size: number }>;
  header: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-4xl p-6">
      <div>
        <Icon size={20} />
      </div>
      <div className="font-garamond text-darkout text-2xl font-medium">
        {header}
      </div>
      <div className="font-sans font-medium text-sm text-espresso">{body}</div>
    </div>
  );
};
