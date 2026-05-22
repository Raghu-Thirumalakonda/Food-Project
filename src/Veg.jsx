import { useState } from "react";
import "./veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cartSlice";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

function Veg() {

  const dispatch = useDispatch();

  const [vegCurrentPage, setVegCurrentPage] =
    useState(1);

  const vegItemsPerPage = 8;

  const vegFoodItems = [

    { id: "veg-1", name: "Aloo Gobi", price: 110, image: "/image/allu gopi.jpg", description: "Potato & cauliflower curry with spices." },

    { id: "veg-2", name: "Baingan Bharta", price: 120, image: "/image/Baingan Bharta.jpg", description: "Smoky mashed brinjal with onion & tomato." },

    { id: "veg-3", name: "Veg Biryani", price: 150, image: "/image/veg biryani.jpg", description: "Fragrant rice with mixed veggies." },

    { id: "veg-4", name: "Chole Bhature", price: 140, image: "/image/chole battori.jpg", description: "Spicy chickpeas with fluffy bread." },

    { id: "veg-5", name: "Corn Masala", price: 120, image: "/image/Corn Masala.jpg", description: "Sweet corn in spicy creamy gravy." },

    { id: "veg-6", name: "Curd Rice", price: 90, image: "/image/Curd Rice.jpg", description: "Cooling rice with curd tempering." },

    { id: "veg-7", name: "Dal Tadka", price: 120, image: "/image/dall.jpg", description: "Yellow lentils with garlic tempering." },

    { id: "veg-8", name: "Kadai Paneer", price: 190, image: "/image/Kadai Paneer.jpg", description: "Paneer in spicy masala gravy." },

    { id: "veg-9", name: "Malai Kofta", price: 200, image: "/image/Malai Kofta.jpg", description: "Soft paneer balls in creamy gravy." },

    { id: "veg-10", name: "Mix Veg Curry", price: 125, image: "/image/Mix Veg Curry.jpg", description: "Mixed vegetables in tasty curry." },

    { id: "veg-11", name: "Mushroom Masala", price: 160, image: "/image/Mushroom Masala.jpg", description: "Juicy mushrooms in spicy gravy." },

    { id: "veg-12", name: "Palak Paneer", price: 170, image: "/image/palak panner.jpg", description: "Paneer in spinach gravy." },

    { id: "veg-13", name: "Paneer Tikka", price: 210, image: "/image/Paneer Tikka.jpg", description: "Grilled paneer with smoky flavor." },

    { id: "veg-14", name: "Rajma Chawal", price: 130, image: "/image/Rajma Chawal.jpg", description: "Kidney beans with steamed rice." },

    { id: "veg-15", name: "Sambar Rice", price: 110, image: "/image/Sambar Rice.jpg", description: "South Indian rice with sambar." },

    { id: "veg-16", name: "Veg Fried Rice", price: 135, image: "/image/Veg Fried Rice.jpg", description: "Stir-fried rice with vegetables." },

    { id: "veg-17", name: "Veg Cutlet", price: 100, image: "/image/Vegetable Cutlet.jpg", description: "Crispy veg patties snack." },

    { id: "veg-18", name: "Veg Noodles", price: 130, image: "/image/Vegetable Noodles.jpg", description: "Stir-fried noodles with veggies." },

    { id: "veg-19", name: "Veg Pulao", price: 140, image: "/image/Vegetable Pulao.webp", description: "Fragrant rice with vegetables." },

    { id: "veg-20", name: "Paneer Butter Masala", price: 180, image: "/image/paneer butter masala.jpg", description: "Creamy buttery paneer curry." }

  ];

  const vegTotalPages = Math.ceil(
    vegFoodItems.length /
    vegItemsPerPage
  );

  const vegLastIndex =
    vegCurrentPage *
    vegItemsPerPage;

  const vegFirstIndex =
    vegLastIndex -
    vegItemsPerPage;

  const vegCurrentItems =
    vegFoodItems.slice(
      vegFirstIndex,
      vegLastIndex
    );

  return (

    <div className="veg-page-wrapper">

      <Sidebar />

      <div className="veg-main-section">

        <h1 className="veg-heading-title">
          Veg Items 🥦
        </h1>

        <div className="veg-food-grid">

          {vegCurrentItems.map((item) => (

            <div
              className="veg-food-card"
              key={item.id}
            >

              {/* BADGES */}

              <div className="veg-badge-wrapper">

                <span className="veg-type-badge">
                  VEG
                </span>

                <span className="veg-off-badge">
                  25% OFF
                </span>

              </div>

              {/* IMAGE */}

              <img
                className="veg-food-image"
                src={item.image}
                alt={item.name}
              />

              {/* NAME */}

              <h3 className="veg-food-name">
                {item.name}
              </h3>

              {/* DESCRIPTION */}

              <p className="veg-food-description">
                {item.description}
              </p>

              {/* PRICE */}

              <p className="veg-food-price">
                ₹{item.price}
              </p>

              {/* BUTTON */}

              <button
                className="veg-cart-button"

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

        <div className="veg-pagination-wrapper">

          <button
            className="veg-pagination-btn"

            onClick={() =>
              setVegCurrentPage((p) => p - 1)
            }

            disabled={
              vegCurrentPage === 1
            }
          >
            Prev
          </button>

          {Array.from(
            { length: vegTotalPages },

            (_, i) => (

              <button
                key={i}

                onClick={() =>
                  setVegCurrentPage(i + 1)
                }

                className={
                  vegCurrentPage === i + 1
                    ? "veg-pagination-btn active-veg-page"
                    : "veg-pagination-btn"
                }
              >
                {i + 1}
              </button>

            )
          )}

          <button
            className="veg-pagination-btn"

            onClick={() =>
              setVegCurrentPage((p) => p + 1)
            }

            disabled={
              vegCurrentPage ===
              vegTotalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Veg;