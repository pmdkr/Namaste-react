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
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);



    return (
        <div className="flex justify-between bg-white bg shadow-lg h-20">

            <div className="flex justify-normal text-center">
                <div className="content-between m-2 ml-10 p-2 pt-2 w-16 h-full text-center">
                    <Link to="/">
                        <img className="w-full cursor-pointer" src={LOGO_URL} />
                    </Link>

                </div>
                <div className="flex m-2 pr-2 justify-normal ">
                    <ul className="flex m-2 p-2 justify-between">
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </Link>
                        </li>

                        <li className=" mx-2 font-semibold"><Link to="/">Home</Link></li>

                    </ul>

                </div>
            </div>
            <div className="nav-items">
                <ul className="flex m-2 p-2 justify-between">
                    <li className="m-2 pr-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className=" m-2 pr-2"><Link to="/about">About Us</Link></li>
                    <li className=" m-2 pr-2"><Link to="/contact">Contact Us</Link></li>
                    {/* <li className=" m-2 pr-2"><Link to="/grocery">Grocery</Link></li> */}

                    <div className="flex m-2 pr-2 justify-normal">
                        <li>
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </Link>
                        </li>
                        <li className="mx-2 font-semibold"><Link to="/cart">({cartItems.length} items)</Link></li>
                    </div>

                    <li className=" m-2 pr-2">
                        <button
                            onClick={() => {
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                                // console.log("login button clicked");

                            }
                            }
                        >{btnName}</button>
                    </li>
                    <li className=" m-2 pr-2">{loggedInUser}</li>

                </ul>
            </div>


        </div>
    )


}

export default Header;