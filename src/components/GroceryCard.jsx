function GroceryCard({ FoodData }){
    return (
        <div className="flex-none transition-transform duration-300 hover:scale-105">
            <a target="_blank" href={FoodData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + FoodData?.imageId}></img>
            </a>
            <p className="text-center font-medium mt-3 flex flex-row">{FoodData?.action?.text}</p>
        </div>
    )
}

export default GroceryCard;