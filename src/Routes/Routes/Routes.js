import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";
import Submission from "../../Pages/Submission/Submission";
import Publications from "../../Pages/Publications/Publications";
import IndividualPublications from "../../Pages/Publications/IndividualPublications/IndividualPublications";

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
          fetch(`http://localhost:4000/thesisFiles/${params.id}`),
      },
    ],
  },
]);

export default router;
