import React, { useState } from "react";
import SidebarAbout from "../components/sidebar/SidebarAbout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section
      id="news"
      className="body-font font-poppins shadow-sm container mx-auto pt-32 mb-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-2/4 lg:mt-24 mt-16">
          <div className="mt-10 w-full max-w-xl">
            <div className="max-w-2xl text-center my-8">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
                {t("Tentang")}{" "}
                <span className="text-2xl sm:text-4xl tracking-wide text-slate-600">
                  {t("Kami")}
                </span>
              </h2>
            </div>
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
              <h1 className="uppercase text-2xl font-bold">{t("misi kami")}</h1>
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
  );
};

export default AboutPage;
