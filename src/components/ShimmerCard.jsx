function ShimmerCard() {
    return (
        <div className="bg-gray-200 animate-pulse rounded-xl shadow-md overflow-hidden h-[300px]">
            <div className="w-full h-[180px] bg-gray-300"></div>
            <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
        </div>
    );
}

export default ShimmerCard;
