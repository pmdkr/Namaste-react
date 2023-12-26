
import { useEffect, useState } from "react";
import { RESMENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId);
    // const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

    if (resInfo === null) {
        return <Shimmer />
    }


    const { name, locality, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return (
        <div className="text-center ">

            <h1 className="font-bold my-6 "> {name} </h1>
            <h3>{cuisines.join(", ")} {costForTwoMessage}</h3>

            {categories.map((category, index) => (
                //controlled component
                <RestaurantCategory
                    key={category.card.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />))}
        </div>
    )
}

export default RestaurantMenu;