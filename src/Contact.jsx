import "./contact.css";

function Contact() {

  return (

    <div className="contact-page">

      <h1>📞 Contact Us</h1>

      <div className="contact-box">

        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>

      </div>

    </div>
  );
}

export default Contact;