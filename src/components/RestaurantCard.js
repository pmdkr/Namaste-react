import { CDN_URL } from "../utils/constants";

import { resList } from "../utils/mockData";


const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwo,
        avgRating,
        sla,
        deliveryTime,

    } = resData?.info


    return (
        <div className="p-2 m-2 w-[256px] bg-gray-100 rounded-2xl">
            <div className="w-auto">
                <img className=" w-full h-44 rounded-md"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>

            <div className="w-auto">
                <h3 className="text-left text-lg text font-bold my-2">{name}</h3>
                <h5 className="text-left text-sm ">{cuisines.join(", ")} </h5>
                <h5 className="text-left text-sm">{locality}</h5>
                <h5 className="text-left text-sm">{sla.deliveryTime} mins</h5>
                <h5 className="text-left text-sm">{avgRating +" ⭐"}</h5>
            </div>





        </div>
    )
}



// Higher order component 


// input- RestaruntCard => RestaurantCardPrompted

export const withPromtedLabel = (RestaruntCard) => {

    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaruntCard {...props} />

            </div>
        )
    }
}

export default RestaurantCard;