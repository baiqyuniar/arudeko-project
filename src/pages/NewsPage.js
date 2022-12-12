import React, { useState } from "react";
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

const NewsPage = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/berita";
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

      <section id="news" className="w-full pt-32 mb-8">
        <div className="container mx-auto">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 lg:mt-12">
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
              {t("kegiatan & berita")}
            </h2>
          </div>

          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 lg:mt-12 sm:text-4xl md:mx-auto">
                  {t("kegiatan")}
                </h2>
              </div>
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="w-full mt-4 px-8">{t("event")}</p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
                  {t("berita populer")}
                </h2>
              </div>
              <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
                <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
                <p className="text-base text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at dolor id urna auctor dictum non ut tellus.
                  Pellentesque iaculis sit amet orci a venenatis. Proin placerat
                  convallis consequat. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Quisque aliquam risus vel ipsum tempor
                  eleifend nec a neque.
                </p>
              </div>
              <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
                <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
                <p className="text-base text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at dolor id urna auctor dictum non ut tellus.
                  Pellentesque iaculis sit amet orci a venenatis. Proin placerat
                  convallis consequat. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Quisque aliquam risus vel ipsum tempor
                  eleifend nec a neque.
                </p>
              </div>
              <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
                <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
                <p className="text-base text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at dolor id urna auctor dictum non ut tellus.
                  Pellentesque iaculis sit amet orci a venenatis. Proin placerat
                  convallis consequat. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Quisque aliquam risus vel ipsum tempor
                  eleifend nec a neque.
                </p>
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

export default NewsPage;
