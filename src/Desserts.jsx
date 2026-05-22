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
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
    description: "Rich creamy chocolate layered cake."
  },
  {
    id: "dessert-2",
    name: "Vanilla Ice Cream",
    price: 120,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800",
    description: "Classic smooth vanilla ice cream."
  },
  {
    id: "dessert-3",
    name: "Donuts",
    price: 140,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
    description: "Soft glazed donuts."
  },
  {
    id: "dessert-4",
    name: "Brownie",
    price: 160,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800",
    description: "Fudgy chocolate brownie."
  },
  {
    id: "dessert-5",
    name: "Cup Cake",
    price: 110,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800",
    description: "Soft fluffy cupcakes."
  },
  {
    id: "dessert-6",
    name: "Strawberry Dessert",
    price: 200,
    image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=800",
    description: "Fresh strawberry dessert."
  },
  {
    id: "dessert-7",
    name: "Cheese Cake",
    price: 220,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800",
    description: "Creamy cheesecake."
  },
  {
    id: "dessert-8",
    name: "Macarons",
    price: 250,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=800",
    description: "Colorful French macarons."
  },
  {
    id: "dessert-9",
    name: "Waffles",
    price: 170,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800",
    description: "Crispy golden waffles."
  },
  {
    id: "dessert-10",
    name: "Pancakes",
    price: 150,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800",
    description: "Soft fluffy pancakes."
  },
  {
    id: "dessert-11",
    name: "Fruit Tart",
    price: 210,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800",
    description: "Fresh fruit tart."
  },
  {
    id: "dessert-12",
    name: "Muffins",
    price: 130,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=800",
    description: "Soft baked muffins."
  },
  {
    id: "dessert-13",
    name: "Red Velvet Cake",
    price: 240,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800",
    description: "Moist red velvet cake."
  },
  {
    id: "dessert-14",
    name: "Choco Lava",
    price: 190,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800",
    description: "Hot chocolate lava cake."
  },
  {
    id: "dessert-15",
    name: "Cookies",
    price: 100,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
    description: "Crunchy cookies."
  },
  {
    id: "dessert-16",
    name: "Milkshake",
    price: 160,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=800",
    description: "Cold creamy milkshake."
  },
  {
    id: "dessert-17",
    name: "Falooda",
    price: 180,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800",
    description: "Sweet falooda dessert."
  },
  {
    id: "dessert-18",
    name: "Kulfi",
    price: 90,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800",
    description: "Traditional Indian kulfi."
  },
  {
    id: "dessert-19",
    name: "Gulab Jamun",
    price: 80,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800",
    description: "Soft sweet gulab jamun."
  },
  {
    id: "dessert-20",
    name: "Rasmalai",
    price: 140,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800",
    description: "Milk based rasmalai dessert."
  }
];

export default function Desserts() {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const currentItems = dessertsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(dessertsData.length / itemsPerPage);

  return (
    <div className="page-layout">

      <Sidebar />

      <div className="desserts-page">

        <h1 className="desserts-title">
          Sweet Desserts 🍰
        </h1>

        <div className="desserts-container">

          {currentItems.map((item) => (

            <div className="dessert-card" key={item.id}>

              {/* IMAGE WRAPPER */}
              <div className="dessert-img-wrapper">

                <img
                  src={item.image}
                  alt={item.name}
                  className="dessert-img"
                />

                {/* BADGES ON IMAGE */}
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

                <h2>{item.name}</h2>

                <p className="dessert-description">
                  {item.description}
                </p>

                <p className="dessert-price">
                  ₹ {item.price}
                </p>

                <button
                  className="dessert-btn"
                  onClick={() => {
                    dispatch(addToCart({ ...item, quantity: 1 }));

                    toast.success(`${item.name} added 🍰`, {
                      position: "top-right",
                    });
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
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={
                currentPage === index + 1
                  ? "dessert-page-btn dessert-active-page"
                  : "dessert-page-btn"
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="dessert-page-btn"
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}