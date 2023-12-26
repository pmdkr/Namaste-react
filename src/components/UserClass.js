
import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        console.log("Child constructor is called!");

        super(props);
        this.state = {
            userInfo:{

                name:"dummy",
                location:"default location",
                
                
            
            }
        };
    }
   async componentDidMount() {

      const data=await fetch("https://api.github.com/users/pmdkr");
      const json= await data.json();
      this.setState({
        userInfo:json,
      });
      
      console.log(json);
      

    }

    render() {

        
        const { name,location ,avatar_url} = this.state.userInfo;

        const { count } = this.state;
        console.log(this.props);

        return (

            <div className=" justify-between m-2 w-9/12">

                <img className="p-2 m-2 w-40 rounded-lg" src={avatar_url}/>
                <h3 className=" font-bold text-lg">Name:{name} </h3>
                 <h3>location:{location}</h3>
                {/* <h3>Contact: {contact}</h3>  */}
                


            </div>
        )
    }
}

export default UserClass;