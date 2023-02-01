import { Link, Outlet } from "react-router-dom";
import "./AdminTemplate.scss";

export function AdminTemplate() {
  return <div>
    <nav className="TopBar">
      <span className="Title">
      <Link to="/App">MS600-APP</Link>
      </span>

      <ul className="Nav">
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/Email">Email</Link></li>
        <li><Link to="/Token">Token</Link></li>
        <li><Link to="/OpenAI">Open AI</Link></li>
      </ul>
    </nav>

    <Outlet />
  </div>
}