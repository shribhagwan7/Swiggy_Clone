import { useState } from "react";

function RestInfo({ restData }) {
    const [count, setCount] = useState(0);
    const [showFullDesc, setShowFullDesc] = useState(false);

    const handleAdd = () => setCount(1);
    const handleInc = () => setCount((prev) => prev + 1);
    const handleDec = () => setCount((prev) => (prev > 1 ? prev - 1 : 0));

    const description = restData?.description || "";
    const shortDesc = description.slice(0, 100);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start border-b pb-6 gap-4">
            {/* Left: Dish Details */}
            <div className="flex-1 space-y-1">
                {restData?.isBestseller && (
                    <span className="text-sm text-red-500 font-semibold">⭐ Bestseller</span>
                )}

                <h3 className="text-lg font-semibold text-gray-900">{restData?.name}</h3>
                <p className="text-md font-medium text-gray-800">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
                {restData?.ratings?.aggregatedRating?.rating && (
                    <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                        <svg className="w-4 h-4 fill-green-600" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                        </svg>
                        {restData?.ratings?.aggregatedRating?.rating} (
                        {restData?.ratings?.aggregatedRating?.ratingCountV2})
                    </p>
                )}

                <p className="text-md text-gray-600">
                    {showFullDesc || description.length <= 100
                        ? description
                        : shortDesc + "... "}
                    {description.length > 100 && (
                        <button
                            className="text-blue-500 text-md font-medium ml-1 cursor-pointer"
                            onClick={() => setShowFullDesc(!showFullDesc)}
                        >
                            {showFullDesc ? "Read less" : "Read more"}
                        </button>
                    )}
                </p>
            </div>

            <div className="relative min-w-[110px]">
                <img
                    src={
                        restData?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/${restData?.imageId}`
                            : "https://via.placeholder.com/100"
                    }
                    alt={restData?.name}
                    className="w-[140px] h-[100px] object-cover rounded-md"
                />
                <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2">
                    {count === 0 ? (
                        <button
                            className="bg-white border border-green-600 text-green-600 px-4 py-1 text-sm font-semibold rounded-md shadow-sm cursor-pointer"
                            onClick={handleAdd}
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-md shadow-sm border border-green-600">
                            <button className="cursor-pointer" onClick={handleDec}>-</button>
                            <span className="font-semibold">{count}</span>
                            <button className="cursor-pointer" onClick={handleInc}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestInfo;
