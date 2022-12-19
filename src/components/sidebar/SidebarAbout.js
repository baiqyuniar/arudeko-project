import React from "react";
import { useTranslation } from "react-i18next";

const SidebarAbout = () => {
  const menu = [
    {
      id: 1,
      name: "About Us",
    },
    {
      id: 2,
      name: "Company Video",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="mx-auto lg:mt-32 py-8 px-4 w-full max-w-7xl bg-white">
      <div className="flex flex-col items-center">
        <div className="max-w-2xl text-center mt-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
            <span className="text-slate-500">{t("Tentang")} </span>
            <span className="text-gray-700">{t("Kami")}</span>
          </h2>
        </div>

        <div className="mt-10 w-full max-w-xl">
          <ul className="flex flex-col space-y-5">
            {menu.map((menu) => (
              <li
                key={menu.id}
                className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-indigo-200"
              >
                <div className="mx-auto w-full max-w-md">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-10">
                    <span className="flex-shrink-0 inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-gray-600 bg-opacity-20 sm:bg-opacity-100 group-hover:bg-opacity-100" />
                    <p className="text-base text-gray-400 font-bold uppercase">
                      {t(menu.name)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAbout;
