import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import NavbarDrop from "../../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/Footer";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const ProfilArsitek = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/sipilA";
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

      <section id="profil" className="w-full pt-20 mb-8">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div></div>
              <h2 className="max-w-lg mb-6 uppercase font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Nama Arsitek Sipil A
              </h2>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {t("Tarif")}
              </p>
              <div>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                {/* Foto */}
                <div className="flex items-center justify-center mt-4 -mx-4 lg:pl-8">
                  <div className="flex flex-col items-end px-3">
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <img
                      className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <img
                      className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                      src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-8 bg-gray-300 px-2">
                <div className="relative mx-auto max-w-3xl flex flex-col items-center">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wider">
                      {t("Hubungi Arsitek")}
                    </h2>
                  </div>

                  <div className="mt-10 mx-auto w-full max-w-xl">
                    <form
                      action=""
                      className="grid grid-cols-2 gap-y-6 gap-x-4"
                    >
                      <div className="col-span-full">
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="form-input border h-12 px-2 w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        />
                      </div>

                      <div className="col-span-full sm:col-span-1">
                        <label htmlFor="name" className="sr-only">
                          {t("Nama")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder={t("Nama")}
                          className="form-input w-full h-12 px-2 border block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        />
                      </div>

                      <div className="col-span-full sm:col-span-1">
                        <label htmlFor="phone" className="sr-only">
                          {t("Telepon")}
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder={t("Telepon")}
                          className="form-input w-full h-12 px-2 border block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        />
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="message" className="sr-only">
                          {t("Pesan")}
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="6"
                          placeholder={t("Pesan")}
                          className="form-textarea border px-2 resize-none w-full shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 placeholder-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        ></textarea>
                      </div>

                      <div className="col-span-full py-2 mx-auto">
                        <button
                          type="submit"
                          className="py-1.5 px-6 uppercase w-full sm:w-40 shadow-xl rounded bg-gradient-to-br from-gray-600 to-slate-500 text-lg text-white hover:to-gray-700"
                        >
                          {t("Kirim")}
                        </button>
                      </div>
                    </form>
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

export default ProfilArsitek;
