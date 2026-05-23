import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { FaUtensils } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Pages */
import Home from "./Home";
import Menu from "./Menu";
import Offers from "./Offers";
import Restaurants from "./Restaurants";
import Contact from "./Contact";

import Veg from "./Veg";

import Desserts from "./Desserts";

import Cart from "./Cart";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register";
import Nonveg from "./Nonveg";

import juices from "./juices";

function App() {
  // ✅ FIXED ONLY THIS LINE (IMPORTANT)
  const cartItems = useSelector((state) => state?.cart?.cartItems ?? []);

  const totalQty = (cartItems || []).reduce(
    (t, item) => t + (item?.quantity ?? 0),
    0,
  );

  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  let logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  /* ================= LOCATION ADDED ================= */
  const [location, setLocation] = useState("India");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );

            const data = await res.json();

            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state;

            setLocation(city || "India");
          } catch (error) {
            setLocation("India");
          }
        },
        (error) => {
          setLocation("India");
        },
      );
    }
  }, []);

  /* ================= LOCATION END ================= */

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="app-wrapper">
        {/* ================= NAVBAR ================= */}
        <header className="navbar">
          <div className="navbar-container">
            <Link to="/" className="logo">
              <FaUtensils className="logo-icon" />
              Food Hub
            </Link>

            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/offers">Offers</Link>
              <Link to="/restaurants">Restaurants</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="right">
              <div className="location">📍 {location}</div>

              <Link to="/cart" className="cart">
                🛒 Cart
                <span className="badge">{totalQty}</span>
              </Link>

              <div className="auth">
                {user ? (
                  <>
                    <span>Hi, {user.name}</span>
                    <button onClick={logout} className="logout-btn">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="login-btn">
                    Login
                  </Link>
                )}
              </div>

              <Link to="/register" className="register-btn">
                Register
              </Link>
            </div>
          </div>
        </header>

        {/* ================= PAGE ================= */}
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<Nonveg />} />
            <Route path="/juices" element={<juices />} />
            <Route path="/desserts" element={<Desserts />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
