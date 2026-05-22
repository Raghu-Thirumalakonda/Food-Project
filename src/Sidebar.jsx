import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">

      <h2>🍽 Categories</h2>

      <Link
        to="/veg"
        className={location.pathname === "/veg" ? "active" : ""}
      >
        Veg
      </Link>

      <Link
        to="/nonveg"
        className={location.pathname === "/nonveg" ? "active" : ""}
      >
        Non Veg
      </Link>

      <Link
        to="/juices"
        className={location.pathname === "/juices" ? "active" : ""}
      >
        Juices
      </Link>

      <Link
        to="/desserts"
        className={location.pathname === "/desserts" ? "active" : ""}
      >
        Desserts
      </Link>

    </div>
  );
}

export default Sidebar;