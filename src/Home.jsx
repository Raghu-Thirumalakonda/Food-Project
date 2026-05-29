import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import "./home.css";

const Home = () => {

  const navigate = useNavigate();

  /* ================= SEARCH DATA ================= */

  const allFoods = [

    /* VEG */

    {
      id:1,
      name:"Paneer Biryani",
      page:"/veg",
    },

    {
      id:2,
      name:"Veg Fried Rice",
      page:"/veg",
    },

    {
      id:3,
      name:"Mushroom Curry",
      page:"/veg",
    },

    {
      id:4,
      name:"Veg Noodles",
      page:"/veg",
    },

    /* NON VEG */

    {
      id:5,
      name:"Chicken Biryani",
      page:"/nonveg",
    },

    {
      id:6,
      name:"Chicken Burger",
      page:"/nonveg",
    },

    {
      id:7,
      name:"Fish Fry",
      page:"/nonveg",
    },

    {
      id:8,
      name:"Mutton Curry",
      page:"/nonveg",
    },

    /* JUICES */

    {
      id:9,
      name:"Apple Juice",
      page:"/juices",
    },

    {
      id:10,
      name:"Orange Juice",
      page:"/juices",
    },

    {
      id:11,
      name:"Mango Shake",
      page:"/juices",
    },

    {
      id:12,
      name:"Watermelon Juice",
      page:"/juices",
    },

    /* DESSERTS */

    {
      id:13,
      name:"Chocolate Cake",
      page:"/desserts",
    },

    {
      id:14,
      name:"Ice Cream",
      page:"/desserts",
    },

    {
      id:15,
      name:"Brownie",
      page:"/desserts",
    },

    {
      id:16,
      name:"Donut",
      page:"/desserts",
    },

  ];

  const items = [

    {
      img:"/image/food2.jpg",

      title:"Bite into Happiness",

      desc:"Crispy and juicy food",

      buttonLink:"/veg",
    },

    {
      img:"/image/foods.jpg",

      title:"Cheese Melt Paradise",

      desc:"Creamy perfection",

      buttonLink:"/nonveg",
    },

    {
      img:"/image/foods3.jpg",

      title:"Golden Crunch Delight",

      desc:"Hot fresh food",

      buttonLink:"/juices",
    },

    {
      img:"/image/tacos.jpg",

      title:"Flavors That Speak",

      desc:"Joy in every bite",

      buttonLink:"/desserts",
    },

  ];

  const [index, setIndex] = useState(0);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    if (!items || items.length === 0)
      return;

    const interval = setInterval(() => {

      setIndex(
        (prev) =>
          (prev + 1) % items.length
      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, [items.length]);

  /* ================= SEARCH FILTER ================= */

  const filteredFoods =
    allFoods.filter((item) =>

      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  /* ================= SEARCH NAVIGATION ================= */

  const handleSearch = () => {

    if (!search.trim()) return;

    const matchedFood =
      allFoods.find((item) =>

        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );

    if (matchedFood) {

      navigate(matchedFood.page);

      setTimeout(() => {

        const element =
          document.getElementById(
            `food-${matchedFood.id}`
          );

        if (element) {

          element.scrollIntoView({

            behavior:"smooth",

            block:"center",
          });

        }

      }, 700);

    } else {

      alert(
        "Food Not Found ❌"
      );

    }

  };

  const currentItem =
    items[index] || items[0];

  return (

    <div className="home">

      {/* VIDEO BACKGROUND */}

      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >

        <source

          src="/image/8626681-uhd_3840_2160_25fps.mp4"

          type="video/mp4"
        />

      </video>

      {/* OVERLAY */}

      <div className="overlay"></div>

      {/* MAIN CONTENT */}

      <div className="main-content">

        <div className="hero-section">

          <h1 className="hero-title">
  Delicious Food, <span className="hero-highlight">Delivered Fast</span>
</h1>

<p className="hero-subtitle">
  Order your favorite meals from top restaurants anytime.
</p>

          {/* SEARCH */}

          <div className="search-box">

            <input

              type="text"

              placeholder="Search Veg, NonVeg, Juices, Desserts..."

              value={search}

              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleSearch();

                }

              }}
            />

            <button
              onClick={handleSearch}
            >
              Search
            </button>

          </div>

          {/* SEARCH RESULTS */}

          {search && (

            <div className="search-results">

              {filteredFoods.length > 0 ? (

                filteredFoods.map(
                  (item, i) => (

                    <div

                      key={i}

                      className="search-card"

                      onClick={() => {

                        navigate(
                          item.page
                        );

                        setTimeout(() => {

                          const element =
                            document.getElementById(
                              `food-${item.id}`
                            );

                          if (element) {

                            element.scrollIntoView({

                              behavior:"smooth",

                              block:"center",
                            });

                          }

                        }, 700);

                      }}
                    >

                      <img

                        src="/image/foods.jpg"

                        alt={item.name}
                      />

                      <div>

                        <h4>
                          {item.name}
                        </h4>

                        <p>
                          Click to open
                        </p>

                      </div>

                    </div>

                  )
                )

              ) : (

                <p className="no-result">

                  No food found ❌

                </p>

              )}

            </div>

          )}

          {/* SLIDER */}

          <div className="slider-card">

            <button

              className="arrow left-arrow"

              onClick={() =>

                setIndex((prev) =>

                  prev === 0
                    ? items.length - 1
                    : prev - 1
                )
              }
            >
              ❮
            </button>

            <div className="slider-content">

              <div className="slider-text">

                <h4>
                  Tasty Food
                </h4>

                <h2>
                  {currentItem.title}
                </h2>

                <p>
                  {currentItem.desc}
                </p>

                {/* CLICKABLE ORDER BUTTON */}

                <Link
                  to={currentItem.buttonLink}
                  className="order-btn 1"
                >
                  Order Now
                </Link>

              </div>

              <div className="slider-image-wrapper">

                <img

                  src={currentItem.img}

                  alt="food"
                />

              </div>

            </div>

            <button

              className="arrow right-arrow"

              onClick={() =>

                setIndex(
                  (prev) =>
                    (prev + 1) %
                    items.length
                )
              }
            >
              ❯
            </button>

          </div>

          {/* CATEGORY */}

          <div className="category-wrapper">

            <div className="category-container">

              <Link
                to="/veg"
                className="category-link"
              >

                <div className="category-card veg">

                  <h3>
                     Veg
                  </h3>

                  <p>
                    120+ Items
                  </p>

                </div>

              </Link>

              <Link
                to="/nonveg"
                className="category-link"
              >

                <div className="category-card nonveg">

                  <h3>
                   Non-Veg
                  </h3>

                  <p>
                    150+ Items
                  </p>

                </div>

              </Link>

              <Link
                to="/juices"
                className="category-link"
              >

                <div className="category-card juice">

                  <h3>
                     Juices
                  </h3>

                  <p>
                    80+ Items
                  </p>

                </div>

              </Link>

              <Link
                to="/desserts"
                className="category-link"
              >

                <div className="category-card dessert">

                  <h3>
                     Desserts
                  </h3>

                  <p>
                    70+ Items
                  </p>

                </div>

              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="food-footer">

        <div className="footer-top">

          <div className="footer-box">

            <div className="footer-logo">

  <div className="logo-text">
    <span>Food</span>
    <span>Hub</span>
  </div>

  <span>🍴</span>

</div>
            <p className="footer-text">

              Good Food, Good Mood,

              <br />

              Delivered with love.

            </p>

          </div>

          <div className="footer-box">

            <h2>
              Quick Links
            </h2>

            <a href="/">
              Home
            </a>

            <a href="/">
              Menu
            </a>

            <a href="/">
              About
            </a>

            <a href="/">
              Gallery
            </a>

            <a href="/">
              Contact
            </a>

          </div>

          <div className="footer-box">

            <h2>
              Help & Support
            </h2>

            <a href="/">
              FAQs
            </a>

            <a href="/">
              Shipping
            </a>

            <a href="/">
              Returns
            </a>

            <a href="/">
              Privacy Policy
            </a>

            <a href="/">
              Track Order
            </a>

          </div>

          <div className="footer-box">

            <h2>
              Contact Us
            </h2>

            <p>
              📞 +91 8374075410
            </p>

            <p>
              📧 raghuthirumalakonda808@gmail.com
            </p>

            <p>
              📍 Mumbai, India
            </p>

            <p>
              ⏰ Mon - Sun
            </p>

          </div>

          <div className="footer-box">

            <h2>
              Follow Us
            </h2>

            <p>
              Stay connected with Food Hub 🍔
            </p>

            <div className="social-icons follow-icons">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>

              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-cards">

          <div className="footer-card">

            <h3>
              🚚 Fast Delivery
            </h3>

            <p>
              On time delivery at your doorstep.
            </p>

          </div>

          <div className="footer-card">

            <h3>
              🍔 Best Quality
            </h3>

            <p>
              Fresh and tasty food everyday.
            </p>

          </div>

          <div className="footer-card">

            <h3>
              ⭐ 100% Original
            </h3>

            <p>
              Authentic recipes & flavors.
            </p>

          </div>

          <div className="footer-card">

            <h3>
              🎧 24/7 Support
            </h3>

            <p>
              We are always here for you.
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 Flavorista.
          All Rights Reserved ❤️

        </div>

      </footer>

    </div>
  );
};

export default Home;