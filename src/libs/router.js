import Chat from "components/Chat/Chat";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register.js";
import { createBrowserRouter } from "react-router-dom";
import HomeSever from "utils/ProtectedRoute";
import NoSelectedUser from "components/Chat/NoSelectedUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeSever>
        <Home />
      </HomeSever>
    ),
    children: [
        {
            path: "",
            element: <NoSelectedUser/>,
        },
        {
            path: ":receiverId",
            element: <Chat/>
        }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
