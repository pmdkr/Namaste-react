import RestaurantCard,{withPromtedLabel} from "./RestaurantCard"

import { resList } from "../utils/mockData"
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();


    // Whenever state variable updated, reconcilation cycle started(re -render the component).
    const RestaurantCardPromted=withPromtedLabel(RestaurantCard);
    const [searchText, SetSearchText] = useState("");

    // console.log("Body renderd",listOfRestaurant);
    useEffect(() => {

        console.log("useEffect called");
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

        const json = await data.json();
        // console.log(json);
        setListOfRestaurant(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    if(onlineStatus===false)return <h2>looks like you are offline , please check your internet connection!</h2>

    // conditional rendering
    if (listOfRestaurant?.length === 0) {
        return <Shimmer />
    };




    return (
        <div className="body">
            <div className="flex p-2 m-2 ">
                <div className="flex">
                    <input type="text"
                        className="m-2 p-2 border"
                        value={searchText}

                        onChange={(e) => {
                            SetSearchText(e.target.value)


                        }}></input>

                    <button className="m-2 p-2 px-4 bg-teal-300 rounded-md font-bold" onClick={() => {

                        //filter the restaurant cards and upadate the UI
                        const filteredListOfRestaurant = listOfRestaurant?.filter(
                            (res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredListOfRestaurant);
                        // searchtext
                        console.log(searchText);
                    }}> Search</button>


                </div>
                <button className="m-2 p-2 ml-14 font-bold bg-zinc-200 rounded-md hover:cursor-pointer"
                    onClick={() => {
                        const filteredList = listOfRestaurant?.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);

                        console.log(filteredList);
                    }

                    }
                >Top Rated Restaurants
                </button>


            </div>
            <div className="flex flex-wrap p-4 justify-evenly">
                {filteredRestaurant?.map((restaurant) => (
                   <Link 
                   key={restaurant.info.id} 
                   to={"/restaurants/"+ restaurant.info.id}>

                    {restaurant.info.loyaltyDiscoverPresentationInfo ? (<RestaurantCardPromted resData= {restaurant}/>
                    ) : (
                    <RestaurantCard  resData= {restaurant} />) }

                    
                    </Link> ))

                }





            </div>
        </div>
    )
}

export default Body;