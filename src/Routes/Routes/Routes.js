import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";
import Submission from "../../Pages/Submission/Submission";
import Publications from "../../Pages/Publications/Publications";
import IndividualPublications from "../../Pages/Publications/IndividualPublications/IndividualPublications";
import PagesOutlet from "../../Layout/PagesOutlet";
import SortedPage from "../../Pages/SortedPage/SortedPage";
import Success from "../../Pages/Success/Success";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import Search from "../../Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/submission",
        element: <Submission></Submission>,
      },
      {
        path: "/publications",
        element: <Publications></Publications>,
      },
      {
        path: "/publications/:id",
        element: <IndividualPublications></IndividualPublications>,
        loader: ({ params }) =>
          fetch(
            `https://csedut-hesis-repository-server.vercel.app/thesisFiles/${params.id}`
          ),
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/pages",
    element: <PagesOutlet></PagesOutlet>,
    children: [
      {
        path: "/pages/:year",
        element: <SortedPage></SortedPage>,
        loader: ({ params }) =>
          fetch(
            `https://csedut-hesis-repository-server.vercel.app/pages/${params.year}`
          ),
      },
      {
        path: "/pages/yourSearch/:query",
        element: <Search></Search>,
        loader: ({ params }) =>
          fetch(
            `https://csedut-hesis-repository-server-musfikuroli.vercel.app/yourSearch?query=${params.query}`
          ),
      },
    ],
  },
  {
    path: "/success",
    element: <Success></Success>,
  },
]);

export default router;
