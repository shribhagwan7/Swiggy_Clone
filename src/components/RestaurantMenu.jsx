import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import RestInfoShimmer from "./RestInfoShimmer";
import { Link } from "react-router";

function RestaurantMenu() {
    const { id } = useParams();
    const [selected, setSelected] = useState(null); // "veg" | "nonveg" | "bestseller" | null
    const [RestData, setRestData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const proxy = "https://thingproxy.freeboard.io/fetch/";
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                const response = await fetch(proxy + swiggyAPI);

                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

                const data = await response.json();
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempData.filter((items) => 'title' in items?.card?.card);
                setRestData(filterData);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, [id]);

    return (
        <div>
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : RestData.length === 0 ? (
                <RestInfoShimmer />
            ) : (
                <div>
                    <div className="w-[80%] mx-auto mt-10">
                        <Link to={`/city/delhi/${id}/search`}>
                            <p className="w-full text-center py-3 rounded-3xl bg-gray-200 text-lg">Search for Dishes</p>
                        </Link>
                    </div>
                    <div className="w-[80%] mx-auto mt-10">
                        {/* Buttons */}
                        <div className="flex gap-4 mb-4">
                            <button
                                onClick={() => setSelected("veg")}
                                className={`border-2 rounded-2xl font-bold px-4 py-1 cursor-pointer ${selected === "veg" ? "bg-green-100 border-green-500 text-green-700" : "border-gray-400 text-green-700"
                                    }`}
                            >
                                Veg
                            </button>
                            <button
                                onClick={() => setSelected("nonveg")}
                                className={`border-2 rounded-2xl font-bold px-4 py-1 cursor-pointer ${selected === "nonveg" ? "bg-red-100 border-red-500 text-red-700" : "border-gray-400 text-red-700"
                                    }`}
                            >
                                Non Veg
                            </button>
                            <button
                                onClick={() => setSelected("bestseller")}
                                className={`border-2 rounded-2xl font-bold px-4 py-1 cursor-pointer ${selected === "bestseller" ? "bg-yellow-100 border-yellow-500 text-yellow-700" : "border-gray-400 text-yellow-700"
                                    }`}
                            >
                                Bestseller
                            </button>
                        </div>

                        <hr className="mb-4" />

                        {RestData.map((menuItems) => (
                            <MenuCard
                                key={menuItems?.card?.card?.title}
                                menuItems={menuItems?.card?.card}
                                foodSelected={selected}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default RestaurantMenu;
