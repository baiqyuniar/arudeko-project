import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const [lang, setLang] = useState(" ");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
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
                <a href="/" className="text-white py-4 inline-block">
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a href="/proyek" className="text-white py-4 inline-block">
                  {t("cek")}
                </a>
              </li>
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a href="/berita" className="text-white py-4 inline-block">
                  {t("berita")}
                </a>
              </li>
              <li className="hover:bg-slate-600 hover:rounded-lg">
                <a href="/hubungi" className="text-white py-4 inline-block">
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
                <a href="/" className="text-white py-7 px-3 inline-block">
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li>
                <a href="/proyek" className="text-white py-7 px-3 inline-block">
                  {t("cek")}
                </a>
              </li>
              <li>
                <a href="/berita" className="text-white py-7 px-3 inline-block">
                  {t("berita")}
                </a>
              </li>
              <li>
                <a
                  href="/hubungi"
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("hubungi")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section
        id="hero"
        className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8"
      >
        <Hero />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;