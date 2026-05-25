import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_w1dbaxs",
      "template_zfmsi0r",
      form.current,
      "SU4bbBhAdBdECqcAD"
    )

    .then(() => {

      toast.success(
        "Message Sent Successfully 🚀"
      );

      e.target.reset();

    })

    .catch((error) => {

      console.log(error);

      toast.error(
        "Failed To Send Message ❌"
      );
    });
  };

  return (

    <div className="food-contact-page">

      {/* ================= TITLE ================= */}

      <div className="food-contact-header">

        <h1 className="mobile-contact-title">

          <div className="title-line-1">
            Contact
          </div>

          <div className="title-line-2">
            Food Hub 🍔
          </div>

        </h1>

        <p>
          We are always ready to help you with
          your food orders and delivery support.
        </p>

      </div>

      {/* ================= MAIN ================= */}

      <div className="food-contact-container">

        {/* ================= LEFT ================= */}

        <div className="food-contact-left">

          <h2>Get In Touch 📞</h2>

          <p>
            Have questions about your order or
            delivery? Contact us anytime.
          </p>

          <div className="food-contact-card">

            <span>📍</span>

            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>

          </div>

          <div className="food-contact-card">

            <span>📞</span>

            <div>
              <h3>Phone</h3>
              <p>+91 8374075410</p>
            </div>

          </div>

          <div className="food-contact-card">

            <span>✉️</span>

            <div>
              <h3>Email</h3>

              <p>
                raghuthirumalakonda808@gmail.com
              </p>

            </div>

          </div>

          <div className="food-contact-card">

            <span>🚚</span>

            <div>
              <h3>Delivery Support</h3>

              <p>
                24/7 Fast Food Delivery
              </p>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="food-contact-right">

          <form
            ref={form}
            onSubmit={sendEmail}
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Write Your Message..."
              required
            ></textarea>

            <button type="submit">

              Send Message 🚀

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;