import "./About.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        <div className="about-left">

          <img
            src="/image/about-food.jpg"
            alt="Food Hub"
          />

        </div>

        <div className="about-right">

          <h1>About Food Hub 🍔</h1>

          <p>
            Welcome to <span>Food Hub</span>,
            your ultimate destination for delicious
            food delivered with speed, freshness,
            and love.
          </p>

          <p>
            Food Hub is a modern food ordering
            platform built using React and Redux
            Toolkit. Our mission is to provide a
            smooth and enjoyable online food
            ordering experience with beautiful UI,
            fast performance, and smart cart
            management.
          </p>

          <p>
            From tasty pizzas 🍕 to spicy burgers 🍔,
            refreshing drinks 🥤, and healthy meals 🥗,
            Food Hub brings all your favorite foods
            together in one place.
          </p>

          <div className="about-features">

            <div className="feature-box">
              <h2>🚀 Fast Delivery</h2>
              <p>
                Quick and secure delivery at your
                doorstep.
              </p>
            </div>

            <div className="feature-box">
              <h2>🛒 Smart Cart</h2>
              <p>
                Real-time cart management using
                Redux Toolkit.
              </p>
            </div>

            <div className="feature-box">
              <h2>💾 Local Storage</h2>
              <p>
                Orders and cart saved even after
                refresh.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;