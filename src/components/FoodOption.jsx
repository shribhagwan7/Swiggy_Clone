import { useRef } from "react";
import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FoodOption() {
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
    <div className="w-[90%] mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800">What's on your mind?</h1>

      {/* Wrapper flex container for arrows + cards */}
      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-2 py-2"
        >
          {imageGridCards.map((FoodData, index) => (
            <div
              key={FoodData.id}
              ref={index === 0 ? cardRef : null}
              className="min-w-[180px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[220px] xl:min-w-[220px]"
            >
              <FoodCard FoodData={FoodData} />
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

export default FoodOption;


