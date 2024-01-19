import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class AboutClass extends React.Component {

    constructor() {

        super();

        console.log("pareant constructor called");

    }

    componentDidMount() {

        console.log("Parant component dit mount called!")
    }

    render() {
        console.log("Parent render is called!")

        return (

            <div className="text-center">
                <UserContext.Consumer>
                    {(data)=> <h1 className=" p-2 m-2 font-semibold">{data.loggedInUser}</h1>}
                </UserContext.Consumer>

                <UserClass name={"Pramod Lohra"} location={"Ranchi"} contact={"pramodkrlohra@gmal.com"} />
                
            </div>
        )
    }


}

export default AboutClass;
