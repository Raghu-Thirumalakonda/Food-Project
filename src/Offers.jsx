import "./offers.css";

function Offers() {

  const offers = [

    {
      id: 1,
      title: "🔥 Today Special Offers",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      discount: "50% OFF",
      code: "FOODHUB50",
      desc: "Exclusive discounts on your favorite meals today on Food Hub 🍴",
    },

    {
      id: 2,
      title: "🍕 Pizza Deals",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      discount: "Buy 1 Get 1",
      code: "PIZZAHUB",
      desc: "Hot cheesy pizzas with double happiness only on Food Hub 🍕",
    },

    {
      id: 3,
      title: "🍔 Burger Combos",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      discount: "40% OFF",
      code: "BURGER40",
      desc: "Juicy burgers + fries combos at unbeatable prices 🍔",
    },

    {
      id: 4,
      title: "🥤 Free Drinks Offers",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
      discount: "Free Coke",
      code: "DRINKFREE",
      desc: "Get refreshing drinks free with selected combos 🥤",
    },

    {
      id: 5,
      title: "🎉 Festival Discounts",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop",
      discount: "70% OFF",
      code: "FEST70",
      desc: "Celebrate festivals with massive Food Hub discounts 🎉",
    },

    {
      id: 6,
      title: "💳 Bank Cashback Offers",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      discount: "₹200 Cashback",
      code: "CASH200",
      desc: "Pay with cards & get instant cashback on Food Hub 💳",
    },

    {
      id: 7,
      title: "🚚 Free Delivery Offers",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
      discount: "FREE DELIVERY",
      code: "FREEDEL",
      desc: "Enjoy unlimited free delivery on Food Hub orders 🚚",
    },

  ];

  return (

    <div className="offers-page">

      {/* ================= HEADER ================= */}

      <div className="offers-header">

        <h1>
          Food Hub Exclusive Offers 🍴
        </h1>

        <p>
          Fresh food, fast delivery & amazing discounts only on Food Hub 🚀
        </p>

      </div>

      {/* ================= GRID ================= */}

      <div className="offers-grid">

        {offers.map((item) => (

          <div
            className="offer-card"
            key={item.id}
          >

            <div className="offer-image-box">

              <img
                src={item.image}
                alt={item.title}
                className="offer-image"
              />

              <div className="offer-badge">

                {item.discount}

              </div>

            </div>

            <div className="offer-content">

              <h2>
                {item.title}
              </h2>

              <p>
                {item.desc}
              </p>

              <div className="coupon">

                Use Code:

                <span>
                  {item.code}
                </span>

              </div>

              <button className="claim-btn">

                Get Offer on Food Hub 🍔

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Offers;