import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarAbout from "../components/SidebarAbout";

const CompanyVideo = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="banner">
        <div className="lg:py-32 bg-hero">
          {/* <img src={require("../assets/AH1.png")} className="h-64" />
          <img src={require("../assets/AH2.png")} className="h-64" />
          <img src={require("../assets/AR1.png")} className="h-64" />
          <img src={require("../assets/AR2.png")} className="h-64" />
          <img src={require("../assets/AO1.png")} className="h-64" />
          <img src={require("../assets/AR3.png")} className="h-64" />
          <img src={require("../assets/img1.png")} className="h-64 w-[111px]" />
          {/* <img src={require("../assets/img2.png")} className="h-64" /> */}
          {/* <img src={require("../assets/img3.png")} className="h-64 w-20" /> */}
        </div>
      </section>

      <section id="content" className="w-full lg:my-12 my-4">
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="lg:w-2/4 lg:mt-24 mt-16">
            <SidebarAbout />
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
                Company Video
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="mx-auto lg:max-w-2xl lg:grid lg:grid-cols-2 gap-4">
              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/AH1.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/AO2.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/AR5.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl my-4 lg:my-0">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={require("../assets/coffee1.png")}
                  alt=""
                />
                <a
                  href="/"
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                >
                  <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                    <svg
                      className="w-10 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                    </svg>
                  </div>
                </a>
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

export default CompanyVideo;
