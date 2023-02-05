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
      <nav>
        <ul>
          <li><Link to="/Categories">Categories</Link></li>
          <li><Link to="/Email">Email</Link></li>
          <li><Link to="/Token">Token</Link></li>
          <li><Link to="/OpenAI">Open AI</Link></li>
        </ul>
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
  </div>
</div>
}