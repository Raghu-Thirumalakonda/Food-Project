import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./restaurants.css";

function Restaurants() {

  const navigate = useNavigate();

  const [city, setCity] = useState("Detecting...");
  const [restaurants, setRestaurants] = useState([]);

  /* ================= RESTAURANTS DATA ================= */

  const restaurantData = {
    Hyderabad: [
      "Paradise Biryani",
      "Bawarchi",
      "Shah Ghouse",
      "Pista House"
    ],

    Bangalore: [
      "Meghana Foods",
      "Empire Restaurant",
      "Truffles",
      "Burger Seigneur"
    ],

    Chennai: [
      "Anjappar",
      "A2B",
      "BBQ Nation",
      "Palmshore"
    ],

    Mumbai: [
      "Leopold Cafe",
      "Bademiya",
      "Pizza By The Bay",
      "Britannia"
    ]
  };

  /* ================= CITY MAPPING FIX ================= */

  const detectCity = (apiCity) => {

    if (!apiCity) return "Unknown";

    const lower = apiCity.toLowerCase();

    if (lower.includes("hyderabad")) return "Hyderabad";
    if (lower.includes("bangalore") || lower.includes("bengaluru")) return "Bangalore";
    if (lower.includes("chennai")) return "Chennai";
    if (lower.includes("mumbai")) return "Mumbai";

    return "Unknown";
  };

  /* ================= GET LOCATION ================= */

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );

          const data = await res.json();

          const apiCity =
            data.address.city ||
            data.address.state_district ||
            data.address.town;

          const finalCity = detectCity(apiCity);

          setCity(finalCity);

          if (restaurantData[finalCity]) {
            setRestaurants(restaurantData[finalCity]);
          } else {
            setRestaurants([
              "Food Hub Restaurant",
              "Delicious Kitchen",
              "Tasty Point"
            ]);
          }

        } catch (error) {
          console.log(error);
        }

      },

      () => {
        alert("Location permission denied");
      }

    );

  }, []);

  /* ================= UI ================= */

  return (
    <div className="restaurants-page">

      <h1>Restaurants Near {city} 📍</h1>

      <div className="restaurant-grid">

        {restaurants.map((item, index) => (

          <div className="restaurant-card" key={index}>

            <h2>{item}</h2>

            <p>⭐ {4 + (index % 1)} Rating</p>

            {/* ✅ FIXED ORDER BUTTON */}
            <button
              onClick={() => navigate(`/order/${item}`)}
            >
              Order Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Restaurants;