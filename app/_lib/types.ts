type WaitListCountResponse = {
  status: string;
  message: string;
  data: number;
};

type WaitListEntryResponse = {
  status: string;
  message: string;
  data: Array<{
    email: string;
    date: string;
  }>;
};

type ProductsResponse = {
  status: string;
  message: string;
  data: Array<Product>;
  page: number;
  limit: number;
  total: number;
};

type Product = {
  id: string;
  name: string;
  description: string;
  base_price: number;
  discount_percentage: number;
  variants: Array<Variant>;
};

type Variant = {
  id: string;
  color: string;
  size: string;
  image_url: string;
  stock_quantity: number;
};
