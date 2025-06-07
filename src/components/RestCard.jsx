import { Link } from "react-router";

function RestCard({ restInfo }) {
    return (
        <Link to={"/city/delhi/" + restInfo?.info?.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105 cursor-pointer">
                {/* Fixed height image container */}
                <div className="w-full h-[180px] overflow-hidden relative">
                    <img
                        className="w-full h-full object-cover"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId}
                        alt={restInfo?.info?.name}
                    />
                    <p className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs font-bold px-2 py-1">
                        {restInfo?.info?.aggregatedDiscountInfoV3?.header}{" "}
                        {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </p>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="font-bold text-lg">{restInfo?.info?.name}</div>
                        <div className="flex items-center gap-1 mt-1">
                            <svg className="w-5 h-5 fill-green-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                            </svg>
                            <span className="font-semibold text-sm">{restInfo?.info?.avgRating} • </span>
                            <span className="font-bold text-sm">{restInfo?.info?.sla?.slaString}</span>
                        </div>
                        <div className="text-gray-500 text-sm mt-1 truncate">{restInfo?.info?.cuisines.join(", ")}</div>
                        <div className="text-gray-500 text-sm truncate">{restInfo?.info?.areaName}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestCard;