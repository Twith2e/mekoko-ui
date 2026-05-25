import { Navbar } from "./_components/Navbar";
import { Input } from "./ui/Input";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
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
      </div>
    </div>
  );
};

export default Page;
