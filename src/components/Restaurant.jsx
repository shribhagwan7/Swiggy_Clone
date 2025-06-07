// import { useEffect, useState } from "react";
// import RestCard from "./RestCard";

// function Restaurant() {
//     const [RestData, setRestData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const proxy = "https://thingproxy.freeboard.io/fetch/";
//                 const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//                 const response = await fetch(proxy + swiggyAPI);

//                 if (!response.ok) {
//                     throw new Error(`HTTP Error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 const restaurants = data?.data?.cards?.find((card) =>
//                     card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//                 )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//                 setRestData(restaurants || []);
//             } catch (err) {
//                 setError(err.message);
//             }
//         }

//         fetchData();
//     }, []);

//     return (
//         <div className="w-[90%] mx-auto mt-10"><hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />
//             <h1 className="text-2xl font-bold text-gray-800 mb-6">
//                 Restaurants with online food delivery in Chhindwara
//             </h1>

//             {error ? (
//                 <p className="text-red-500">Error: {error}</p>
//             ) : RestData.length === 0 ? (
//                 <p className="text-gray-500">Loading restaurants...</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {RestData.map((restInfo) => (
//                         <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Restaurant;


import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import ShimmerList from "./ShimmerList"; // <-- add this

function Restaurant() {
    const [RestData, setRestData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const proxy = "https://thingproxy.freeboard.io/fetch/";
                const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
                const response = await fetch(proxy + swiggyAPI);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();

                const restaurants = data?.data?.cards?.find((card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                setRestData(restaurants || []);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-[90%] mx-auto mt-10">
            <hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Restaurants with online food delivery in Chhindwara
            </h1>
            <div className="mb-10 flex gap-4" id="head">
                <button className="border-1 flex items-center justify-center border-gray-400 rounded-2xl px-3 py-1 font-bold text-gray-700" id="Filter">Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4h18l-6.586 7.293A1 1 0 0 0 14 12v6l-4-2v-4a1 1 0 0 0-.293-.707L3 4z" />
                </svg>
                </button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="SortBy">Sort By ↓</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="FastDelivery">Fast Delivery</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="Rating">Rating 4.0+</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="PureVeg">Pure Veg</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="Offers">Offers</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="Rs300To600">Rs.300-Rs.600</button>
                <button className="border-1 border-gray-400 rounded-2xl px-4 py-1 font-bold text-gray-700 cursor-pointer" id="LessThan300">Less than Rs.300</button>
            </div>

            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : RestData.length === 0 ? (
                <ShimmerList /> // <-- use shimmer instead of text
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {RestData.map((restInfo) => (
                        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Restaurant;
