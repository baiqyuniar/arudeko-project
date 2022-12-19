import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  return (
    <section
      id="hero"
      className=" px-4 py-8 mx-auto body-font font-poppins shadow-sm sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8"
    >
      <Hero />
    </section>
  );
};

export default LandingPage;
