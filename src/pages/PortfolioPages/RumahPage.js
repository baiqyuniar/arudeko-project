import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Rumah from "../../components/portfolio/Portfolio/Rumah";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import NavbarDrop from "../../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const RumahPage = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/rumah";
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
              <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
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
        <div className="container mx-auto flex lg:flex-row flex-col">
          <div className="mt-16 w-full max-w-xl">
            <ul className="flex flex-col space-y-5">
              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/rumah");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Rumah")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/hotel");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Hotel")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/kantor");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Kantor")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/lobby");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Lobi Apartemen")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/studio");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Kamar Type Studio")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/kamar");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Kamar Type 1 BR")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/coffee");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      Coffee Morning
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/bedroom");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Kamar Tidur")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tamanperumahan");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Landskap Taman Perumahan")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tamankecamatan");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Landskap Taman Perumahan")}
                    </p>
                  </a>
                </div>
              </li>

              <li className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200">
                <div className="mx-auto w-full max-w-md">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/ruangpublik");
                    }}
                    className="flex hover:cursor-pointer flex-col sm:flex-row items-center sm:space-x-10"
                  >
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t("Landskap Ruang Publik")}
                    </p>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <Rumah />
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default RumahPage;
