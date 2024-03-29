import { CDN_URL } from "../utils/constants";

import { resList } from "../utils/mockData";


const RestaurantCard = (props) => {

    const { resData } = props;
    // console.log(resData);

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
        <div data-testid = "resCard" className="p-2 m-2 w-[256px] bg-white rounded-lg shadow-md">
            <div className="w-auto">
                <img className=" w-full h-44 rounded-md"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>

            <div className="w-auto">
                <h3 className="text-left text-lg text font-bold mt-2">{name}</h3>
                <h5 className="text-left text-sm ">{cuisines.join(", ")} </h5>
                <h5 className="text-left text-sm">{locality}</h5>
                <div className="flex">
                    <div className="flex justify-normal ">
                        <img  className=" w-5 mr-2 text-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUh58nagKKs3cnhv647ZEB4WaEPfig_6w2pC7eSKoG6Yw2eDpBNPj-29GaqPW3SzEVJ8&usqp=CAU"/>
                    <h5 className="text-left text-sm font-semibold text-gray-900">{avgRating}</h5>

                    </div>
                    
                    <h5 className="text_left text-sm ml-4">{sla.deliveryTime} mins</h5>

                </div>

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