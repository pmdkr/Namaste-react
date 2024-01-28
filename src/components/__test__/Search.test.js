import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }

    });
});


it("Should search the restaurant and return 4 res cards", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));

        // querying
        const searchBtn =screen.getByRole("button", {name:"Search"});
        // console.log(searchBtn);

        // Assertion

        expect(searchBtn).toBeInTheDocument();

});
it("Should search the restaurant and return 4 res cards", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));

        // querying
        const searchBtn =screen.getByRole("button", {name:"Search"});
        // console.log(searchBtn);
        
        const searchInput = screen.getByTestId("searchInput");
        // console.log(searchInput);

        fireEvent.change(searchInput,{ target: {value: "Burger"}});

        fireEvent.click(searchBtn);
        // console.log(searchBtn);

        // screen should load 4 cards
        const cards =screen.getAllByTestId("resCard");

        expect(cards.length).toBe(1);

});

it("Should filter the restaurant and return 4 resCards", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));

        // querying
        const filterBtn =screen.getByRole("button", {name:"Top Rated Restaurants"});
        const cards = screen.getAllByTestId("resCard");
        
        // Restaurant count before filterbtn clicked
        expect(cards.length).toBe(9);

        fireEvent.click(filterBtn);

        // After the filter button , resCards length should be 8
        const afterfilterCards =screen.getAllByTestId("resCard");

        expect(afterfilterCards.length).toBe(8);

});