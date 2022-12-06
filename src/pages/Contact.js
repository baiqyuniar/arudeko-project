import React from "react";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="content" className="bg-split">
        <div>
          <div className="container mx-auto">
            <h1 className="text-white pt-24 text-base lg:text-6xl">
              Contact Us
            </h1>
          </div>
          <ContactBox />
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
