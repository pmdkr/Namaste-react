import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Carousal =()=>{

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);



    return(

        <div>
            <h1 className="ml-14 p-2 font-bold text-2xl">{loggedInUser.toUpperCase()}, What's on your mind?</h1>
        </div>
    )





}

export default Carousal;