import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");


    const onlineStatus = useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);



    return (
        <div className="flex justify-between bg-teal-100 bg shadow-lg">

            <div className="logo-container content-between m-2 p-2 w-24">
                <img className="w-full" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4 justify-between">
                    <li className="p-2 m-2 pr-2">Online Status : {onlineStatus ? "✅" : "🔴"}

                    </li>
                    <li className="p-2 m-2 pr-2"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 m-2 pr-2 font-semibold"><Link to="/cart">Cart -({cartItems.length} items)</Link></li>

                    <li className="p-2 m-2 pr-2">
                    <button
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            console.log("login button clicked");

                        }
                        }
                    >{btnName}</button>
                    </li>
                    <li className="p-2 m-2 pr-2 font-semibold">{loggedInUser}</li>

                </ul>
            </div>


        </div>
    )


}

export default Header;