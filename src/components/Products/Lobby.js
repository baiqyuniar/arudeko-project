import React, { useState } from "react";
import lobbyList from "../ProductList/lobbyList";

const Lobby = () => {
  const [mainPicture, setMainPicture] = useState(0);

  return (
    <div>
      <div className="mx-auto lg:mt-12 px-4 w-full max-w-7xl bg-white text-gray-700">
        <h1 className="text-3xl lg:text-4xl font-bold text-center tracking-widest uppercase my-4">
          Our Portfolio
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="py-8 w-full lg:mt-12 flex flex-col items-center">
            <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
              <img
                src={lobbyList.pictures[mainPicture].src}
                alt={lobbyList.pictures[mainPicture].alt}
                className="object-fill w-auto h-auto rounded-lg"
              />
            </div>

            <div className="mt-6 mx-auto">
              <ul className="grid grid-flow-col auto-cols-fr gap-4">
                {lobbyList.pictures.slice(0, 4).map((picture, index) => (
                  <li
                    key={picture.alt}
                    className={`col-span-1 p-1 w-32 rounded border-2 ${
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
              {lobbyList.name}
            </h1>
            <p className="mt-10 text-xl text-gray-500">
              {lobbyList.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
