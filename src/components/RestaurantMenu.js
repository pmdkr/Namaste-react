
import { useEffect, useState } from "react";
import { RESMENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        fetchMenu();

    }, []);

    const fetchMenu = async () => {


        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.442701&lng=85.291737&restaurantId=727850&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json.data);
         setResInfo(json.data);

    };

    // const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

    if (resInfo === null) {
        return <Shimmer />
    }

    return (
        <div className="menu">

            <h1>
                {resInfo?.cards[0]?.card?.card?.info.name}
            </h1>
            <h2>{resInfo?.cards[0]?.card?.card?.info.locality}</h2>
            <h2>Name of the restaurant</h2>
            <ul>
                <li>biryani</li>
                <li>dosa</li>
                <li>kabab</li>
                <li>tanoori roti</li>

            </ul>
        </div>
    )
}

export default RestaurantMenu;