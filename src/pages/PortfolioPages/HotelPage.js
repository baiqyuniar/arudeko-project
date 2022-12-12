import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import Hotel from "../../components/portfolio/Portfolio/Hotel";

const HotelPage = () => {
  return (
    <div className="w-full body-font font-poppins shadow-sm">
      <section id="navbar">
        <Navbar />
      </section>

      <section id="news" className="w-full pt-32 mb-8">
        <Hotel />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HotelPage;
