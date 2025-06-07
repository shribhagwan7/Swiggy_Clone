import RestInfo from "./RestInfo";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MenuCard({ menuItems, foodSelected }) {
    const [isOpen, setIsOpen] = useState(true);

    if ("categories" in menuItems) {
        return (
            <div className="w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <div>
                    {menuItems.categories.map((items) => (
                        <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected} />
                    ))}
                </div>
            </div>
        );
    }

    const filteredItems = menuItems?.itemCards?.filter((item) => {
        const info = item?.card?.info;
        const isVeg = info?.isVeg === 1;
        const isBestseller = info?.isBestseller === true;

        if (foodSelected === "veg") return isVeg;
        if (foodSelected === "nonveg") return !isVeg;
        if (foodSelected === "bestseller") return isBestseller;
        return true; // by default show all
    });

    if (!filteredItems || filteredItems.length === 0) return null;

    return (
        <div className="w-full px-4 py-3 border-b border-gray-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {menuItems.title} ({filteredItems?.length})
                </p>
                <button className="text-3xl text-gray-600 focus:outline-none cursor-pointer">
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
            </div>

            {isOpen && (
                <div className="mt-4 space-y-6">
                    {filteredItems?.map((item) => (
                        <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MenuCard;
