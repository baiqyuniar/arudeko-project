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

const Apartemen = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/apartement";
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
              {/* <li className="hover:bg-slate-600 hover:rounded-lg">
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
      <section id="apartemen" className="w-full pt-20 mb-8">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <h5 className="mb-2 lg:mb-8 text-xl font-bold leading-none sm:text-2xl">
                  Apartemen A
                </h5>
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0" />
              </div>

              <div class="w-full mt-4">
                <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                    {t("Form Pengajuan")}
                  </h1>
                  <label
                    for="name"
                    class="text-gray-800 text-sm font-bold items-start leading-tight tracking-normal"
                  >
                    {t("Nama")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Nama"
                  />

                  <label
                    for="name"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    {t("Nomor Identitas")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />

                  <label
                    for="alamat"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    {t("Alamat")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Alamat"
                  />
                  <div class="flex items-center justify-center w-full mt-8">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                      {t("Kirim")}
                    </button>
                    <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      onclick="modalHandler()"
                    >
                      {t("Batal")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <h5 className="mb-2 lg:mb-8 text-xl font-bold leading-none sm:text-2xl">
                  Apartemen A
                </h5>
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0" />
              </div>

              <div class="w-full mt-4">
                <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                    {t("Form Pengajuan")}
                  </h1>
                  <label
                    for="name"
                    class="text-gray-800 text-sm font-bold items-start leading-tight tracking-normal"
                  >
                    {t("Nama")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Nama"
                  />

                  <label
                    for="name"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    {t("Nomor Identitas")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />

                  <label
                    for="alamat"
                    class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    {t("Alamat")}
                  </label>
                  <input
                    id="name"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Alamat"
                  />
                  <div class="flex items-center justify-center w-full mt-8">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                      {t("Kirim")}
                    </button>
                    <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      onclick="modalHandler()"
                    >
                      {t("Batal")}
                    </button>
                  </div>
                </div>
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

export default Apartemen;
