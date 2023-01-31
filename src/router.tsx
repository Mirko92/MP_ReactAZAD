import { createBrowserRouter } from "react-router-dom";
import { CategoryComponent } from "./components/Category/CategoryComponent";

// Pages
import Home from "./pages/Home";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";

const router = createBrowserRouter([
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
    ] 
  },
]);


export default router;