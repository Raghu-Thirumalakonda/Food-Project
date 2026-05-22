import "./offers.css";

function Offers() {

  return (

    <div className="offers-page">

      <h1>🔥 Today's Best Offers</h1>

      <div className="offers-container">

        <div className="offer-card">
          <h2>50% OFF</h2>
          <p>On First Order</p>
        </div>

        <div className="offer-card">
          <h2>Free Delivery 🚚</h2>
          <p>Above ₹299</p>
        </div>

        <div className="offer-card">
          <h2>Combo Meals 🍔</h2>
          <p>Starting ₹199</p>
        </div>

      </div>

    </div>
  );
}

export default Offers;