import { BiLeaf, BiDonateHeart } from "react-icons/bi";

export const AboutUsData = [
  {
    id: 1,
    icon: BiLeaf,
    header: "Sustainably Sourced",
    body: "Cotton & Wool from ethical mills.",
  },
  {
    id: 2,
    icon: BiDonateHeart,
    header: "Artisan Made",
    body: "Each piece take 20+ hours to stitch.",
  },
];

export const FAQData = [
  {
    id: 1,
    question: "How long does each piece take to make?",
    answer:
      "Each bag is handcrafted from scratch, so the time varies depending on the style and size. This is why our peices are priced to reflect the skill and time that goes into every stitch. You're not just buying a bag — you're getting a handmade piece made with care and attention to detail.",
    value: "production-duration",
  },
  {
    id: 2,
    question: "What materials do you use?",
    answer:
      "Our current collection is made with t-shirt yarn — a soft, chunky, and durable fabric yarn that gives each bag its signature look and feel. As we grow, we'll be introducing new and exciting materials with each collection drop, so watch this space!",
    value: "material-choice",
  },
  {
    id: 3,
    question: "How should I care for my crochet items?",
    answer:
      "Hand wash in cold water with mild detergent and lay flat to dry. Avoid machine washing and wringing to preserve shape",
    value: "crochet-care",
  },
  {
    id: 4,
    question: "How long does processing take?",
    answer:
      "Since each bag is handmade to order, please allow 4-7 business days for processing before your order is shipped. We appreciate your patience and promise it's worth the wait!",
    value: "processing-time",
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer:
      "Due to the handmade nature of our products, we do not accept returns unless the item arrives damaged or defective. If you receive a damaged item, please contact us within 48 hours of delivery with photos of the damage, and we'll work with you to resolve the issue.",
    value: "return-policy",
  },
  // {
  //   id: 6,
  //   question: "Do you offer custom offers?",
  //   answer:
  //     "Yes, we do offer custom orders! Please reach out to us with your design ideas, and we'll work together to create a unique piece that's perfect for you.",
  //   value: "custom-offers",
  // },
];

export const ProductColors = [
  {
    id: 1,
    name: "beige",
    hex: "#F5F5DC",
  },
  {
    id: 2,
    name: "black",
    hex: "#000000",
  },
  {
    id: 3,
    name: "white",
    hex: "#FFFFFF",
  },
  {
    id: 4,
    name: "grey",
    hex: "#808080",
  },
];

export const Products: Product[] = [
  {
    id: "1",
    name: "Chunky Market Tote",
    description: "A roomy everyday tote woven from soft t-shirt yarn.",
    base_price: 24500,
    discount_percentage: 0,
    variants: [
      {
        id: "1-1",
        color: "Soft Pink",
        size: "One Size",
        image_url: "/product-1.png",
        stock_quantity: 5,
      },
      {
        id: "1-2",
        color: "Sage Green",
        size: "One Size",
        image_url: "/product-2.png",
        stock_quantity: 3,
      },
    ],
  },
  {
    id: "2",
    name: "Mini Crossbody Bag",
    description:
      "A compact crossbody with adjustable strap, handcrafted in chunky yarn.",
    base_price: 18000,
    discount_percentage: 10,
    variants: [
      {
        id: "2-1",
        color: "Sky Blue",
        size: "One Size",
        image_url: "/product-3.png",
        stock_quantity: 7,
      },
      {
        id: "2-2",
        color: "Soft Pink",
        size: "One Size",
        image_url: "/product-4.png",
        stock_quantity: 2,
      },
    ],
  },
  {
    id: "3",
    name: "Bucket Bag",
    description:
      "A structured bucket bag with a drawstring close and inner lining.",
    base_price: 32000,
    discount_percentage: 0,
    variants: [
      {
        id: "3-1",
        color: "Sage Green",
        size: "One Size",
        image_url: "/product-5.png",
        stock_quantity: 4,
      },
      {
        id: "3-2",
        color: "Sky Blue",
        size: "One Size",
        image_url: "/product-6.png",
        stock_quantity: 6,
      },
    ],
  },
];
