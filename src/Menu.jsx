import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {

  return (

    <div className="menu-page">

      <h1>Explore Our Menu 🍴</h1>

      <div className="menu-grid">

        <Link to="/veg" className="menu-card">
          <h2>🥗 Veg</h2>
          <p>120+ Items</p>
        </Link>

        <Link to="/nonveg" className="menu-card">
          <h2>🍗 Non Veg</h2>
          <p>150+ Items</p>
        </Link>

        <Link to="/juices" className="menu-card">
          <h2>🧃 Juices</h2>
          <p>80+ Drinks</p>
        </Link>

        <Link to="/desserts" className="menu-card">
          <h2>🍰 Desserts</h2>
          <p>70+ Sweets</p>
        </Link>

      </div>

    </div>
  );
}

export default Menu;