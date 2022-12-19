import React from "react";
import { useTranslation } from "react-i18next";

const ProfilArsitek = () => {
  const { t } = useTranslation();
  return (
    <section
      id="profil"
      className="body-font font-poppins shadow-sm container mx-auto pt-20 mb-8"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div></div>
            <h2 className="max-w-lg mb-6 uppercase font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Nama Arsitek Interior A
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
                  <form action="" className="grid grid-cols-2 gap-y-6 gap-x-4">
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
                        className="py-1.5 uppercase px-6 w-full sm:w-40 shadow-xl rounded bg-gradient-to-br from-gray-600 to-slate-500 text-lg text-white hover:to-gray-700"
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
  );
};

export default ProfilArsitek;
