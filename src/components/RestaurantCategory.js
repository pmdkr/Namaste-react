
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
    const [show, setShow]=useState(false);

    const handleClick = () => {
        setShowIndex();
        setShow(!show);
    }

    return (

        <div>

            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="justify-between flex cursor-pointer" onClick={handleClick}>
                    <span className="  font-bold text-sm ">
                        {data.title} ({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>

                {/* <ItemList items={data.itemCards}/> */}
                {showItems && show && <ItemList items={data.itemCards}/>}
            </div>
            {/* {Accordian body } */}


        </div>
    )



}

export default RestaurantCategory;