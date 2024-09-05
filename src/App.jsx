import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "menu",
        element: <Menu/>,
        loader : menuLoader,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
