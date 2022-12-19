import React from "react";
import Content from "./Content";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Whatsapp from "./Whatsapp";

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <Content />
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Layout;
