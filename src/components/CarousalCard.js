// import { CAROUSAL_IMG_URL } from "../utils/constants";


const CarousalCard = (props) => {

    const { carousalData } = props;
    // console.log(caroursalData);
    const {
        imageId
    } = carousalData;

    return (
        <div>

            <div className="">
                <img className="p-2 m-2 w-40"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} />

            </div>
        </div>
    )




}

export default CarousalCard;