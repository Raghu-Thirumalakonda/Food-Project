import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./features/cartSlice";
import "./orders.css";

function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart || []);

  const [isOrdered, setIsOrdered] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 👉 CONFIRM ORDER
  const handleOrder = () => {
    setIsOrdered(true);
    dispatch(clearCart());
  };

  return (
    <div className="orders-page">

      {/* ================= BEFORE ORDER ================= */}
      {!isOrdered ? (
        <>
          <h1>🧾 Final Order</h1>

          {cartItems.length === 0 ? (
            <div>
              <p>No items in cart</p>

              <button onClick={() => navigate("/")}>
                Go Shopping
              </button>
            </div>
          ) : (
            <div className="orders-container">

              {cartItems.map((item) => (
                <div className="order-card" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              ))}

              <h2 className="grand-total">
                Grand Total: ₹{total}
              </h2>

              <button
                className="pay-btn"
                onClick={handleOrder}
              >
                Confirm Order 🎉
              </button>

            </div>
          )}
        </>
      ) : (
        /* ================= AFTER ORDER SUCCESS ================= */
        <div className="success-box">

          <h1>🎉 Order Placed Successfully!</h1>

          <p>Your food is being prepared 🍽️</p>

          <div className="order-info">
            <h3>Order ID: #{Math.floor(Math.random() * 1000000)}</h3>
            <p>Status: 🟡 Preparing</p>
          </div>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Go to Home 🏠
          </button>

        </div>
      )}

    </div>
  );
}

export default Orders;