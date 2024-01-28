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
        <div className="flex justify-between bg-white bg shadow-lg">

            <div className="content-between m-2 ml-10 p-2 pt-6 w-20 h-full text-center">
                <img className="w-full" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4 justify-between">
                    <li className="p-2 m-2 pr-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    {/* <li className="p-2 ml-2 my-2 pr-2"><Link to="/"><img className="w-6" src="https://static.vecteezy.com/system/resources/thumbnails/010/157/862/small/house-and-home-icon-symbol-sign-free-png.png"/></Link></li> */}
                    <li className="p-2 m-2 pr-2"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 m-2 pr-2 font-semibold"><Link to="/cart">Cart -({cartItems.length} items)</Link></li>

                    <li className="p-2 m-2 pr-2">
                    <button
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            // console.log("login button clicked");

                        }
                        }
                    >{btnName}</button>
                    </li>
                    <li className="p-2 m-2 pr-2">{loggedInUser}</li>

                </ul>
            </div>


        </div>
    )


}

export default Header;