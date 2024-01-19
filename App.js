import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart"
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import UserContext from "./src/utils/UserContext";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Pramod Lohra",

        }
        setUserName(data.name);



    }, []);


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
            <div className="app">
                <Header />
                <Outlet />

            </div>

        </UserContext.Provider>

        </Provider>
        

    )
}

const approuter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h3> the grocery page is loading</h3>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            }


        ],
        errorElement: <Error />
    },


])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);


