import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
    
    const dispatch = useDispatch();

    const handleAddItem = (item) => {

        dispatch(addItem(item))


    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className=" p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between ">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span> -Rs. {item.card.info.price ?
                                item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>


                    </div>

                    <div className="w-3/12 p-2">
                        <div className="absolute">
                            <button className="px-2 mx-10 mt-4 bg-white rounded-lg  font-bold "
                                onClick={() => handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                        <div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full m-2 rounded-lg" />
                        </div>


                    </div>


                </div>



            ))}

        </div>
    )
}

export default ItemList;