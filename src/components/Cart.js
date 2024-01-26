import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();

    const handleClearCart = () => {
        dispatch(clearItem());

    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold"> Cart</h1>
            <div>
                <button className="p-2 m-2 border text text-white lg bg-black font-semibold rounded-md" onClick={handleClearCart}> Clear Cart</button>
            </div>

            <div className="w-6/12 mx-auto bg-gray-100">
                <ItemList items={cartItems} />
            </div>


        </div>
    )



}

export default Cart;