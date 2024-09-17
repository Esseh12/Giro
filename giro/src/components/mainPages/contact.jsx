import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  // using email.js to send the form to mail
  // npm install emailjs-com sign up for emailjs
  //    const form = useRef();

  //    const sendEmail = (e) => {
  //      e.preventDefault();

  //      emailjs
  //        .sendForm(
  //          "YOUR_SERVICE_ID",
  //          "YOUR_TEMPLATE_ID",
  //          form.current,
  //          "YOUR_USER_ID"
  //        )
  //        .then(
  //          (result) => {
  //            console.log(result.text);
  //            alert("Message sent successfully!");
  //          },
  //          (error) => {
  //            console.log(error.text);
  //            alert("Failed to send the message. Please try again.");
  //          }
  //        );

  //      e.target.reset();
  //    };

  return (
    <>
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
            <p>
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
        <form className="message-form">
          <div className="message-form-inputs">
            <input
              className="input-field input-text"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="input-field input-email"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              className="input-field input-tel"
              type="tel"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="message-form-message">
            <textarea
              className="input-field input-message"
              placeholder="Your Message"
            />
          </div>
          <button className="send-message-btn">Send Message</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
