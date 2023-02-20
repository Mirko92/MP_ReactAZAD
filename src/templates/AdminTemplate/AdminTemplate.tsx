import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { PrimaryButton } from "@fluentui/react";
import { Link, Outlet } from "react-router-dom";
import "./AdminTemplate.scss";

export function AdminTemplate() {
  return <div className="wrapper">
  {
    /*
      <aside className="left-menu">
        <Link to="/App">
          <h2>MS600</h2>
        </Link>

        <ul>
          <li><Link to="/Categories">Categories</Link></li>
          <li><Link to="/Email">Email</Link></li>
          <li><Link to="/Token">Token</Link></li>
          <li><Link to="/OpenAI">Open AI</Link></li>
        </ul>
      </aside> 
    */
  }

  <div className="body-wrapper">
    <header className="topbar">
      <div>
        <Link to="/App">
          <h2>MS600</h2>
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/Categories">Categories</Link></li>
          <li><Link to="/Email">Email</Link></li>
          <li><Link to="/Token">Token</Link></li>
          <li><Link to="/OpenAI">Open AI</Link></li>
        </ul>
      </nav>

      <div>
        <AuthenticatedTemplate>
          <PrimaryButton text="Logout"/>
        </AuthenticatedTemplate>
        
        <UnauthenticatedTemplate>
          <PrimaryButton text="Login"/>
        </UnauthenticatedTemplate>
      </div>
    </header>

    <main>
      <Outlet />
    </main>
  </div>
</div>
}