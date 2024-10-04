import Navbar from "../navbar";
import Footer from "../footer";
import Top from "../top";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  // using email.js to send the form to mail
  // npm install emailjs-com sign up for emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8uzuran",
        "template_y5c9ske",
        form.current,
        "mQ786bE_HqQUYLj1u"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Top />
      <Navbar />
      {/* Contact page container */}
      <div className="contact-page">
        {/* Contact card */}
        <div className="contact-card">
          {/* Contact card top */}
          <div className="contact-card-top">
            {/* Icon container */}
            <div className="icon-container">
              <div className="icon-sub-container">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <p>Call Us</p>
            </div>
            <p>We are available 24/7</p>
            <p>Phone: +8801611112222</p>
          </div>

          {/* Contact card bottom */}
          <div className="contact-card-bottom">
            {/* Icon container */}
            <div className="icon-container">
              <div className="icon-sub-container">
                <IoIosMail className="contact-icon" />
              </div>
              <p>Write Us</p>
            </div>
            <p class="form-text">
              Fill out our form and we will contact <br />
              you within 24 hours
            </p>
            <a href="malito:customer@giro.com" className="contact-link">
              <span>Email:</span> customer@giro.com
            </a>
            <a href="malito:support@giro.com" className="contact-link">
              <span>Email:</span> support@giro.com
            </a>
          </div>
        </div>

        {/* Send a message form */}
        <form className="message-form" ref={form} onSubmit={sendEmail}>
          <div className="message-form-inputs">
            <input
              className="input-field input-text"
              type="text"
              name="user_name"
              placeholder="Your FullName"
              required
            />
            <input
              className="input-field input-email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              className="input-field input-tel"
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="message-form-message">
            <textarea
              className="input-field input-message"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="submit" className="send-message-btn">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
