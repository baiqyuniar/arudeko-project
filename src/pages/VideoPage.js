import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const VideoPage = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/videoperusahaan";
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

      <section id="video" className="w-full pt-28 mb-8">
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="lg:w-1/4 lg:mt-24 mt-16">
            <div className="mx-auto lg:mt-32 py-8 px-4 w-full max-w-7xl bg-white">
              <div className="flex flex-col items-center">
                <div className="max-w-2xl text-center mt-2">
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
                    <span className="text-slate-500">About </span>
                    <span className="text-gray-700">Us</span>
                  </h2>
                </div>

                <div className="mt-10 w-full max-w-xl">
                  <ul className="flex flex-col space-y-5">
                    <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                      <div className="mx-auto w-full max-w-md">
                        <div className="flex flex-col sm:flex-row items-center sm:space-x-10">
                          <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                          <p className="text-base text-gray-400 font-bold uppercase">
                            {t("tentang")}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                      <div className="mx-auto w-full max-w-md">
                        <div className="flex flex-col sm:flex-row items-center sm:space-x-10">
                          <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                          <p className="text-base text-gray-400 font-bold uppercase">
                            {t("video perusahaan")}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                {t("video perusahaan")}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="mx-auto lg:max-w-2xl lg:grid lg:grid-cols-2 gap-4">
              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/hero1.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/hero2.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/hero3.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/hero4.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
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

export default VideoPage;