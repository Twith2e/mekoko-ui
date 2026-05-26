"use client";

import { Checkbox } from "@mantine/core";
import { ProductColors } from "./_lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { PriceRange } from "./PriceRange";

const MIN_PRICE = 0;
const MAX_PRICE = 2500000;

export const FilterSidebar = ({
  selectedColor,
  priceRange,
}: {
  selectedColor: Array<string>;
  priceRange: [number, number];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleColorChange = (colorName: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("color");

    const current = searchParams.getAll("color");

    const next = checked
      ? [...current, colorName]
      : current.filter((c) => c !== colorName);

    next.forEach((c) => params.append("color", c));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <div className="mb-20">
        <h2 className="products-filter-heading">Color Palette</h2>
        <div className="flex flex-col gap-3">
          {ProductColors.map((color) => (
            <div key={color.id} className="flex justify-between">
              <div className="flex gap-2 text-base text-espresso font-sans">
                <Checkbox
                  color={color.hex}
                  checked={selectedColor.includes(color.name)}
                  onChange={(e) =>
                    handleColorChange(color.name, e.currentTarget.checked)
                  }
                  id={color.name}
                />
                <label htmlFor={color.name}>{color.name.toUpperCase()}</label>
              </div>
              <span
                className="h-4 w-4 rounded-full ring-1 ring-sand"
                style={{ background: color.hex }}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="products-filter-heading">Price Range</h2>
        <PriceRange
          min={MIN_PRICE}
          max={MAX_PRICE}
          selectedRange={priceRange}
        />
      </div>
    </div>
  );
};
