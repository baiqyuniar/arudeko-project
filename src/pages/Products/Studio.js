import React from "react";
import Header from "../../components/Header";
import SidebarProduct from "../../components/SidebarProduct";
import Footer from "../../components/Footer";
import Studio from "../../components/Products/Studio";

const StudioPage = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="banner">
        <div className="container flex pt-[87px]">
          <img src={require("../../assets/AH1.png")} className="h-64" />
          <img src={require("../../assets/AH2.png")} className="h-64" />
          <img src={require("../../assets/AR1.png")} className="h-64" />
          <img src={require("../../assets/AR2.png")} className="h-64" />
          <img src={require("../../assets/AO1.png")} className="h-64" />
          <img src={require("../../assets/AR3.png")} className="h-64" />
          <img
            src={require("../../assets/img1.png")}
            className="h-64 w-[111px]"
          />
          {/* <img src={require("../../assets/img2.png")} className="h-64" />
          <img src={require("../../assets/img3.png")} className="h-64 w-20" /> */}
        </div>
      </section>

      <section id="content" className="w-full my-12">
        <div className="container mx-auto flex">
          <SidebarProduct />
          <Studio />
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default StudioPage;
