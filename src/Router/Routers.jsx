import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LoginForm from "../Login/LoginForm";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <LoginForm/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/add-job",
          element: <AddJob/>,
        },
      ],
    },
  ]);

  export default router