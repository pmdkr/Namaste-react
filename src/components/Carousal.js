import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import CarousalCard from "./CarousalCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

const Carousal = () => {

    const { loggedInUser } = useContext(UserContext);
    const logged = loggedInUser.split(" ");
    const loggedfirstName = logged[0];
    // console.log(loggedfirstName);
    // console.log(loggedInUser);

    const [carousal, setCarousal] = useState(null);

    useEffect(() => {

        fetchCarousal();
    }, []);

    const fetchCarousal = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        setCarousal(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        console.log(json.data.cards[0].card.card.imageGridCards.info);

        // console.log(json);


    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (

        <div>
            <h1 className="ml-14 p-2 font-bold text-2xl">{loggedfirstName.toUpperCase()}, What's on your mind?</h1>
            <div className="w-auto mx-20" >
                <Slider {...settings}>
                    {
                        carousal?.map((carousaldata) => (
                            <Link key={carousaldata.id}>

                                <CarousalCard carousalData={carousaldata} />

                            </Link>

                        ))
                    }
                </Slider>


            </div>

        </div>
    )

}

export default Carousal;