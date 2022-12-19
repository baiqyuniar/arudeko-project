import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];
const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="body-font font-poppins shadow-sm container mx-auto pt-32 mb-8"
    >
      <div className="container mx-auto">
        <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-4">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 lg:mt-12 sm:text-4xl md:mx-auto">
            {t("proyek kami")}
          </h2>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl ">
                {t("proyek")} 1
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero1.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                {t("proyek")} 2
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero2.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                {t("proyek")} 3
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero3.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                {t("proyek")} 4
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero4.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                {t("proyek")} 5
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero5.png")}
                alt=""
              />
            </div>
            <div>
              <p className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                {t("proyek")} 6
              </p>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:scale-105 transition duration-300 transform"
                src={require("../assets/hero6.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
