import Navbar from "../navbar";
import Footer from "../footer";
import Top from "../top";
import { useNavigate } from "react-router-dom";
import "../../styles/error-page.css";
import errorImg from "../../assets/error-404.png";

const Error404 = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <Top />
      <Navbar />
      <div className="error-page">
        <div className="error-page__image-container">
          <img
            className="error-page__image"
            src={errorImg}
            alt="Woman looking out of a 404 number"
          />
        </div>
        <div className="error-page__description">
          <h1 className="error-page__title">Oops... Page Not Found</h1>
          <p className="error-page__message">
            Sorry, we could not find that page. Try the homepage instead.
          </p>
          <button className="error-page__button" onClick={handleNavigateHome}>
            Back to homepage
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
