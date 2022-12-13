import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/tentangkami";
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
              <li className="hover:bg-slate-600 hover:cursor-pointer px-2 hover:rounded-lg">
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

              <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
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
              {/* <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/berita");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("berita")}
                </a>
              </li> */}
              <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
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

      <section id="news" className="w-full pt-32 mb-8">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-2/4 lg:mt-24 mt-16">
            <div className="mx-auto lg:mt-32 py-8 px-4 w-full max-w-7xl bg-white">
              <div className="flex flex-col items-center">
                <div className="max-w-2xl text-center mt-2">
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
                    {t("tentang")}
                  </h2>
                </div>

                <div className="mt-10 w-full max-w-xl">
                  <ul className="flex flex-col space-y-5">
                    <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                      <div className="mx-auto w-full max-w-md">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/tentangkami");
                          }}
                          className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                        >
                          <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                          <p className="text-base text-gray-400 font-bold uppercase">
                            {t("tentang")}
                          </p>
                        </a>
                      </div>
                    </li>

                    <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                      <div className="mx-auto w-full max-w-md">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/videoperusahaan");
                          }}
                          className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                        >
                          <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                          <p className="text-base text-gray-400 font-bold uppercase">
                            {t("video perusahaan")}
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:ml-20 mx-auto">
            <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl ">
              <h2 className="max-w-lg my-8 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>
                {t("visi & misi")}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">{t("intro")}</p>
            </div>

            <div className="flex flex-col lg:flex-row">
              <img
                className="shadow-md mx-auto rounded-md my-4 w-3/4 h-auto lg:w-auto"
                src={require("../assets/AboutUs.png")}
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="uppercase text-2xl font-bold">
                  {t("misi kami")}
                </h1>
                <p className="text-xl mx-8">{t("misi")}</p>
              </div>
            </div>
            <div className="my-8">
              <h1 className="text-2xl text-center font-bold uppercase my-4">
                {t("visi kami")}
              </h1>
              <p className="text-xl mx-12">{t("visi")}</p>
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

export default AboutPage;
