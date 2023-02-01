import { createBrowserRouter, redirect } from "react-router-dom";
import { CategoryComponent } from "./components/Category/CategoryComponent";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";

// Pages
import Home            from "./pages/Home";
import { EmailPage }   from "./pages/Email";
import { TokenClaims } from "./pages/TokenClaims/TokenClaims";
import { OpenAI }      from "./pages/OpenAI/OpenAI";

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
        element: <CategoryComponent />,
      },
      {
        path: "/email",
        element: <EmailPage />,
      },
      {
        path: "/openai",
        element: <OpenAI />,
      },
    ] 
  },
]);


export default router;