"use client";

import { RangeSlider } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import classes from "./SliderLabel.module.css";

export const PriceRange = ({
  min = 0,
  max = 2500000,
  selectedRange,
}: {
  min?: number;
  max?: number;
  selectedRange: [number, number];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [range, setRange] = useState<[number, number]>(
    selectedRange ?? [min, max],
  );

  const pushToUrl = (value: [number, number]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", String(value[0]));
    params.set("maxPrice", String(value[1]));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleInputChange = (index: 0 | 1, raw: string) => {
    const num = Number(raw);
    if (isNaN(num)) return;
    const next: [number, number] =
      index === 0 ? [num, range[1]] : [range[0], num];
    setRange(next);
    pushToUrl(next);
  };

  return (
    <div className="font-sans mt-8">
      <RangeSlider
        min={min}
        max={max}
        value={range}
        onChange={setRange}
        onChangeEnd={pushToUrl}
        labelAlwaysOn
        label={(value) => `₦${value.toLocaleString()}`}
        classNames={classes}
        thumbFromLabel="Min price"
        thumbToLabel="Max price"
      />
      <div className="flex gap-2 mt-8">
        <input
          type="number"
          value={range[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-full border border-sand rounded px-2 py-1 text-sm text-espresso"
        />
        <input
          type="number"
          value={range[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-full border border-sand rounded px-2 py-1 text-sm text-espresso"
        />
      </div>
    </div>
  );
};
