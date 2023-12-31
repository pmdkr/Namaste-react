import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Footer from "./src/components/Footer";



const Grocery=lazy(()=> import("./src/components/Grocery"));



const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer/>
        </div>
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
                element: <Suspense fallback={<h3> the grocery page is loading</h3>}><Grocery/></Suspense>
            }


        ],
        errorElement: <Error />
    },


])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);


