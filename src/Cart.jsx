import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  removeCart,
  clearCart,
  incrementQty,
  decrementQty,
} from "./features/cartSlice";

import {
  applyCupon,
  resetCoupon,
} from "./features/cuponSlice";

import "./Cart.css";

/* ✅ Toastify */
import { toast } from "react-toastify";

/* ✅ Confetti */
import confetti from "canvas-confetti";

/* ✅ Sweet Alert */
import Swal from "sweetalert2";

/* ✅ EMAILJS */
import emailjs from "@emailjs/browser";

/* ✅ QR CODE */
import { QRCode } from "react-qr-code";

function Cart() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // ================= CART =================

  const cartItems =
    useSelector((state) => state.cart || []);

  // ================= COUPON =================

  const [cupon, setCupon] = useState("");

  // ================= PAYMENT =================

  const [paymentMethod, setPaymentMethod] =
    useState("");

  // ================= EMAIL =================

  const [customerEmail, setCustomerEmail] =
    useState("");

  // ================= DISCOUNT =================

  const [selectedDiscount, setSelectedDiscount] =
    useState(10);

  const {
    code,
    discount,
    applied,
    message,
  } = useSelector(
    (state) => state.cuponDetails
  );

  // ================= TOTAL PRICE =================

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // ================= NORMAL DISCOUNT =================

  const normalDiscount =
    (totalPrice * selectedDiscount) / 100;

  const afterDiscount =
    totalPrice - normalDiscount;

  // ================= COUPON DISCOUNT =================

  const couponDiscountAmount =
    (afterDiscount * discount) / 100;

  const finalAmountAfterCoupon =
    afterDiscount - couponDiscountAmount;

  // ================= TAX =================

  const tax = finalAmountAfterCoupon * 0.18;

  // ================= DELIVERY =================

  const deliveryFee =
    finalAmountAfterCoupon > 0 ? 40 : 0;

  // ================= FINAL TOTAL =================

  const finalTotal =
    finalAmountAfterCoupon +
    tax +
    deliveryFee;

  // ================= HANDLE CHECKOUT =================

  const handleCheckout = () => {

    if (!customerEmail) {

      toast.error(
        "Please Enter Email"
      );

      return;
    }

    const templateParams = {

      order_id:
        "ORDER-" +
        Math.floor(
          Math.random() * 100000
        ),

      orders: cartItems.map(
        (item) => ({
          name: item.name,

          price: (
            item.price *
            item.quantity
          ).toFixed(2),

          units: item.quantity,
        })
      ),

      cost: {

        shipping:50,

        tax: tax.toFixed(2),

        total:
          finalTotal.toFixed(2),
      },

      email: customerEmail,
    };

    emailjs.send(

      "service_w1dbaxs",

      "template_cyqrsjb",

      templateParams,

      "SU4bbBhAdBdECqcAD"
    )

    .then(() => {

      toast.success(
        "Order Email Sent ✅"
      );

      confetti({
        particleCount: 300,
        spread: 150,
      });

      navigate("/orders", {
        state: {
          orders: cartItems,
        },
      });

    })

    .catch((error) => {

      console.log(error);

      toast.error(
        "Email Failed ❌"
      );

    });

  };

  return (

    <div className="cart-container">

      {/* ================= LEFT ================= */}

      <div className="cart-left">

        <div className="cart-header">

          <h1>Your Cart 🛒</h1>

          <button
            type="button"
            className="clear-btn"

            onClick={() => {

              Swal.fire({

                title: "Are you sure?",

                text: "All cart items will be removed!",

                icon: "warning",

                showCancelButton: true,

                confirmButtonColor: "#ef4444",

                cancelButtonColor: "#3085d6",

                confirmButtonText:
                  "Yes, Remove",

                cancelButtonText:
                  "Cancel",

              }).then((result) => {

                if (result.isConfirmed) {

                  dispatch(clearCart());

                  dispatch(resetCoupon());

                  toast.error(
                    "All cart items removed 🗑️"
                  );

                }

              });

            }}
          >
            Clear Cart
          </button>

        </div>

        {/* ================= EMPTY ================= */}

        {cartItems.length === 0 ? (

          <h3 className="empty">
            Your Cart is Empty
          </h3>

        ) : (

          cartItems.map((item) => (

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h2>{item.name}</h2>

                <p className="price">
                  ₹{item.price}
                </p>

                {/* ================= QUANTITY ================= */}

                <div className="qty-box">

                  <button
                    type="button"
                    onClick={() => {

                      dispatch(
                        decrementQty(item.id)
                      );

                    }}
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => {

                      dispatch(
                        incrementQty(item.id)
                      );

                    }}
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                type="button"
                className="remove-btn"

                onClick={() => {

                  dispatch(
                    removeCart(item.id)
                  );

                }}
              >
                Remove
              </button>

            </div>

          ))

        )}

      </div>

      {/* ================= RIGHT ================= */}

      <div className="cart-right">

        <h2>Order Summary</h2>

        {/* ================= DISCOUNT BUTTONS ================= */}

        <div className="discount-buttons">

          <button
            type="button"
            className={
              selectedDiscount === 10
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedDiscount(10)
            }
          >
            10%
          </button>

          <button
            type="button"
            className={
              selectedDiscount === 20
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedDiscount(20)
            }
          >
            20%
          </button>

          <button
            type="button"
            className={
              selectedDiscount === 30
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedDiscount(30)
            }
          >
            30%
          </button>

        </div>

        {/* ================= COUPON ================= */}

        <div className="coupon-box">

          <input
            type="text"

            placeholder="Enter Coupon"

            value={cupon}

            onChange={(e) =>
              setCupon(e.target.value)
            }

            className="coupon-input"
          />

          <button
            type="button"
            className="apply-btn"

            disabled={applied}

            onClick={() => {

              dispatch(
                applyCupon(cupon)
              );

            }}
          >
            Apply Coupon
          </button>

        </div>

        {/* ================= MESSAGE ================= */}

        {message && (

          <h3
            style={{
              color:
                applied
                  ? "green"
                  : "red",
            }}
          >
            {message}
          </h3>

        )}

        {/* ================= SUMMARY ================= */}

        <div className="summary-box">

          <div className="row">

            <span>Total Price</span>

            <span>
              ₹{totalPrice.toFixed(2)}
            </span>

          </div>

          <div className="row discount">

            <span>
              Discount ({selectedDiscount}%)
            </span>

            <span>
              - ₹{normalDiscount.toFixed(2)}
            </span>

          </div>

          <div className="row">

            <span>After Discount</span>

            <span>
              ₹{afterDiscount.toFixed(2)}
            </span>

          </div>

          {applied && (

            <>

              <div className="row">

                <span>Coupon</span>

                <span>{code}</span>

              </div>

              <div className="row discount">

                <span>
                  Coupon Discount ({discount}%)
                </span>

                <span>
                  - ₹
                  {couponDiscountAmount.toFixed(2)}
                </span>

              </div>

            </>

          )}

          <div className="row">

            <span>Tax (18%)</span>

            <span>
              ₹{tax.toFixed(2)}
            </span>

          </div>

          <div className="row">

            <span>Delivery Fee</span>

            <span>
              ₹{deliveryFee}
            </span>

          </div>

          <hr />

          <div className="row total">

            <span>Payable Amount</span>

            <span>
              ₹{finalTotal.toFixed(2)}
            </span>

          </div>

          {/* ================= EMAIL ================= */}

          <div className="email-box">

            <label>
              📧 Enter Email
            </label>

            <input
              type="email"

              value={customerEmail}

              onChange={(e) =>
                setCustomerEmail(
                  e.target.value
                )
              }

              placeholder="you@gmail.com"

              className="email-input"
            />

          </div>

          {/* ================= PAYMENT METHOD ================= */}

          <div className="payment-method">

            <h3>Select Payment Method 💳</h3>

            <div className="payment-buttons">

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("qr")
                }
              >
                📱 QR Code
              </button>

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("card")
                }
              >
                💳 Card
              </button>

            </div>

          </div>

          {/* ================= QR SECTION ================= */}

          {paymentMethod === "qr" && (

            <div className="qr-section">

              <h3>
                Scan QR To Pay ₹
                {finalTotal.toFixed(2)}
              </h3>

              <div className="qr-box">

                <QRCode
                  value={`upi://pay?pa=8374075410-2@ybl&pn=RaghuStore&am=${finalTotal.toFixed(
                    2
                  )}&cu=INR`}
                  size={220}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                />

              </div>

              <p>
                UPI ID:
                8374075410-2@ybl
              </p>

            </div>

          )}

          {/* ================= CARD SECTION ================= */}

          {paymentMethod === "card" && (

            <div className="card-payment">

              <h3>
                💳 Card Payment Coming Soon
              </h3>

            </div>

          )}

          {/* ================= REMOVE COUPON ================= */}

          {applied && (

            <button
              type="button"
              className="remove-coupon-btn"

              onClick={() => {

                dispatch(resetCoupon());

              }}
            >
              Remove Coupon
            </button>

          )}

          {/* ================= PLACE ORDER ================= */}

          <button
            type="button"

            className="checkout-btn"

            onClick={handleCheckout}
          >
            Checkout & Send Email 📧
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;