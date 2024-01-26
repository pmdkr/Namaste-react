import { render,screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("Should render header component with login button ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Querying 
    const loginButton = screen.getByRole("button");

    // Assertion
    expect(loginButton).toBeInTheDocument();





});

