import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav style={{ padding: "20px", background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/posts" style={{ color: "white", marginRight: "20px" }}>
          Posts
        </Link>

        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;