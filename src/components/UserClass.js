
import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        console.log("Child constructor is called!");

        super(props);
        this.state = {
            count: 0,
            count2: 2
        };
    }
    componentDidMount() {

        console.log("Child component dit mount is called!");
    }

    render() {

        console.log("Child render is called!");
        const { name, location, contact } = this.props;

        const { count } = this.state;
        console.log(this.props);

        return (

            <div className="user-card">

                <h2>count : {count}</h2>
                <h3>Name:{name} </h3>
                <h3>location:{location}</h3>
                <h3>Contact: {contact}</h3>
                <button className="count-btn" onClick={() => {

                    this.setState({
                        count: this.state.count + 1,
                    });
                }}> Count Increase</button>


            </div>
        )
    }
}

export default UserClass;