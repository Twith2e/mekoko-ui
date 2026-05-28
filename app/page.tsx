import { Suspense } from "react";
import { Navbar } from "./_components/Navbar";
import { Input } from "./ui/Input";
import { FilterSidebar } from "./FilterSidebar";
import { SortDropdown } from "./SortDropdown";
import { ProductCard } from "./ProductCard";
import api from "@/lib/api";

const MIN_PRICE = 0;
const MAX_PRICE = 2500000;

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    color?: string | string[];
    minPrice?: string;
    maxPrice?: string;
    order?: string;
  }>;
}) => {
  const { color, minPrice, maxPrice, order = "newest_first" } = await searchParams;
  const colors = Array.isArray(color) ? color : color ? [color] : [];
  const priceRange: [number, number] = [
    minPrice ? Number(minPrice) : MIN_PRICE,
    maxPrice ? Number(maxPrice) : MAX_PRICE,
  ];

  const fetchProducts = async (
    color?: string | string[],
    minPrice?: string,
    maxPrice?: string,
    order?: string,
  ): Promise<ProductsResponse | null> => {
    const params = new URLSearchParams({ page: "1", limit: "10" });
    const colors = Array.isArray(color) ? color : color ? [color] : [];
    colors.forEach((c) => params.append("color", c));
    if (minPrice) params.set("min_price", minPrice);
    if (maxPrice) params.set("max_price", maxPrice);
    if (order && order !== "newest_first") params.set("order", order);
    const url = `/v1/product?${params.toString()}`;
    console.log("fetchProducts URL:", url);
    try {
      const res = await api.get<ProductsResponse>(url);
      return res.data;
    } catch (error) {
      console.error("fetchProducts failed:", error);
      return null;
    }
  };

  const response = await fetchProducts(colors, minPrice, maxPrice, order);
  const products = response?.data;

  return (
    <div className="h-screen">
      <Navbar />
      <div className="pt-32 bg-orange-albedo">
        <div className="text-center lg:w-[45%] mx-auto">
          <h2 className="font-garamond font-medium text-5xl text-darkout">
            The Crochet Collection
          </h2>
          <p className="text-xl text-espresso my-6">
            Heirloom pieces, hand-crafted with unhurried care and the softest
            yarns
          </p>
          <Input />
        </div>
        <div className="px-6 mt-20 pb-12 flex gap-20">
          <div className="w-[25%]">
            <Suspense>
              <FilterSidebar selectedColor={colors} priceRange={priceRange} />
            </Suspense>
          </div>
          <div>
            <div className="flex justify-end mb-6">
              <Suspense>
                <SortDropdown order={order} />
              </Suspense>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {products?.map((product, index) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image_url={product.variants[0].image_url}
                  price={product.base_price.toLocaleString()}
                  discount_percentage={product.discount_percentage.toString()}
                  best_seller={index == 2 && true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
