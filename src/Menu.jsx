import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

/* =========================
   VEG IMAGES
========================= */

/* =========================
   VEG IMAGES
========================= */

const vegThaliImg =
  "/image/veg thali.jpg";

const paneerBiryaniImg =
  "/image/paneerBiryani.jpg";
const vegBurgerImg =
  "/image/burger.png";
/* =========================
   NONVEG IMAGES
========================= */

const chickenBiryaniImg =
  "/Nonveg/Chicken Biryani.jpg";
const chickenGrillImg =
  "/Nonveg/chickenGrill.jpg";

const muttonCurryImg =
  "/Nonveg/Mutton Curry.jpg";

/* =========================
   JUICES IMAGES
========================= */

const orangeJuiceImg =
  "/image/orange juice.jpg";

const mangoShakeImg =
  "/image/mango shake.jpg";

const watermelonJuiceImg =
  "/image/watermelon juice.jpg";

/* =========================
   DESSERTS IMAGES
========================= */

const chocolateCakeImg =
  "/image/Chocolate Cake.jpg";
const iceCreamImg =
  "/image/icecream.jpg";

const brownieImg =
  "/image/Brownie.jpg";

function Menu() {

  /* =========================
     CATEGORY STATE
  ========================= */

  const [activeCategory, setActiveCategory] =
    useState("veg");

  /* =========================
     FOOD DATA
  ========================= */

  const foodData = {

    veg: [

      {
        id: 1,
        name: "Veg Thali",
        price: 199,
        image: vegThaliImg,
        description:
          "Healthy Indian veg meals with curry and rice."
      },

      {
        id: 2,
        name: "Paneer Biryani",
        price: 249,
        image: paneerBiryaniImg,
        description:
          "Spicy paneer biryani served with raita."
      },

      {
        id: 3,
        name: "Veg Burger",
        price: 149,
        image: vegBurgerImg,
        description:
          "Loaded crispy veg burger with cheese."
      }

    ],

    nonveg: [

      {
        id: 1,
        name: "Chicken Biryani",
        price: 299,
        image: chickenBiryaniImg,
        description:
          "Hyderabad dum biryani with juicy chicken."
      },

      {
        id: 2,
        name: "Chicken Grill",
        price: 349,
        image: chickenGrillImg,
        description:
          "Smoky grilled chicken with spicy masala."
      },

      {
        id: 3,
        name: "Mutton Curry",
        price: 399,
        image: muttonCurryImg,
        description:
          "Traditional spicy mutton curry."
      }

    ],

    juices: [

      {
        id: 1,
        name: "Orange Juice",
        price: 99,
        image: orangeJuiceImg,
        description:
          "Fresh orange juice with ice."
      },

      {
        id: 2,
        name: "Mango Shake",
        price: 129,
        image: mangoShakeImg,
        description:
          "Creamy mango milkshake."
      },

      {
        id: 3,
        name: "Watermelon Juice",
        price: 89,
        image: watermelonJuiceImg,
        description:
          "Refreshing watermelon fresh juice."
      }

    ],

    desserts: [

      {
        id: 1,
        name: "Chocolate Cake",
        price: 149,
        image: chocolateCakeImg,
        description:
          "Rich chocolate cream cake."
      },

      {
        id: 2,
        name: "Ice Cream",
        price: 119,
        image: iceCreamImg,
        description:
          "Vanilla ice cream with toppings."
      },

      {
        id: 3,
        name: "Brownie",
        price: 159,
        image: brownieImg,
        description:
          "Hot chocolate brownie."
      }

    ]
  };

  /* =========================
     CURRENT ITEMS
  ========================= */

  const currentItems =
    foodData[activeCategory];

  return (

    <div className="menu-page">

      {/* =========================
          SIDEBAR
      ========================= */}

      <div className="menu-sidebar">

        <h1 className="sidebar-title">
          Food Hub
        </h1>

        {/* VEG */}

        <button
          className={
            activeCategory === "veg"
              ? "sidebar-btn active"
              : "sidebar-btn"
          }
          onClick={() =>
            setActiveCategory("veg")
          }
        >
          🥗 Veg
        </button>

        {/* NONVEG */}

        <button
          className={
            activeCategory === "nonveg"
              ? "sidebar-btn active"
              : "sidebar-btn"
          }
          onClick={() =>
            setActiveCategory("nonveg")
          }
        >
          🍗 Non-Veg
        </button>

        {/* JUICES */}

        <button
          className={
            activeCategory === "juices"
              ? "sidebar-btn active"
              : "sidebar-btn"
          }
          onClick={() =>
            setActiveCategory("juices")
          }
        >
          🥤 Juices
        </button>

        {/* DESSERTS */}

        <button
          className={
            activeCategory === "desserts"
              ? "sidebar-btn active"
              : "sidebar-btn"
          }
          onClick={() =>
            setActiveCategory("desserts")
          }
        >
          🍰 Desserts
        </button>

      </div>

      {/* =========================
          MENU CONTENT
      ========================= */}

      <div className="menu-content">

        <h1 className="menu-heading">

          🍽️ Food Hub
          <span> Menu</span>

        </h1>

        {/* =========================
            FOOD GRID
        ========================= */}

        <div className="menu-grid">

          {currentItems.map((item) => (

            <div
              key={item.id}
              className="menu-card"
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.name}
              />

              {/* BODY */}

              <div className="menu-card-body">

                <h2>
                  {item.name}
                </h2>

                <p>
                  {item.description}
                </p>

                <div className="food-price">
                  ₹ {item.price}
                </div>

                {/* BUTTON */}

                <Link

                  to={

                    activeCategory === "veg"
                      ? "/veg"

                    : activeCategory === "nonveg"
                      ? "/nonveg"

                    : activeCategory === "juices"
                      ? "/juices"

                    : "/desserts"
                  }

                  className="add-cart-btn"
                >

                  ✨ Explore More

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Menu;