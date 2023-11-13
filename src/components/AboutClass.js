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

            <div>

                <UserClass name={"Pramod Lohra"} location={"Ranchi"} contact={"pramodkrlohra@gmal.com"} />
                <UserClass name={"Elon Musk"} location={"Us"} contact={"elon.musk@gmail.com"} />
            </div>
        )
    }


}

export default AboutClass;
