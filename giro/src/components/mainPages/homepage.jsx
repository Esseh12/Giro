import "../../styles/homepage.css";
import Top from "../top";
import Navbar from "../navbar";
import Stats from "../stats";
import Footer from "../footer";

const Homepage = () => {
  return (
    <>
      <Top />
      <Navbar />
      {/* homepage styling starts here */}
      <div>
        {/* top of homepage */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* flash sales container */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* browse by categories section */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* best selling product section */}
        <section>
          <div></div>
          <div></div>
        </section>
        {/* store add section */}
        <section></section>
        {/* explore our product section */}
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
        {/* new arrivals */}
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
        {/* stats section */}
        <Stats />
      </div>
      {/* homepage styling hends here */}
      <Footer />
    </>
  );
};

export default Homepage;
