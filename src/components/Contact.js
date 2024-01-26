const Contact=()=>{


    return(
        <div>
            <h1 className="text-3xl p-2 m-2" >Contact Us</h1>
            <form>

                <input type="text" className="border border-black p-2 m-2 " placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2 " placeholder="Message"/>
                <button className="border border-black p-2 m-2 rounded-lg font-semibold bg-gray-100"> Submit</button>
            </form>

        </div>
    )
}

export default Contact;