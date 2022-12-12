import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import Lobby from "../../components/portfolio/Portfolio/Lobby";

const LobbyPage = () => {
  return (
    <div className="w-full body-font font-poppins shadow-sm">
      <section id="navbar">
        <Navbar />
      </section>

      <section id="news" className="w-full pt-32 mb-8">
        <Lobby />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default LobbyPage;
