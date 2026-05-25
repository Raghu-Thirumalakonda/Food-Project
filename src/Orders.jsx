import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { clearCart } from "./features/cartSlice";

import "./orders.css";

function Orders() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  /* LOCATION */

  const locationData = useLocation();

  // ================= CART =================

  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  // ================= ORDER HISTORY =================

  const [orderHistory, setOrderHistory] =
    useState([]);

  // ================= LOAD LOCAL STORAGE =================

  useEffect(() => {

    try {

      const savedOrders =

        JSON.parse(
          localStorage.getItem("orders")
        ) || [];

      setOrderHistory(savedOrders);

    } catch (error) {

      setOrderHistory([]);
    }

  }, []);

  // ================= AUTO ADD RESTAURANT ORDER =================

  useEffect(() => {

    if (
      locationData.state &&
      locationData.state.restaurant
    ) {

      const restaurant =
        locationData.state.restaurant;

      const newRestaurantOrder = {

        id: Date.now(),

        date:
          new Date().toLocaleString(),

        status: "Preparing",

        items: [

          {
            id: restaurant.id,

            name: restaurant.name,

            image: restaurant.image,

            quantity: 1,

            price:
              restaurant.price || 299,
          },

        ],

        total:
          restaurant.price || 299,
      };

      const updatedOrders = [

        newRestaurantOrder,

        ...orderHistory,
      ];

      localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
      );

      setOrderHistory(updatedOrders);

      navigate("/orders", {
        replace: true,
      });
    }

  }, []);

  // ================= TOTAL =================

  const total = cartItems.reduce(

    (sum, item) =>

      sum + item.price * item.quantity,

    0
  );

  // ================= CONFIRM ORDER =================

  const handleOrder = () => {

    if (cartItems.length === 0) return;

    const newOrder = {

      id: Date.now(),

      date:
        new Date().toLocaleString(),

      status: "Preparing",

      items: cartItems,

      total,
    };

    const updatedOrders = [

      newOrder,
      ...orderHistory,
    ];

    localStorage.setItem(

      "orders",

      JSON.stringify(updatedOrders)
    );

    setOrderHistory(updatedOrders);

    dispatch(clearCart());
  };

  return (

    <div className="orders-page">

      {/* ================= CURRENT ORDER ================= */}

      {cartItems.length > 0 && (

        <div className="current-order">

          <h1>
              Orders 🛍️
          </h1>

          <div className="orders-grid">

            {cartItems.map((item) => (

              <div
                className="food-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="food-img"
                />

                <div className="food-info">

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    Quantity:
                    {item.quantity}
                  </p>

                  <p>
                    Price:
                    ₹{item.price}
                  </p>

                  <h3>
                    ₹
                    {item.price *
                      item.quantity}
                  </h3>

                </div>

              </div>

            ))}

          </div>

          <div className="bottom-box">

            <h2>
              Total: ₹{total}
            </h2>

            <button
              className="confirm-btn"
              onClick={handleOrder}
            >

              Confirm Order 🎉

            </button>

          </div>

        </div>

      )}

      {/* ================= ORDER HISTORY ================= */}

      <div className="history-section">

        <h1>
          Your Orders 📦
        </h1>

        {orderHistory.length === 0 ? (

          <div className="empty-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt=""
            />

            <h2>
              No Orders Yet
            </h2>

            <button
              onClick={() =>
                navigate("/")
              }
            >

              Order Food 🍔

            </button>

          </div>

        ) : (

          orderHistory.map((order) => (

            <div
              className="history-card"
              key={order.id}
            >

              <div className="history-top">

                <div>

                  <h2>
                    Order #{order.id}
                  </h2>

                  <p>
                    {order.date}
                  </p>

                </div>

                <span className="status">

                  {order.status}

                </span>

              </div>

              {(order.items || []).map(

                (item, index) => (

                  <div
                    className="history-item"
                    key={index}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Qty:
                        {item.quantity}
                      </p>

                      <p>
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                )
              )}

              {/* TOTAL */}

              <div className="history-total">

                Total: ₹{order.total}

              </div>

              {/* ================= TRACKING ================= */}

              <div className="tracking-wrapper">

                <div className="tracking-line active-line"></div>

                {/* STEP 1 */}

                <div className="tracking-step active-step">

                  <div className="tracking-icon">
                    ✅
                  </div>

                  <h4>
                    Confirmed
                  </h4>

                </div>

                {/* STEP 2 */}

                <div className="tracking-step active-step">

                  <div className="tracking-icon">
                    🍳
                  </div>

                  <h4>
                    Preparing
                  </h4>

                </div>

                {/* STEP 3 */}

                <div className="tracking-step active-step">

                  <div className="tracking-icon">
                    🛵
                  </div>

                  <h4>
                    On The Way
                  </h4>

                </div>

                {/* STEP 4 */}

                <div className="tracking-step">

                  <div className="tracking-icon">
                    📦
                  </div>

                  <h4>
                    Delivered
                  </h4>

                </div>

              </div>

              {/* DELIVERY BIKE */}

              <div className="delivery-bike">

                🛵

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Orders;