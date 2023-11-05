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
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")} </h5>
            <h5>{locality}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            <h5>{avgRating}</h5>
            



        </div>
    )
}

export default RestaurantCard;