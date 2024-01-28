import RestaurantCard, { withPromtedLabel } from "./RestaurantCard"
import { API_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Carousal from "./Carousal";


const Body = () => {


    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();

    // Whenever state variable updated, reconcilation cycle started(re -render the component).
    const RestaurantCardPromted = withPromtedLabel(RestaurantCard);
    const [searchText, SetSearchText] = useState("");

    // console.log("Body renderd",listOfRestaurant);
    useEffect(() => {

        // console.log("useEffect called");
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

        const json = await data.json();

        // console.log(json);
        setListOfRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    if (onlineStatus === false) return <h2>looks like you are offline , please check your internet connection!</h2>

    // conditional rendering
    if (listOfRestaurant?.length === 0) {
        return <Shimmer />
    };




    return (
        <div className=" bg-gray-100">

            <div className="flex p-2 m-2 ">
                <button data-testid = "filterButton" 
                className="m-2 p-2 ml-14 font-semibold text-zinc-900 bg-zinc-200 rounded-md hover:cursor-pointer"
                    onClick={() => {
                        const filteredList = listOfRestaurant?.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);

                        // console.log(filteredList);
                    }

                    }
                >Top Rated Restaurants
                </button>
                <div className="flex ml-40 ">
                    <input type="text"
                    data-testid="searchInput"
                    placeholder="Search"
                        className="my-2 ml-2 p-2 border w-96 rounded-l-full"
                        value={searchText}

                        onChange={(e) => {
                            SetSearchText(e.target.value)


                        }}></input>

                    <button className="my-2 p-2 px-6 bg-zinc-200 rounded-r-full font-semibold" onClick={() => {

                        //filter the restaurant cards and upadate the UI
                        const filteredListOfRestaurant = listOfRestaurant?.filter(
                            (res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredListOfRestaurant);
                        // searchtext
                        // console.log(searchText);
                    }}><img alt="Search" className="w-6" src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png" /></button>


                </div>

                {/* <div>
                    <label>Username : </label>
                    <input className="border border-black m-2 p-2" onChange={(e)=>setUserName(e.target.value)}></input>
                </div> */}


            </div>
            <div className="m-2">
                <Carousal />

            </div>
            <div className="flex flex-wrap p-4 justify-evenly">
                {/* {console.log(filteredRestaurant)} */}
                {filteredRestaurant?.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>

                        {restaurant.info.loyaltyDiscoverPresentationInfo ? (<RestaurantCardPromted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />)}


                    </Link>))

                }

            </div>
        </div>
    )
}

export default Body;