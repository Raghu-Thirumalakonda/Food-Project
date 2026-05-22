import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  // ================= SLIDER + FOOD DATA =================
  const items = [
    { img: "/image/food2.jpg", title: "Bite into Happiness", desc: "Crispy and juicy food" },
    { img: "/image/foods.jpg", title: "Cheese Melt Paradise", desc: "Creamy perfection" },
    { img: "/image/foods3.jpg", title: "Golden Crunch Delight", desc: "Hot fresh food" },
    { img: "/image/tacos.jpg", title: "Flavors That Speak", desc: "Joy in every bite" }
  ];

  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  // ================= AUTO SLIDER =================
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ================= SEARCH FILTER =================
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      {/* BACKGROUND VIDEO */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/image/8626681-uhd_3840_2160_25fps.mp4" />
      </video>

      <div className="overlay">

        <div className="hero-section">

          <h1>Delicious Food <span>Delivered Fast</span></h1>

          <p>Order your favorite meals anytime</p>

          {/* ================= SEARCH BOX ================= */}
          <div className="search-box">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food..."
            />
            <button>Search</button>
          </div>

          {/* ================= SEARCH RESULTS ================= */}
          {search && (
            <div className="search-results">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, i) => (
                  <div key={i} className="search-card">
                    <img src={item.img} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-result">No food found</p>
              )}
            </div>
          )}

          {/* ================= SLIDER ================= */}
          <div className="slider-card">

            <button
              className="arrow left-arrow"
              onClick={() =>
                setIndex(index === 0 ? items.length - 1 : index - 1)
              }
            >
              ❮
            </button>

            <div className="slider-content">

              <div className="slider-text">
                <h3>Tasty</h3>
                <h2>{items[index].title}</h2>
                <p>{items[index].desc}</p>
              </div>

              <div className="slider-image-wrapper">
                <img src={items[index].img} alt="food" />
              </div>

            </div>

            <button
              className="arrow right-arrow"
              onClick={() => setIndex((index + 1) % items.length)}
            >
              ❯
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;