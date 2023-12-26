import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");


    const onlineStatus = useOnlineStatus();



    return (
        <div className="flex justify-between bg-teal-100 bg shadow-lg">

            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4 justify-between">
                    <li className="p-2 m-2 pr-2">Online Status : {onlineStatus ? "✅" : "🔴"}

                    </li>
                    <li className="p-2 m-2 pr-2"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 m-2 pr-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 m-2 pr-2">Cart</li>

                    <li className="p-2 m-2 pr-2">
                    <button
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            console.log("login button clicked");

                        }
                        }
                    >{btnName}</button>
                    </li>

                </ul>
            </div>


        </div>
    )


}

export default Header;