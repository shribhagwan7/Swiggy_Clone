// import { dineoutRestaurants } from '../Utils/DineData';
// import DineCard from './DineCard';

// function DineOption(){
//     return (
//         <div className='w-[90%] container mx-auto mt-10'>
//             <p className='text-2xl font-bold mb-4'>Discover best restaurants on Dineout</p>
//             <div className='grid grid-cols-4 gap-5 mt-5'>
//                 {
//                     dineoutRestaurants.map((RestData)=><DineCard key={RestData.info.id} RestData={RestData}></DineCard>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default DineOption;

// import { useRef } from "react";
// import { dineoutRestaurants } from '../Utils/DineData';
// import DineCard from './DineCard';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function DineOption() {
//   const scrollRef = useRef(null);
//   const cardRef = useRef(null);

//   const scrollLeft = () => {
//     const scrollAmount = cardRef.current?.offsetWidth + 12;
//     scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     const scrollAmount = cardRef.current?.offsetWidth + 12;
//     scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <div className="w-[90%] mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Discover best restaurants on Dineout</h1>

//       {/* Flex container with gap between arrows and items */}
//       <div className="flex items-center gap-2">
        
//         {/* Left Arrow */}
//         <button
//           onClick={scrollLeft}
//           className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
//         >
//           <ChevronLeft />
//         </button>

//         {/* Scrollable Items */}
//         <div
//           ref={scrollRef}
//           className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-2 py-2"
//         >
//           {dineoutRestaurants.map((RestData, index) => (
//             <div
//               key={RestData.id}
//               ref={index === 0 ? cardRef : null}
//               className="min-w-[180px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[220px] xl:min-w-[220px]"
//             >
//               <DineCard RestData={RestData} />
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollRight}
//           className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DineOption;


import { useRef, useEffect, useState } from "react";
import { dineoutRestaurants } from '../Utils/DineData';
import DineCard from './DineCard';
import { ChevronLeft, ChevronRight } from "lucide-react";

function DineOption() {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width + 16); // includes gap between cards
    }
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <div className="w-[90%] mx-auto mt-10"><hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Discover best restaurants on Dineout</h1>

      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md hover:scale-105 transition rounded-full p-2 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 py-2"
        >
          {dineoutRestaurants.map((RestData, index) => (
            <div
              key={RestData.info.id}
              ref={index === 0 ? cardRef : null}
              className="min-w-[80vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[280px]"
            >
              <DineCard RestData={RestData} />
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

export default DineOption;

