import RestaurantCard from "./RestaurantCard"

import { resList } from "../utils/mockData"
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    

    // Whenever state variable updated, reconcilation cycle started(re -render the component).

    const [searchText, SetSearchText] = useState("");
    useEffect(() => {

        console.log("useEffect called");
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };



    // conditional rendering
    if (listOfRestaurant?.length === 0) {
        return <Shimmer />
    };


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        value={searchText}

                        onChange={(e) => {
                            SetSearchText(e.target.value)


                        }}></input>

                    <button className="search-btn" onClick={() => {

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
                <button className="filter-btn"
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
            <div className="res-container">
                {filteredRestaurant?.map((restaurant) => (
                   <Link 
                   key={restaurant.info.id} 
                   to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard  resData= {restaurant} />
                    </Link> ))

                }





            </div>
        </div>
    )
}

export default Body;