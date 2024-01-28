import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


test("Should load restaurant card component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    // Querying 
    const resCard=screen.getByText("Biggies Burger");

    // assertion 
    expect(resCard).toBeInTheDocument();





});