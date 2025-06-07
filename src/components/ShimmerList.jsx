import ShimmerCard from "./ShimmerCard";

function ShimmerList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(12).fill(null).map((_, index) => (
                <ShimmerCard key={index} />
            ))}
        </div>
    );
}

export default ShimmerList;
