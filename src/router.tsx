import { createBrowserRouter, redirect } from "react-router-dom";
import { CategoryComponent } from "./components/Category/CategoryComponent";
import { EmailPage } from "./pages/Email";

// Pages
import Home from "./pages/Home";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";

const router = createBrowserRouter([
  {
    path: "/", 
    loader: () => redirect("/app")
  },
  {
    path: "/",
    element: <AdminTemplate />,
    children: [
      {
        path: "/app",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <CategoryComponent />,
      },
      {
        path: "/email",
        element: <EmailPage />,
      },
    ] 
  },
]);


export default router;