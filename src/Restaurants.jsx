import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./restaurants.css";

function Restaurants() {

  const navigate = useNavigate();

  const [city, setCity] =
    useState("Detecting...");

  const [restaurants, setRestaurants] =
    useState([]);

  /* ================= RESTAURANTS DATA ================= */

  const restaurantData = {

    Hyderabad: [

      {
        id: 1,

        name: "Paradise Biryani",

        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

        rating: "4.8 ⭐",

        time: "25 mins 🚚",

        foods: "Biryani, Kebabs",

        offer: "50% OFF 🔥",

        price: 299,
      },

      {
        id: 2,

        name: "Bawarchi",

        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",

        rating: "4.6 ⭐",

        time: "20 mins 🚚",

        foods: "Mandi, Chicken",

        offer: "Free Coke 🥤",

        price: 249,
      },

      {
        id: 3,

        name: "Shah Ghouse",

        image:
          "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",

        rating: "4.7 ⭐",

        time: "18 mins 🚚",

        foods: "Chicken, Biryani",

        offer: "40% OFF 🍗",

        price: 329,
      },

      {
        id: 4,

        name: "Pista House",

        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",

        rating: "4.5 ⭐",

        time: "30 mins 🚚",

        foods: "Haleem, Pizza",

        offer: "Flat ₹100 OFF 💸",

        price: 199,
      },

    ],

    Bangalore: [

      {
        id: 5,

        name: "Meghana Foods",

        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",

        rating: "4.8 ⭐",

        time: "24 mins 🚚",

        foods: "Andhra Meals",

        offer: "Special Combo 🍛",

        price: 289,
      },

      {
        id: 6,

        name: "Empire Restaurant",

        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",

        rating: "4.4 ⭐",

        time: "26 mins 🚚",

        foods: "Shawarma, Biryani",

        offer: "30% OFF 🔥",

        price: 239,
      },

    ],

    Chennai: [

      {
        id: 7,

        name: "Anjappar",

        image:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop",

        rating: "4.5 ⭐",

        time: "22 mins 🚚",

        foods: "Chettinad Meals",

        offer: "20% OFF 🍛",

        price: 269,
      },

      {
        id: 8,

        name: "BBQ Nation",

        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop",

        rating: "4.9 ⭐",

        time: "35 mins 🚚",

        foods: "Barbecue, Grill",

        offer: "Unlimited Buffet 🔥",

        price: 499,
      },

    ],

    Mumbai: [

      {
        id: 9,

        name: "Leopold Cafe",

        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",

        rating: "4.6 ⭐",

        time: "28 mins 🚚",

        foods: "Cafe, Pizza",

        offer: "25% OFF ☕",

        price: 349,
      },

      {
        id: 10,

        name: "Bademiya",

        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",

        rating: "4.7 ⭐",

        time: "20 mins 🚚",

        foods: "Rolls, Kebabs",

        offer: "Free Drink 🥤",

        price: 279,
      },

    ],

  };

  /* ================= CITY MAPPING FIX ================= */

  const detectCity = (apiCity) => {

    if (!apiCity) return "Unknown";

    const lower = apiCity.toLowerCase();

    if (lower.includes("hyderabad"))
      return "Hyderabad";

    if (
      lower.includes("bangalore") ||
      lower.includes("bengaluru")
    )
      return "Bangalore";

    if (lower.includes("chennai"))
      return "Chennai";

    if (lower.includes("mumbai"))
      return "Mumbai";

    return "Unknown";
  };

  /* ================= GET LOCATION ================= */

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        try {

          const res = await fetch(

            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`

          );

          const data =
            await res.json();

          const apiCity =

            data.address.city ||

            data.address.state_district ||

            data.address.town;

          const finalCity =
            detectCity(apiCity);

          setCity(finalCity);

          if (
            restaurantData[finalCity]
          ) {

            setRestaurants(
              restaurantData[finalCity]
            );

          } else {

            setRestaurants(
              restaurantData["Hyderabad"]
            );
          }

        } catch (error) {

          console.log(error);
        }

      },

      () => {

        alert(
          "Location permission denied"
        );
      }

    );

  }, []);

  /* ================= UI ================= */

  return (

    <div className="restaurants-page">

      <div className="restaurants-header">

        <h1>
          Restaurants Near {city} 📍
        </h1>

        <p>
          Delicious food delivered
          fast to your home 🚚
        </p>

      </div>

      <div className="restaurant-grid">

        {restaurants.map((item) => (

          <div
            className="restaurant-card"
            key={item.id}
          >

            <div className="restaurant-image-box">

              <img
                src={item.image}
                alt={item.name}
                className="restaurant-image"
              />

              <div className="restaurant-offer">

                {item.offer}

              </div>

            </div>

            <div className="restaurant-info">

              <h2>
                {item.name}
              </h2>

              <div className="restaurant-details">

                <span>
                  {item.rating}
                </span>

                <span>
                  {item.time}
                </span>

              </div>

              <p className="restaurant-foods">

                🍽 {item.foods}

              </p>

              <h3 className="restaurant-price">

                ₹{item.price}

              </h3>

              <button

                className="order-btn"

                onClick={() =>

                  navigate(

                    `/order/${item.name}`
                  )

                }

              >

                Order Now 🍴

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Restaurants;