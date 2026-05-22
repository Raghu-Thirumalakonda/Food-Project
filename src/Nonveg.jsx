import { useState } from "react";
import "./nonveg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cartSlice";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

function Nonveg() {

  const dispatch = useDispatch();

  const [nonVegCurrentPage, setNonVegCurrentPage] =
    useState(1);

  const nonVegItemsPerPage = 8;

  const nonVegFoodItems = [

    { id: "nonveg-1", name: "Butter Chicken", price: 220, image: "/Nonveg/Butter Chicken.jpg", description: "Creamy buttery chicken curry." },

    { id: "nonveg-2", name: "Chicken 65", price: 200, image: "/Nonveg/Chicken 65.jpg", description: "Spicy crispy chicken bites." },

    { id: "nonveg-3", name: "Chicken Biryani", price: 200, image: "/Nonveg/Chicken Biryani.jpg", description: "Fragrant spicy chicken rice." },

    { id: "nonveg-4", name: "Chicken Fried Rice", price: 180, image: "/Nonveg/Chicken Fried Rice.jpg", description: "Rice tossed with chicken." },

    { id: "nonveg-5", name: "Chicken Kebab", price: 210, image: "/Nonveg/Chicken Kebab.jpg", description: "Smoky grilled chicken kebabs." },

    { id: "nonveg-6", name: "Chicken Noodles", price: 170, image: "/Nonveg/Chicken Noodles.jpg", description: "Spicy chicken noodles." },

    { id: "nonveg-7", name: "Chicken Tikka", price: 230, image: "/Nonveg/Chicken Tikka.jpg", description: "Char-grilled chicken pieces." },

    { id: "nonveg-8", name: "Chicken Curry", price: 190, image: "/Nonveg/Chicken Curry.jpg", description: "Traditional spicy curry." },

    { id: "nonveg-9", name: "Crab Curry", price: 260, image: "/Nonveg/Crab Curry.jpg", description: "Spicy coastal crab curry." },

    { id: "nonveg-10", name: "Egg Curry", price: 150, image: "/Nonveg/Egg Curry.jpg", description: "Boiled eggs in curry." },

    { id: "nonveg-11", name: "Egg Fried Rice", price: 160, image: "/Nonveg/Egg Fried Rice.jpg", description: "Rice with scrambled egg." },

    { id: "nonveg-12", name: "Fish Curry", price: 240, image: "/Nonveg/Fish Curry.jpg", description: "Tangy fish curry." },

    { id: "nonveg-13", name: "Fish Fry", price: 220, image: "/Nonveg/Fish Fry.jpg", description: "Crispy fried fish." },

    { id: "nonveg-14", name: "Grilled Chicken", price: 250, image: "/Nonveg/Grilled Chicken.jpg", description: "Healthy grilled chicken." },

    { id: "nonveg-15", name: "Mutton Biryani", price: 280, image: "/Nonveg/Mutton Biryani.jpg", description: "Rich mutton biryani." },

    { id: "nonveg-16", name: "Mutton Curry", price: 270, image: "/Nonveg/Mutton Curry.jpg", description: "Spicy mutton gravy." },

    { id: "nonveg-17", name: "Mutton Keema", price: 260, image: "/Nonveg/Mutton Keema.jpg", description: "Minced mutton curry." },

    { id: "nonveg-18", name: "Prawn Biryani", price: 300, image: "/Nonveg/Prawn Biryani.jpg", description: "Seafood spicy rice." },

    { id: "nonveg-19", name: "Prawn Masala", price: 290, image: "/Nonveg/Prawn Masala.jpg", description: "Spicy prawn curry." },

    { id: "nonveg-20", name: "Tandoori Chicken", price: 240, image: "/Nonveg/Tandoori Chicken.jpg", description: "Smoky tandoori chicken." }

  ];

  const nonVegTotalPages = Math.ceil(
    nonVegFoodItems.length /
    nonVegItemsPerPage
  );

  const nonVegCurrentItems =
    nonVegFoodItems.slice(
      (nonVegCurrentPage - 1) *
      nonVegItemsPerPage,

      nonVegCurrentPage *
      nonVegItemsPerPage
    );

  return (

    <div className="nonveg-page-wrapper">

      <Sidebar />

      <div className="nonveg-main-section">

        <h1 className="nonveg-heading-title">
          Non-Veg Items 🍗
        </h1>

        <div className="nonveg-food-grid">

          {nonVegCurrentItems.map((item) => (

            <div
              className="nonveg-food-card"
              key={item.id}
            >

              {/* BADGES */}

              <div className="nonveg-badge-wrapper">

  <span className="nonveg-badge-label">
    NON-VEG
  </span>

  <span className="nonveg-off-badge">
    30% OFF
  </span>

</div>

              {/* IMAGE */}

              <img
                className="nonveg-food-image"
                src={item.image}
                alt={item.name}
              />

              {/* NAME */}

              <h3 className="nonveg-food-name">
                {item.name}
              </h3>

              {/* DESCRIPTION */}

              <p className="nonveg-food-description">
                {item.description}
              </p>

              {/* PRICE */}

              <p className="nonveg-food-price">
                ₹{item.price}
              </p>

              {/* BUTTON */}

              <button
                className="nonveg-cart-button"

                onClick={() => {

                  dispatch(
                    addToCart({
                      ...item,
                      quantity: 1,
                    })
                  );

                  toast.success(
                    `${item.name} added to cart 🛒`,
                    {
                      position: "top-right",
                    }
                  );

                }}
              >
                Add to Cart 🛒
              </button>

            </div>

          ))}

        </div>

        {/* PAGINATION */}

        <div className="nonveg-pagination-wrapper">

          <button
            className="nonveg-pagination-btn"

            onClick={() =>
              setNonVegCurrentPage((p) => p - 1)
            }

            disabled={
              nonVegCurrentPage === 1
            }
          >
            Prev
          </button>

          {Array.from(
            { length: nonVegTotalPages },

            (_, i) => (

              <button
                key={i}

                onClick={() =>
                  setNonVegCurrentPage(i + 1)
                }

                className={
                  nonVegCurrentPage === i + 1
                    ? "nonveg-pagination-btn active-nonveg-page"
                    : "nonveg-pagination-btn"
                }
              >
                {i + 1}
              </button>

            )
          )}

          <button
            className="nonveg-pagination-btn"

            onClick={() =>
              setNonVegCurrentPage((p) => p + 1)
            }

            disabled={
              nonVegCurrentPage ===
              nonVegTotalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Nonveg;