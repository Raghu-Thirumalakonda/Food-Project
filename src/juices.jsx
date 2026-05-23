import { useState } from "react";
import "./juices.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cartSlice";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

function juices() {
  const dispatch = useDispatch();

  const [juiceCurrentPage, setJuiceCurrentPage] = useState(1);

  const juiceItemsPerPage = 8;

  const juiceDrinkItems = [
    {
      id: "juice-1",
      name: "Orange Juice",
      price: 60,
      image: "/public/juices/orange juice.jpg",
      description: "Fresh orange juice full of vitamin C.",
    },

    {
      id: "juice-2",
      name: "Apple Juice",
      price: 70,
      image: "/public/juices/apple juice.jpg",
      description: "Sweet and refreshing apple flavored drink.",
    },

    {
      id: "juice-3",
      name: "Mango Juice",
      price: 80,
      image: "/public/juices/mango juice.jpg",
      description: "Rich mango juice with tropical flavor.",
    },

    {
      id: "juice-4",
      name: "Pineapple Juice",
      price: 75,
      image: "/public/juices/pineapple juice.jpg",
      description: "Cool pineapple drink with fresh taste.",
    },

    {
      id: "juice-5",
      name: "Watermelon Juice",
      price: 65,
      image: "/public/juices/watermelon juice.jpg",
      description: "Refreshing watermelon juice for summer.",
    },

    {
      id: "juice-6",
      name: "Grape Juice",
      price: 70,
      image: "/public/juices/grape juice.jpg",
      description: "Sweet grape juice with rich flavor.",
    },

    {
      id: "juice-7",
      name: "Pomegranate Juice",
      price: 90,
      image: "/public/juices/pomegranate juice.jpg",
      description: "Healthy pomegranate juice with antioxidants.",
    },

    {
      id: "juice-8",
      name: "Lemon Juice",
      price: 40,
      image: "/public/juices/lemon juice.jpg",
      description: "Cool lemon juice with refreshing taste.",
    },

    {
      id: "juice-9",
      name: "Mosambi Juice",
      price: 50,
      image: "/public/juices/mosambi juice.jpg",
      description: "Fresh mosambi juice with natural sweetness.",
    },

    {
      id: "juice-10",
      name: "Carrot Juice",
      price: 55,
      image: "/public/juices/carrot juice.jpg",
      description: "Healthy carrot juice rich in nutrients.",
    },

    {
      id: "juice-11",
      name: "Beetroot Juice",
      price: 60,
      image: "/public/juices/beetroot juice.jpg",
      description: "Energy boosting beetroot health drink.",
    },

    {
      id: "juice-12",
      name: "Papaya Juice",
      price: 65,
      image: "/public/juices/papaya juice.jpg",
      description: "Smooth papaya juice with sweet flavor.",
    },

    {
      id: "juice-13",
      name: "Banana Shake",
      price: 70,
      image: "/public/juices/banana shake.jpg",
      description: "Creamy banana shake full of energy.",
    },

    {
      id: "juice-14",
      name: "Strawberry Juice",
      price: 85,
      image: "/public/juices/strawberry juice.jpg",
      description: "Fresh strawberry drink with fruity taste.",
    },

    {
      id: "juice-15",
      name: "Kiwi Juice",
      price: 90,
      image: "/public/juices/kiwi juice.jpg",
      description: "Tangy kiwi juice with refreshing flavor.",
    },

    {
      id: "juice-16",
      name: "Mixed Fruit Juice",
      price: 95,
      image: "/public/juices/mixed fruit juice.jpg",
      description: "Combination of fresh seasonal fruits.",
    },

    {
      id: "juice-17",
      name: "Coconut Water",
      price: 50,
      image: "/public/juices/coconut water.jpg",
      description: "Natural coconut water for hydration.",
    },

    {
      id: "juice-18",
      name: "Mint Lemon Juice",
      price: 55,
      image: "/public/juices/mint lemon juice.jpg",
      description: "Mint and lemon mix with cooling taste.",
    },

    {
      id: "juice-19",
      name: "Chocolate Milkshake",
      price: 100,
      image: "/public/juices/chocolate milkshake.jpg",
      description: "Creamy chocolate milkshake with rich flavor.",
    },

    {
      id: "juice-20",
      name: "Cold Coffee",
      price: 90,
      image: "/public/juices/cold coffee.jpg",
      description: "Chilled coffee drink with creamy texture.",
    },
  ];

  const totalPages = Math.ceil(juiceDrinkItems.length / juiceItemsPerPage);

  const currentItems = juiceDrinkItems.slice(
    (juiceCurrentPage - 1) * juiceItemsPerPage,
    juiceCurrentPage * juiceItemsPerPage,
  );

  return (
    <div className="juice-page-wrapper">
      <Sidebar />

      <div className="juice-main-section">
        <h1 className="juice-heading-title">Juices 🧃</h1>

        <div className="juice-drink-grid">
          {currentItems.map((item) => (
            <div className="juice-drink-card" key={item.id}>
              {/* ================= IMAGE CARD ================= */}

              <div className="juice-img-wrapper">
                <img
                  className="juice-drink-image"
                  src={item.image}
                  alt={item.name}
                />

                {/* BADGES ON IMAGE */}

                <div className="juice-badge-wrapper">
                  <span className="juice-type-badge">JUICE</span>

                  <span className="juice-off-badge">20% OFF</span>
                </div>
              </div>

              {/* INFO */}

              <h3 className="juice-drink-name">{item.name}</h3>

              <p className="juice-drink-description">{item.description}</p>

              <p className="juice-drink-price">₹{item.price}</p>

              <button
                className="juice-cart-button"
                onClick={() => {
                  dispatch(addToCart({ ...item, quantity: 1 }));

                  toast.success(`${item.name} added 🧃`, {
                    position: "top-right",
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default juices;
