import { useState } from "react";
import "./juices.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cartSlice";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

function Juices() {

  const dispatch = useDispatch();

  const [juiceCurrentPage, setJuiceCurrentPage] =
    useState(1);

  const juiceItemsPerPage = 6;

  const juiceDrinkItems = [

  {
    id: "juice-1",
    name: "Orange Juice",
    price: 60,
    rating: "⭐ 4.6",
    image: "/image/orange juice.jpg",
    description:
      "Fresh orange juice full of vitamin C."
  },

  {
    id: "juice-2",
    name: "Apple Juice",
    price: 70,
    rating: "⭐ 4.5",
    image: "/image/apple juice.jpg",
    description:
      "Sweet and refreshing apple flavored drink."
  },

  {
    id: "juice-3",
    name: "Mango Juice",
    price: 80,
    rating: "⭐ 4.9",
    image: "/image/mango juice.jpg",
    description:
      "Rich mango juice with tropical flavor."
  },

  {
    id: "juice-4",
    name: "Pineapple Juice",
    price: 75,
    rating: "⭐ 4.7",
    image: "/image/pineapple juice.jpg",
    description:
      "Cool pineapple drink with fresh taste."
  },

  {
    id: "juice-5",
    name: "Watermelon Juice",
    price: 65,
    rating: "⭐ 4.4",
    image: "/image/watermelon juice.jpg",
    description:
      "Refreshing watermelon juice for summer."
  },

  {
    id: "juice-6",
    name: "Grape Juice",
    price: 70,
    rating: "⭐ 4.5",
    image: "/image/grape juice.jpg",
    description:
      "Sweet grape juice with rich flavor."
  },

  {
    id: "juice-7",
    name: "Pomegranate Juice",
    price: 90,
    rating: "⭐ 4.8",
    image: "/image/pomegranate juice.jpg",
    description:
      "Healthy pomegranate juice with antioxidants."
  },

  {
    id: "juice-8",
    name: "Lemon Juice",
    price: 40,
    rating: "⭐ 4.3",
    image: "/image/lemon juice.jpg",
    description:
      "Cool lemon juice with refreshing taste."
  },

  {
    id: "juice-9",
    name: "Mosambi Juice",
    price: 50,
    rating: "⭐ 4.4",
    image: "/image/mosambi juice.jpg",
    description:
      "Fresh mosambi juice with natural sweetness."
  },

  {
    id: "juice-10",
    name: "Carrot Juice",
    price: 55,
    rating: "⭐ 4.2",
    image: "/image/carrot juice.jpg",
    description:
      "Healthy carrot juice rich in nutrients."
  },

  {
    id: "juice-11",
    name: "Beetroot Juice",
    price: 60,
    rating: "⭐ 4.1",
    image: "/image/beetroot juice.jpg",
    description:
      "Energy boosting beetroot health drink."
  },

  {
    id: "juice-12",
    name: "Papaya Juice",
    price: 65,
    rating: "⭐ 4.4",
    image: "/image/papaya juice.jpg",
    description:
      "Smooth papaya juice with sweet flavor."
  },

  {
    id: "juice-13",
    name: "Banana Shake",
    price: 70,
    rating: "⭐ 4.8",
    image: "/image/banana shake.jpg",
    description:
      "Creamy banana shake full of energy."
  },

  {
    id: "juice-14",
    name: "Strawberry Juice",
    price: 85,
    rating: "⭐ 4.9",
    image: "/image/strawberry juice.jpg",
    description:
      "Fresh strawberry drink with fruity taste."
  },

  {
    id: "juice-15",
    name: "Kiwi Juice",
    price: 90,
    rating: "⭐ 4.7",
    image: "/image/kiwi juice.jpg",
    description:
      "Tangy kiwi juice with refreshing flavor."
  },

  {
    id: "juice-16",
    name: "Mixed Fruit Juice",
    price: 95,
    rating: "⭐ 5.0",
    image: "/image/mixed fruit juice.jpg",
    description:
      "Combination of fresh seasonal fruits."
  },

  {
    id: "juice-17",
    name: "Coconut Water",
    price: 50,
    rating: "⭐ 4.3",
    image: "/image/coconut water.jpg",
    description:
      "Natural coconut water for hydration."
  },

  {
    id: "juice-18",
    name: "Mint Lemon Juice",
    price: 55,
    rating: "⭐ 4.5",
    image: "/image/mint lemon juice.jpg",
    description:
      "Mint and lemon mix with cooling taste."
  },

  {
    id: "juice-19",
    name: "Chocolate Milkshake",
    price: 100,
    rating: "⭐ 4.9",
    image: "/image/chocolate milkshake.jpg",
    description:
      "Creamy chocolate milkshake with rich flavor."
  },

  {
    id: "juice-20",
    name: "Cold Coffee",
    price: 90,
    rating: "⭐ 4.8",
    image: "/image/cold coffee.jpg",
    description:
      "Chilled coffee drink with creamy texture."
  }

];

  const juiceTotalPages = Math.ceil(
    juiceDrinkItems.length /
    juiceItemsPerPage
  );

  const juiceLastIndex =
    juiceCurrentPage * juiceItemsPerPage;

  const juiceFirstIndex =
    juiceLastIndex - juiceItemsPerPage;

  const juiceCurrentItems =
    juiceDrinkItems.slice(
      juiceFirstIndex,
      juiceLastIndex
    );

  return (

    <div className="juice-page-wrapper">

      <Sidebar />

      <div className="juice-main-section">

        <h1 className="juice-heading-title">
          Juices 🧃
        </h1>

        <div className="juice-drink-grid">

          {juiceCurrentItems.map((item) => (

            <div
              className="juice-drink-card"
              key={item.id}
            >

              {/* BADGES */}

              <div className="juice-badge-wrapper">

                <span className="juice-type-badge">
                  JUICE
                </span>

                <span className="juice-off-badge">
                  20% OFF
                </span>

              </div>

              {/* IMAGE */}

              <img
                className="juice-drink-image"
                src={item.image}
                alt={item.name}
              />

              {/* TITLE + RATING */}

              <div className="juice-title-rating">

                <h3 className="juice-drink-name">
                  {item.name}
                </h3>

                <div className="juice-rating-badge">
                  {item.rating}
                </div>

              </div>

              {/* DESCRIPTION */}

              <p className="juice-drink-description">
                {item.description}
              </p>

              {/* PRICE */}

              <p className="juice-drink-price">
                ₹{item.price}
              </p>

              {/* BUTTON */}

              <button

                className="juice-cart-button"

                onClick={() => {

                  dispatch(

                    addToCart({

                      ...item,

                      quantity:1,
                    })
                  );

                  toast.success(

                    `${item.name} added 🧃`,

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
                Add to Cart
              </button>

            </div>

          ))}

        </div>

        {/* PAGINATION */}

        <div className="juice-pagination-wrapper">

          <button

            className="juice-pagination-btn"

            onClick={() =>
              setJuiceCurrentPage((p) => p - 1)
            }

            disabled={juiceCurrentPage === 1}
          >
            Prev
          </button>

          {Array.from(

            { length: juiceTotalPages },

            (_, i) => (

              <button

                key={i}

                onClick={() =>
                  setJuiceCurrentPage(i + 1)
                }

                className={

                  juiceCurrentPage === i + 1

                    ? "juice-pagination-btn active-juice-page"

                    : "juice-pagination-btn"
                }
              >
                {i + 1}
              </button>

            )
          )}

          <button

            className="juice-pagination-btn"

            onClick={() =>
              setJuiceCurrentPage((p) => p + 1)
            }

            disabled={
              juiceCurrentPage ===
              juiceTotalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Juices;