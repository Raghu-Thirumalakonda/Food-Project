import {
  useParams,
  useNavigate,
} from "react-router-dom";

import "./OrderPage.css";

function OrderPage() {

  const { name } = useParams();

  const navigate = useNavigate();

  const restaurant = {

    id: Date.now(),

    name: name,

    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

    price: 299,
  };

  const placeOrder = () => {

    navigate("/orders", {

      state: {
        restaurant,
      },
    });
  };

  return (

    <div className="order-page">

      <div className="order-container">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="order-image"
        />

        <div className="order-content">

          <h1>
            🍴 {restaurant.name}
          </h1>

          <p>
            Delicious hot food delivered
            fast 🚚
          </p>

          <div className="order-details">

            <span>
              ⭐ 4.5 Rating
            </span>

            <span>
              ⏱ 25 mins
            </span>

            <span>
              🔥 Trending
            </span>

          </div>

          <h2 className="price">
            ₹{restaurant.price}
          </h2>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >

            Place Order 🍔

          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderPage;