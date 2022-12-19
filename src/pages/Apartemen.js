import React from "react";
import { useTranslation } from "react-i18next";

const Apartemen = () => {
  const { t } = useTranslation();
  return (
    <section
      id="apartemen"
      className="container mx-auto body-font font-poppins shadow-sm pt-20 mb-8"
    >
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
                Apartemen B
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
  );
};

export default Apartemen;
