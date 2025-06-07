function RestInfoShimmer() {
    return (
        <div className="w-[80%] mx-auto mt-20">
            {Array(6).fill("").map((_, index) => (
                <div key={index} className="animate-pulse bg-gray-200 rounded-lg p-4 mb-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-5 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
            ))}
        </div>
    );
}

export default RestInfoShimmer;
