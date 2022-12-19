import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import publikList from "../PortfolioList/publikList";

const Publik = () => {
  const [mainPicture, setMainPicture] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <div className="mx-auto lg:mt-12 px-4 w-full max-w-7xl bg-white text-gray-700">
        <h1 className="text-3xl lg:text-4xl font-bold text-center tracking-widest uppercase my-4">
          {t("Portofolio Kami")}
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="py-8 w-full lg:mt-12 flex flex-col items-center">
            <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
              <img
                src={publikList.pictures[mainPicture].src}
                alt={publikList.pictures[mainPicture].alt}
                className="object-fill w-auto h-auto rounded-lg"
              />
            </div>

            <div className="mt-6 mx-auto">
              <ul className="grid grid-flow-col auto-cols-fr gap-4">
                {publikList.pictures.slice(0, 4).map((picture, index) => (
                  <li
                    key={picture.alt}
                    className={`col-span-1 p-1 w-16 rounded border-2 ${
                      index === mainPicture
                        ? "border-yellow-600"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      className="block h-full rounded overflow-hidden"
                      onClick={() => setMainPicture(index)}
                    >
                      <img
                        src={picture.src}
                        alt={picture.alt}
                        className="object-contain rounded-lg"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:py-8 w-full flex flex-col items-center justify-center ">
          <div className="order-3 lg:order-1 pb-5 sm:px-6">
            <h1 className="hidden lg:block text-4xl text-gray-700 font-bold text-center tracking-wide">
              {t(publikList.name)}
            </h1>
            <p className="mt-10 text-xl text-gray-500">
              {publikList.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publik;
