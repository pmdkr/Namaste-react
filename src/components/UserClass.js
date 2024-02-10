
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
      const jsonValue= await json;
      this.setState({
        userInfo:jsonValue,
      });
      
      console.log(jsonValue);
      

    }

    render() {

        
        const { name,location ,avatar_url,login} = this.state.userInfo;

        const { count } = this.state;
        // console.log(this.props);

        return (

            <div className="text-center">
                

                <img className="w-40 m-auto rounded-md  " src={avatar_url}/>
                <h3 className=" font-semibold text-lg"> Username : {login}</h3>
                <h3 className=" font-semibold text-lg"> Name : {name} </h3>
                 <h3 className=" font-semibold text-lg"> Address : {location}</h3>
                {/* <h3>Contact: {contact}</h3>  */}
                


            </div>
        )
    }
}

export default UserClass;