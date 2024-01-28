import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/resMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";



global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
});



it("should load restaurant menu component with food item list", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <Cart/>

            </Provider>
            </BrowserRouter>
            )
    });


    const accordianHeader = screen.getByText("Breakfast (12)");

    fireEvent.click(accordianHeader);

    const fooditem = screen.getAllByTestId("foodItems");
    expect(fooditem.length).toBe(12);

    const addBtn = screen.getAllByRole("button", {name: "Add+"});
    expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();
    


    expect(screen.getAllByTestId("foodItems").length).toBe(13);


    const clearbtn = screen.getByRole("button",{name : "Clear Cart"});

    fireEvent.click(clearbtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(12);


})