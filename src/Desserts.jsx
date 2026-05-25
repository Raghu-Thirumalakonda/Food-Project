import "./Desserts.css";

import { useDispatch } from "react-redux";

import { addToCart } from "./features/cartSlice";

import { useState } from "react";

import Sidebar from "./Sidebar";

import { toast } from "react-toastify";

const dessertsData = [

  {
    id: "dessert-1",
    name: "Chocolate Cake",
    price: 180,
    rating: "⭐ 4.9",
    image: "/image/Chocolate Cake.jpg",
    description: "Rich creamy chocolate layered cake."
  },

  {
    id: "dessert-2",
    name: "Vanilla Ice Cream",
    price: 120,
    rating: "⭐ 4.7",
    image: "/image/Vanilla Ice Cream.jpg",
    description: "Classic smooth vanilla ice cream."
  },

  {
    id: "dessert-3",
    name: "Donuts",
    price: 140,
    rating: "⭐ 4.6",
    image: "/image/Donuts.jpg",
    description: "Soft glazed donuts."
  },

  {
    id: "dessert-4",
    name: "Brownie",
    price: 160,
    rating: "⭐ 4.8",
    image: "/image/Brownie.jpg",
    description: "Fudgy chocolate brownie."
  },

  {
    id: "dessert-5",
    name: "Cup Cake",
    price: 110,
    rating: "⭐ 4.5",
    image: "/image/Cup Cake.jpg",
    description: "Soft fluffy cupcakes."
  },

  {
    id: "dessert-6",
    name: "Strawberry Dessert",
    price: 200,
    rating: "⭐ 4.9",
    image: "/image/Strawberry Dessert.jpg",
    description: "Fresh strawberry dessert."
  },

  {
    id: "dessert-7",
    name: "Cheese Cake",
    price: 220,
    rating: "⭐ 5.0",
    image: "/image/Cheese Cake.jpg",
    description: "Creamy cheesecake."
  },

  {
    id: "dessert-8",
    name: "Macarons",
    price: 250,
    rating: "⭐ 4.8",
    image: "/image/Macarons.jpg",
    description: "Colorful French macarons."
  },

  {
    id: "dessert-9",
    name: "Waffles",
    price: 170,
    rating: "⭐ 4.7",
    image: "/image/Waffles.jpg",
    description: "Crispy golden waffles."
  },

  {
    id: "dessert-10",
    name: "Pancakes",
    price: 150,
    rating: "⭐ 4.6",
    image: "/image/Pancakes.jpg",
    description: "Soft fluffy pancakes."
  },

  {
    id: "dessert-11",
    name: "Mango Dessert",
    price: 210,
    rating: "⭐ 4.9",
    image: "/image/mango.jpg",
    description: "Sweet and creamy mango dessert with rich tropical flavor."
  },

  {
    id: "dessert-12",
    name: "Muffins",
    price: 130,
    rating: "⭐ 4.5",
    image: "/image/Muffins.jpg",
    description: "Soft baked muffins."
  },

  {
    id: "dessert-13",
    name: "Red Velvet Cake",
    price: 240,
    rating: "⭐ 5.0",
    image: "/image/Red Velvet Cake.jpg",
    description: "Moist red velvet cake."
  },

  {
    id: "dessert-14",
    name: "Choco Lava",
    price: 190,
    rating: "⭐ 4.8",
    image: "/image/Choco Lava.jpg",
    description: "Hot chocolate lava cake."
  },

  {
    id: "dessert-15",
    name: "Cookies",
    price: 100,
    rating: "⭐ 4.4",
    image: "/image/Cookies.jpg",
    description: "Crunchy cookies."
  },

  {
    id: "dessert-16",
    name: "Milkshake",
    price: 160,
    rating: "⭐ 4.7",
    image: "/image/Milkshake.jpg",
    description: "Cold creamy milkshake."
  },

  {
    id: "dessert-17",
    name: "Falooda",
    price: 180,
    rating: "⭐ 4.8",
    image: "/image/Falooda.jpg",
    description: "Sweet falooda dessert."
  },

  {
    id: "dessert-18",
    name: "Kulfi",
    price: 90,
    rating: "⭐ 4.5",
    image: "/image/Kulfi.jpg",
    description: "Traditional Indian kulfi."
  },

  {
    id: "dessert-19",
    name: "Gulab Jamun",
    price: 80,
    rating: "⭐ 4.9",
    image: "/image/Gulab Jamun.jpg",
    description: "Soft sweet gulab jamun."
  },

  {
    id: "dessert-20",
    name: "Rasmalai",
    price: 140,
    rating: "⭐ 4.8",
    image: "/image/Rasmalai.jpg",
    description: "Milk based rasmalai dessert."
  }

];

export default function Desserts() {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 6;

  const currentItems = dessertsData.slice(

    (currentPage - 1) * itemsPerPage,

    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(

    dessertsData.length / itemsPerPage
  );

  return (

    <div className="page-layout">

      <Sidebar />

      <div className="desserts-page">

        <h1 className="desserts-title">
          Sweet Desserts 🍰
        </h1>

        <div className="desserts-container">

          {currentItems.map((item) => (

            <div
              className="dessert-card"
              key={item.id}
            >

              {/* IMAGE WRAPPER */}

              <div className="dessert-img-wrapper">

                <img
                  src={item.image}
                  alt={item.name}
                  className="dessert-img"
                />

                {/* BADGES */}

                <div className="dessert-badge-wrapper">

                  <span className="dessert-type-badge">
                    SWEET
                  </span>

                  <span className="dessert-off-badge">
                    25% OFF
                  </span>

                </div>

              </div>

              {/* INFO */}

              <div className="dessert-info">

                {/* TITLE + RATING */}

                <div className="dessert-title-rating">

                  <h2>{item.name}</h2>

                  <div className="dessert-rating-badge">
                    {item.rating}
                  </div>

                </div>

                <p className="dessert-description">
                  {item.description}
                </p>

                <p className="dessert-price">
                  ₹ {item.price}
                </p>

                {/* BUTTON */}

                <button

                  className="dessert-btn"

                  onClick={() => {

                    dispatch(

                      addToCart({

                        ...item,

                        quantity:1
                      })
                    );

                    toast.success(

                      `${item.name} added 🍰`,

                      {

                        toastId:item.id,

                        position:"top-right",

                        autoClose:2000,

                        pauseOnHover:false,

                        closeOnClick:true,
                      }
                    );
                  }}
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* PAGINATION */}

        <div className="dessert-pagination">

          <button

            className="dessert-page-btn"

            onClick={() =>
              setCurrentPage((p) => p - 1)
            }

            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map(

            (_, index) => (

              <button

                key={index}

                className={

                  currentPage === index + 1

                    ? "dessert-page-btn dessert-active-page"

                    : "dessert-page-btn"
                }

                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </button>
            )
          )}

          <button

            className="dessert-page-btn"

            onClick={() =>
              setCurrentPage((p) => p + 1)
            }

            disabled={
              currentPage === totalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}