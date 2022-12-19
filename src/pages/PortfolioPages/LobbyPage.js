import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Lobby from "../../components/portfolio/Portfolio/Lobby";

const LobbyPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section
      id="news"
      className="body-font font-poppins shadow-sm container mx-auto pt-32 mb-8"
    >
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
                    {t("Landskap Taman Kecamatan")}
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
          <Lobby />
        </div>
      </div>
    </section>
  );
};

export default LobbyPage;
