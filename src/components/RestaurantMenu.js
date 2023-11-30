
import { useEffect, useState } from "react";
import { RESMENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    // const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

    if (resInfo === null) {
        return <Shimmer />
    }


    const { name, locality } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">

            <h1> {name} </h1>
            <h3>{locality}</h3>
            <h3>Menu</h3>
            <ul>
                {
                    itemCards?.map(item =>
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs.  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                    )}


            </ul>
        </div>
    )
}

export default RestaurantMenu;