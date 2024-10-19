import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./src/components/Navbar";
import { Body } from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Men from "./src/components/Men";
import Women from "./src/components/Women";
import Error from "./src/components/Error";
import ProductDetails from "./src/components/ProductDetails";
import UserContext from "./src/utils/UserContext";
import { useState } from "react";
import {Provider}   from "react-redux";
import  store  from "./src/store/store";
const Grocery = lazy(() => import("./src/components/Grocery"));
const App = () => {
  const [username, setUsername] = useState("Ram");
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ name: username, setUsername }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/Men",
        element: <Men />,
        errorElement: <Error />,
      },
      {
        path: "/Women",
        element: <Women />,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<RouterProvider router={appRouter} />);
