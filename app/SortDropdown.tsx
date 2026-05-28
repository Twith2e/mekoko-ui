"use client";

import { Select } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

const SORT_OPTIONS = [
  { value: "newest_first", label: "Newest" },
  { value: "oldest_first", label: "Oldest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
];

export const SortDropdown = ({ order }: { order: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "newest_first") {
      params.set("order", value);
    } else {
      params.delete("order");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Select
      data={SORT_OPTIONS}
      value={order}
      onChange={handleChange}
      allowDeselect={false}
      w={190}
    />
  );
};
