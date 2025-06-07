import { useRef } from "react";
import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function GroceryOption() {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = cardRef.current?.offsetWidth + 12;
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const scrollAmount = cardRef.current?.offsetWidth + 12;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-[90%] mx-auto mt-10"><hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />
      <h1 className="text-2xl font-bold mb-4">Shop Groceries on Instamart</h1>

      {/* Flex container with gap between arrows and items */}
      <div className="flex items-center gap-2">
        
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Items */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-2 py-2"
        >
          {GrocerGridCard.map((FoodData, index) => (
            <div
              key={FoodData.id}
              ref={index === 0 ? cardRef : null}
              className="min-w-[180px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[220px] xl:min-w-[220px]"
            >
              <GroceryCard FoodData={FoodData} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default GroceryOption;
