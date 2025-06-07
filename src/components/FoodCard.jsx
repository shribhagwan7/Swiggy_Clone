function FoodCard({ FoodData }) {

    return (
        <>
            <a target="_blank" href={FoodData?.action?.link}>
                <img className="w-40 h-50 object-cover transition-transform duration-300 hover:scale-105" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + FoodData?.imageId}></img>
            </a>
            
        </>
    )
}

export default FoodCard;