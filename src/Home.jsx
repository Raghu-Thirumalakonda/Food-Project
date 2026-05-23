import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./home.css";

const Home = () => {
  const items = [
    {
      img: "/image/food2.jpg",
      title: "Bite into Happiness",
      desc: "Crispy and juicy food",
    },

    {
      img: "/image/foods.jpg",
      title: "Cheese Melt Paradise",
      desc: "Creamy perfection",
    },

    {
      img: "/image/foods3.jpg",
      title: "Golden Crunch Delight",
      desc: "Hot fresh food",
    },

    {
      img: "/image/tacos.jpg",
      title: "Flavors That Speak",
      desc: "Joy in every bite",
    },
  ];

  const [index, setIndex] = useState(0);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="home">
      {/* VIDEO BACKGROUND */}

      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/image/8626681-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="overlay"></div>

      {/* MAIN CONTENT */}

      <div className="main-content">
        {/* HERO */}

        <div className="hero-section">
          <h1>
            Delicious Food,
            <span> Delivered Fast</span>
          </h1>

          <p>Order your favorite meals from top restaurants anytime.</p>

          {/* SEARCH */}

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>Search</button>
          </div>

          {/* SEARCH RESULTS */}

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

          {/* SLIDER */}

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
                <h3>Tasty Food</h3>

                <h2>{items[index].title}</h2>

                <p>{items[index].desc}</p>

                <button className="order-btn">Order Now</button>
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

          {/* CATEGORY */}

          <div className="category-container">
            <Link to="/veg" className="category-link">
              <div className="category-card veg">
                <h3>🥗 Veg</h3>

                <p>120+ Items</p>
              </div>
            </Link>

            <Link to="/nonveg" className="category-link">
              <div className="category-card nonveg">
                <h3>🍗 Non-Veg</h3>

                <p>150+ Items</p>
              </div>
            </Link>

            <Link to="/juices" className="category-link">
              <div className="category-card juice">
                <h3>🥤 Juices</h3>

                <p>80+ Items</p>
              </div>
            </Link>

            <Link to="/desserts" className="category-link">
              <div className="category-card dessert">
                <h3>🧁 Desserts</h3>

                <p>70+ Items</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* // ================= FOOTER SECTION =================// */}

      <footer className="food-footer">
        {/* LEFT FLOAT IMAGE
  <div className="footer-left-img">
    <img src="\image\burger.png" alt="burger" />
  </div> */}

        {/* RIGHT FLOAT IMAGE */}
        {/* <div className="footer-right-img">
    <img src="/image/pizza.png" alt="pizza" />
  </div> */}

        <div className="footer-top">
          {/* LEFT LOGO */}
          <div className="footer-box">
            <h1 className="footer-logo">Food Hub 🍴</h1>

            <p className="footer-text">
              Good food, good mood.
              <br />
              Delivered with love.
            </p>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-box">
            <h2>Quick Links</h2>

            <a href="/">Home</a>
            <a href="/">Menu</a>
            <a href="/">About</a>
            <a href="/">Gallery</a>
            <a href="/">Contact</a>
          </div>

          {/* SUPPORT */}
          <div className="footer-box">
            <h2>Help & Support</h2>

            <a href="/">FAQs</a>
            <a href="/">Shipping</a>
            <a href="/">Returns</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Track Order</a>
          </div>

          {/* CONTACT */}
          <div className="footer-box">
            <h2>Contact Us</h2>

            <p>📞 +91 9876543210</p>
            <p>📧 foodhub@gmail.com</p>
            <p>📍 Mumbai, India</p>
            <p>⏰ Mon - Sun</p>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-box">
            <h2>Newsletter</h2>

            <p>Subscribe for latest offers and tasty food updates.</p>

            <div className="newsletter">
              <input type="email" placeholder="Enter Email" />
              <button>➤</button>
            </div>

            {/* <img
        src="/image/pizza.png"
        alt=""
        className="footer-pizza"
      /> */}
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="footer-cards">
          <div className="footer-card">
            <h3>🚚 Fast Delivery</h3>
            <p>On time delivery at your doorstep.</p>
          </div>

          <div className="footer-card">
            <h3>🍔 Best Quality</h3>
            <p>Fresh and tasty food everyday.</p>
          </div>

          <div className="footer-card">
            <h3>⭐ 100% Original</h3>
            <p>Authentic recipes & flavors.</p>
          </div>

          <div className="footer-card">
            <h3>🎧 24/7 Support</h3>
            <p>We are always here for you.</p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          © 2026 Flavorista. All Rights Reserved ❤️
        </div>
      </footer>
    </div>
  );
};

export default Home;
