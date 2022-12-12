import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const ProjectsPage = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/proyek";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div className="w-full body-font font-poppins shadow-sm">
      <section id="navbar">
        <nav className="bg-gray-400 absolute z-50 px-4 mx-auto w-full md:px-24 lg:px-0">
          <div className="container mx-auto flex items-center font-medium justify-between">
            <div className="p-5 md:w-auto w-full flex justify-between">
              <img
                src={Logo}
                alt="logo"
                className="md:w-32 md:h-16 md:cursor-pointer w-32 h-16"
              />
              <div
                className="text-3xl md:hidden right-0"
                onClick={() => setOpen(!open)}
              >
                <AiOutlineMenu
                  name={`${open ? "close" : "menu"}`}
                ></AiOutlineMenu>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8">
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/proyek");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("cek")}
                </a>
              </li>
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/berita");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("berita")}
                </a>
              </li>
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/hubungi");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("hubungi")}
                </a>
              </li>
            </ul>

            <select
              value={lang}
              onChange={handleChange}
              className="bg-gray-400 text-white mb-1 py-4 inline-block uppercase"
            >
              {languages.map((item) => {
                return (
                  <option
                    className="text-white"
                    key={item.value}
                    value={item.value}
                  >
                    {item.text}
                  </option>
                );
              })}
            </select>

            {/* Mobile nav */}
            <ul
              className={`
      md:hidden bg-gray-400 opacity-[0.89] fixed h-auto w-full top-0 bottom-0 py-24 px-12
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
            >
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/proyek");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("cek")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/berita");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("berita")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/hubungi");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("hubungi")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="projects" className="w-full pt-32 mb-8">
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

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default ProjectsPage;
