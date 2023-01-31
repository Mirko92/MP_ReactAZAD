import { Link, Outlet } from "react-router-dom";
import "./AdminTemplate.scss";

export function AdminTemplate() {
  return <div>
    <nav className="TopBar">
      <span className="Title">
      <Link to="/">MS600-APP</Link>
      </span>

      <ul className="Nav">
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/App">App</Link></li>
      </ul>
    </nav>

    <Outlet />
  </div>
}