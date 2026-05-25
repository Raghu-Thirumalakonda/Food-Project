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
import About from "./About";

import Veg from "./Veg";
import Desserts from "./Desserts";
import Cart from "./Cart";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register";
import Nonveg from "./Nonveg";
import Juices from "./juices";

/* ORDER PAGE */
import OrderPage from "./OrderPage";

function App() {

  const cartItems =
    useSelector(
      (state) => state?.cart?.cartItems ?? []
    );

  const totalQty =
    (cartItems || []).reduce(

      (t, item) =>
        t + (item?.quantity ?? 0),

      0
    );

  let user =
    JSON.parse(
      localStorage.getItem("loggedInUser")
    );

  let logout = () => {

    localStorage.removeItem(
      "loggedInUser"
    );

    window.location.reload();
  };

  /* LOCATION */

  const [location, setLocation] =
    useState("India");

  /* MOBILE MENU */

  const [mobileMenu, setMobileMenu] =
    useState(false);

  useEffect(() => {

    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition(

        async (position) => {

          const {
            latitude,
            longitude
          } = position.coords;

          try {

            const res = await fetch(

              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

            );

            const data =
              await res.json();

            const city =

              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state;

            setLocation(
              city || "India"
            );

          } catch (error) {

            setLocation("India");
          }
        },

        () => setLocation("India")
      );
    }

  }, []);

  return (

    <BrowserRouter>

      {/* TOAST */}

      <ToastContainer

        position="top-right"

        autoClose={2000}

        hideProgressBar={false}

        newestOnTop={true}

        closeOnClick={true}

        pauseOnFocusLoss={false}

        draggable={true}

        pauseOnHover={false}

        theme="light"
      />

      <div className="app-wrapper">

        {/* ================= NAVBAR ================= */}

        <header className="navbar">

          <div className="navbar-container">

            {/* LOGO */}

            <Link
              to="/"
              className="logo"
            >

              <FaUtensils
                className="logo-icon"
              />

              Food Hub

            </Link>

            {/* NAV LINKS */}

            <nav className="nav-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/menu">
                Menu
              </Link>

              <Link to="/offers">
                Offers
              </Link>

              <Link to="/restaurants">
                Restaurants
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/orders">
                Orders
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </nav>

            {/* RIGHT */}

            <div className="right">

              {/* LOCATION */}

              <div className="location">
                📍 {location}
              </div>

              {/* CART */}

              <Link
                to="/cart"
                className="cart"
              >

                🛒 Cart

                {totalQty > 0 && (

                  <span className="badge">
                    {totalQty}
                  </span>

                )}

              </Link>

              {/* AUTH */}

              <div className="auth">

                {user ? (

                  <>

                    <span className="username">
                      Hi, {user.name}
                    </span>

                    <button
                      onClick={logout}
                      className="logout-btn"
                    >
                      Logout
                    </button>

                  </>

                ) : (

                  <>

                    <Link
                      to="/login"
                      className="login-btn"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="register-btn"
                    >
                      Sign Up
                    </Link>

                  </>

                )}

              </div>

            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              className="menu-btn"
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
            >
              ☰
            </button>

          </div>

        </header>

        {/* ================= MOBILE SIDEBAR ================= */}

        {mobileMenu && (

          <div className="mobile-sidebar">

            {/* TOP */}

            <div className="sidebar-top">

              <div className="sidebar-logo">
                🍴 Food Hub
              </div>

              <button
                className="close-btn"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                ✕
              </button>

            </div>

            {/* LINKS */}

            <div className="mobile-sidebar-links">

              <Link
                to="/"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                🏠 Home
              </Link>

              <Link
                to="/menu"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                📖 Menu
              </Link>

              <Link
                to="/offers"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                🎟 Offers
              </Link>

              <Link
                to="/restaurants"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                🍽 Restaurants
              </Link>

              <Link
                to="/about"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                👨‍🍳 About Us
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                📞 Contact
              </Link>

              <Link
                to="/orders"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                📦 Orders
              </Link>

              {/* CART */}

              <Link
                to="/cart"
                className="cart"
                onClick={() =>
                  setMobileMenu(false)
                }
              >

                🛒 Cart

                {totalQty > 0 && (

                  <span className="badge">
                    {totalQty}
                  </span>

                )}

              </Link>

            </div>

            {/* LOCATION */}

            <div className="mobile-user">
              📍 {location}
            </div>

            {/* USER */}

            {user && (

              <div className="mobile-user">
                Hi, {user.name}
              </div>

            )}

            {/* AUTH */}

            {user ? (

              <button
                className="mobile-logout"
                onClick={logout}
              >
                Logout
              </button>

            ) : (

              <div className="mobile-auth">

                <Link
                  to="/login"
                  className="mobile-logout"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mobile-logout"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Sign Up
                </Link>

              </div>

            )}

          </div>

        )}

        {/* ================= PAGE ================= */}

        <main className="page-container">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/menu"
              element={<Menu />}
            />

            <Route
              path="/offers"
              element={<Offers />}
            />

            <Route
              path="/restaurants"
              element={<Restaurants />}
            />

            <Route
              path="/order/:name"
              element={<OrderPage />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/Contact"
              element={<Contact />}
            />

            <Route
              path="/veg"
              element={<Veg />}
            />

            <Route
              path="/nonveg"
              element={<Nonveg />}
            />

            <Route
              path="/juices"
              element={<Juices />}
            />

            <Route
              path="/desserts"
              element={<Desserts />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/orders"
              element={<Orders />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;