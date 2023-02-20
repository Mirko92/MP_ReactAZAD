import { createBrowserRouter, redirect } from "react-router-dom";
import { CategoryComponent } from "./components/Category/CategoryComponent";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";

// Pages
import Home            from "./pages/Home";
import { EmailPage }   from "./pages/Email";
import { TokenClaims } from "./pages/TokenClaims/TokenClaims";
import { OpenAI }      from "./pages/OpenAI/OpenAI";
import { Demo   }      from "./pages/Demo/Demo";
import { CategoriesPage } from "./pages/Categories/Categories.Page";

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
        path: "/token",
        element: <TokenClaims />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/email",
        element: <EmailPage />,
      },
      {
        path: "/openai",
        element: <OpenAI />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ] 
  },
]);


export default router;