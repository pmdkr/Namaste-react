import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Carousal =()=>{

    const {loggedInUser} = useContext(UserContext);
    const logged=loggedInUser.split(" ");
    const loggedfirstName = logged[0];
    // console.log(loggedfirstName);
    // console.log(loggedInUser);



    return(

        <div>
            <h1 className="ml-14 p-2 font-bold text-2xl">{loggedfirstName.toUpperCase()}, What's on your mind?</h1>
        </div>
    )





}

export default Carousal;