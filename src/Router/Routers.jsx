import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LoginForm from "../Login/LoginForm";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../MyPostedJob/MyPostedJob";
import MyBids from "../MyBids/MyBids";
import MyBidRequest from "../MyBidRequest/MyBidRequest";
import AllJobs from "../Pages/AllJobs/AllJobs";
import UpdateJob from "../UpdateJob/UpdateJob";
import JobDetails from "../JobDetails/JobDetails";

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
        {
          path: "/my-posted-job",
          element: <MyPostedJob/>,
        },
        {
          path: "/my-bids",
          element: <MyBids/>,
        },
        {
          path: "/my-bids-request",
          element: <MyBidRequest/>,
        },
        {
          path: "/all-job",
          element: <AllJobs/>,
        },
        {
          path: "/update/:id",
          element: <UpdateJob/>
        },
        {
          path : "/job/:id",
          element : <JobDetails/>
        }
      ],
    },
  ]);

  export default router