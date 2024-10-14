import "../styles/top.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
