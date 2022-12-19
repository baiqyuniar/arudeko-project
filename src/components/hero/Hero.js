import React from "react";
import { Slide } from "react-slideshow-image";
import images from "./imageSlider";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const props = {
    duration: 5000,
    autoplay: true,
    arrows: false,
    infinite: true,
  };

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-24 flex flex-col">
      <div className="flex flex-col items-center justify-around w-full lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-center text-base font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              PT ABIUDAYA RAYA UTAMA
            </h2>
            <img
              className="object-cover mx-auto w-auto h-64 shadow-xl rounded-md lg:h-96 "
              src={require("../../assets/ceo1.webp")}
              alt=""
            />
          </div>
        </div>

        <div className="relative lg:w-1/2 hidden lg:block">
          <Slide {...props}>
            {images.map((sliderData, index) => (
              <img
                className="object-fill shadow-lg rounded-xl w-full lg:h-[500px] hidden md:block"
                src={sliderData.picture}
                alt=""
              />
            ))}
          </Slide>
        </div>
      </div>

      <div className="py-4 w-full lg:py-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/produk");
            }}
            className="px-4 py-8 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("produk")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.25 17.322l-2.25-1.221 2.234-3.067-2.234-1.96 4.713-2.562c.204.231.41.504.604.807l-3.584 1.948 1.181 1.037 3.058-1.686c.119.314.216.641.282.977l-3.261 1.801 6.018 3.109 5.989-3.105-3.152-1.745c.061-.347.144-.667.248-.968l2.933 1.615 1.234-1.095-3.5-1.855c.183-.275.388-.54.614-.803l4.623 2.449-2.261 2.008.011.006 2.25 3.081-2.25 1.224v3.087l-6.75 3.596-6.75-3.596v-3.082zm7.246-.094v5.377l5.255-2.799v-1.946l-3.501 1.905-1.754-2.537zm-6.247.636v1.942l5.248 2.796v-5.373l-1.747 2.536-3.501-1.901zm-1.772-2.096l4.96 2.692 1.099-1.594-4.983-2.575-1.076 1.477zm8.988 1.107l1.096 1.585 4.961-2.698-1.073-1.471-4.984 2.584zm-1.192-2.915h-.521c-.136 0-.268-.046-.358-.127l-.692-.455h2.621l-.692.455c-.089.081-.221.127-.358.127zm1.075-1.164h-2.655c-.161 0-.291-.129-.291-.29 0-.161.13-.291.291-.291h2.655c.161 0 .291.13.291.291 0 .161-.13.29-.291.29zm.287-1.163h-3.245c0-2.297-1.872-3.291-1.872-5.367 0-2.166 1.746-3.358 3.493-3.358 1.748 0 3.497 1.194 3.497 3.358 0 2.076-1.872 3.038-1.873 5.367zm-.901-.997c.188-.954.624-1.689 1.018-2.356.424-.714.757-1.279.757-2.014 0-1.55-1.257-2.361-2.498-2.361-1.239 0-2.495.811-2.495 2.361 0 .739.337 1.312.763 2.035.392.664.822 1.396 1.012 2.335h1.443zm-5.357-4.321h-1.772v-.997h1.818c-.039.219-.059.445-.059.674l.013.323zm11.043 0h-1.761l.014-.323c0-.229-.02-.455-.06-.674h1.807v.997zm-9.983-3.011c-.227.247-.424.518-.584.809l-1.439-1.021.578-.813 1.445 1.025zm7.159-.005l1.437-1.02.578.813-1.43 1.015c-.161-.29-.358-.561-.585-.808zm-5.3-1.22c-.318.115-.619.261-.899.433l-.772-1.575.897-.438.774 1.58zm3.435-.004l.773-1.576.896.438-.769 1.57c-.28-.172-.581-.318-.9-.432zm-1.219-.271c-.162-.016-.327-.024-.494-.024-.17 0-.339.009-.505.025v-1.805h.999v1.804z" />
              </svg>
            </div>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/sipilA");
            }}
            className="px-4 py-8 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("profil")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
              </svg>
            </div>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/proyek");
            }}
            className="px-4 py-8 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("proyek")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" />
              </svg>
            </div>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/apartement");
            }}
            className="px-8 py-4 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("apartemen")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z" />
              </svg>
            </div>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/videoperusahaan");
            }}
            className="px-4 py-8 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("video")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3zm15 0v-19h-14v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zm-16 4v-4h-3v4h3zm5-1.2l5.941-3.3-5.941-3.3v6.6zm11-7.8v4h3v-4h-3zm-16 4v-4h-3v4h3zm16-9v4h3v-4h-3zm-16 4v-4h-3v4h3z" />
              </svg>
            </div>
          </div>

          <div className="px-8 py-4 bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm">
            <p className="inline-block mb-3 flex items-center justify-center text-center text-base font-bold leading-5 text-black transition-colors duration-200">
              {t("pesan")}
            </p>
            <div className="w-16 h-16 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
              >
                <path d="M17.996 23h-17.99l-.005-1.167c-.006-1.646-.011-3.198 2.512-3.782 1.837-.426 3.263-1.231 3.634-2.052.154-.342.127-.696-.082-1.082-1.72-3.185-2.044-5.985-.911-7.884.77-1.292 2.173-2.033 3.847-2.033 1.662 0 3.055.73 3.822 2.002 1.132 1.876.818 4.685-.884 7.91-.206.391-.229.75-.071 1.095.374.819 1.796 1.622 3.62 2.044 2.526.585 2.519 2.147 2.512 3.801l-.004 1.148zm-16.994-1h15.998v-.15c.008-1.799-.074-2.44-1.736-2.825-.818-.189-3.543-.935-4.306-2.601-.287-.63-.254-1.314.097-1.979 1.531-2.902 1.855-5.362.912-6.926-.59-.979-1.644-1.519-2.966-1.519-1.333 0-2.394.549-2.988 1.545-.946 1.585-.614 4.034.932 6.896.357.661.396 1.342.113 1.969-.755 1.673-3.497 2.425-4.32 2.615-1.661.385-1.743 1.021-1.737 2.802l.001.173zm13.147-11c.364-.902.642-1.884.618-2.85-.495-.718-.766-1.6-.766-2.502 0-2.574 2.243-4.669 5-4.669s5 2.095 5 4.669c0 2.237-1.898 4.651-4.966 4.651-.471 0-.953-.058-1.439-.174-.604.271-2.185.932-3.447.875zm4.852-9.021c-2.206 0-4 1.646-4 3.669 0 .747.563 1.95.749 2.21.011.339-.03 1.382-.269 2.032.745-.211 1.605-.596 1.952-.795.492.134 1.151.204 1.602.204 2.449 0 3.966-1.895 3.966-3.651 0-2.023-1.794-3.669-4-3.669zm-.001.374l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-.5 3.52l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698z" />
              </svg>
            </div>
          </div>

          {/* <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/hubungi");
            }}
            className="px-4 py-8  bg-gray-400 rounded-md opacity-80 hover:bg-slate-400 hover:cursor-pointer border rounded shadow-sm"
          >
            <div className="w-16 h-16 mx-auto mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#f2faff"
                  d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"
                ></path>
                <path
                  fill="#788b9c"
                  d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"
                ></path>
                <path
                  fill="#79ba7e"
                  d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"
                ></path>
                <path
                  fill="#fff"
                  d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"
                ></path>
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
