import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import sliderData from "../components/slideHero";

const HomeScreen = () => {
  const navigate = useNavigate();
  const props = {
    duration: 5000,
    autoplay: true,
    arrows: false,
    infinite: true,
  };

  return (
    <div className="w-full body-font font-poppins shadow-sm">
      <section id="header">
        <Header />
      </section>

      {/* <section
        id="hero"
        className="w-full h-full bg-hero flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="container pt-10 sm:pt-20 w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center  items-center text-white">
            <div className="p-5 flex flex-col justify-center items-center bg-black opacity-70 rounded-2xl lg:items-start text-center lg:text-left">
              <h1 className="py-10 text-2xl sm:text-5xl font-light tracking-wide leading-tight">
                Arsitektur, <br />
                Bangunan, <br />
                Interior kantor, hunian, dan ruko
              </h1>
            </div>
            <div className="my-4 bg-black bg-clip-text">
              <p className="text-2xl font-bold text-white tracking-wide">
                PT. Abiudaya Raya Utama
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/img1.png")}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/img2.png")}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/AO2.png")}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/AR1.png")}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/AR3.png")}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={require("../assets/AH1.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-14 mb-24 bg-[#F2D07A] p-5 w-full grid grid-cols-12 sm:grid-cols-4 gap-2 text-xs md:text-sm">
          <div
            onClick={() => navigate("/hotel")}
            className="cursor-pointer col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mt-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12.484 24v-5.991l2.224 2.352 4.042-2.12v2.416l-6.266 3.343zm-1-.003l-6.26-3.34v-2.465l4.088 2.245 2.172-2.385v5.945zm-3.7-15.313c.639.777 1.27 1.934 1.459 3.18l-3.208 1.77 5.449 2.891v.042l-2.381 2.614-4.599-2.525-.001.001-1.533-.883 2.254-2.481-2.254-2.121 4.814-2.488zm8.431.031l4.789 2.499-2.255 2.078.001.001 2.254 2.59-1.604.888-4.485 2.353-2.431-2.571v-.003l5.457-2.916-3.169-1.748c.194-1.321.695-2.266 1.443-3.171zm-3.967 5.285h-.521c-.137 0-.269-.046-.359-.127l-.693-.456h2.625l-.693.456c-.09.081-.221.127-.359.127zm1.077-1.167h-2.659c-.161 0-.292-.13-.292-.291 0-.161.131-.292.292-.292h2.659c.161 0 .291.131.291.292 0 .161-.13.291-.291.291zm.288-1.166h-3.251c0-2.304-1.874-3.301-1.874-5.383 0-2.172 1.748-3.367 3.498-3.367 1.75 0 3.502 1.197 3.502 3.367 0 2.082-1.875 3.047-1.875 5.383zm-6.267-5.334h-1.775v-1h1.821c-.039.22-.06.446-.06.676l.014.324zm11.058 0h-1.763l.013-.324c0-.23-.02-.456-.059-.676h1.809v1zm-9.998-3.02c-.227.248-.424.52-.584.811l-1.441-1.023.579-.815 1.446 1.027zm7.17-.005l1.439-1.022.579.815-1.432 1.018c-.161-.291-.359-.563-.586-.811zm-5.307-1.223c-.319.115-.621.261-.901.435l-.773-1.58.898-.44.776 1.585zm3.439-.004l.774-1.581.898.44-.77 1.574c-.281-.172-.583-.318-.902-.433zm-1.22-.272c-.163-.015-.328-.023-.495-.023-.171 0-.339.008-.505.024v-1.81h1v1.809z" />
            </svg>
            <span className="text-center font-medium my-4">Products</span>
          </div>

          <div
            onClick={() => navigate("/teams")}
            className="cursor-pointer col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
          >
            <svg
              className="h-10 w-10 mt-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992l-.594.391c-.077.069-.19.109-.307.109h-.447c-.118 0-.231-.04-.308-.109l-.594-.391h2.25zm10.875-.5h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-18 0h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm7.146-.5c.138 0 .25.112.25.25s-.112.25-.25.25h-2.279c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886s-2.999 1.024-2.999 2.886c0 1.784 1.607 2.639 1.607 4.614h2.786zm7.607-6c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-18 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm12.87 2.385l1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zm9.369-1.885v1h-1.501c.01-.335-.02-.672-.093-1h1.594zm-9.406 0c-.072.327-.102.663-.092.997v.003h-1.502v-1h1.594zm6.928-1.714l1.242-.882.579.816-1.252.888c-.146-.291-.335-.566-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046l.663-1.345.897.443-.664 1.345c-.278-.184-.58-.332-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zm-2.587-9.054v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-3.5 8.846c-.334-.039-.654-.041-1-.001v-1.529h1v1.53zm2.5-2.53h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414zm-3-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z" />
            </svg>
            <span className="text-center font-medium my-4">Team</span>
          </div>

          <div
            onClick={() => navigate("/project")}
            className="cursor-pointer col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
          >
            <svg
              className="h-10 w-10 mt-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 11.25c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-.537c-.151-.135-.228-.321-.228-.509 0-.375.304-.682.683-.682.162 0 .324.057.455.173l.746.665 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.307.684.682 0 .163-.059.328-.179.459l-2.116 2.313c-.134.147-.319.222-.504.222-.162 0-.325-.057-.455-.173zm11.772-2.711c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-1.613v.001c-.151-.135-.228-.322-.228-.509 0-.376.304-.682.683-.682.162 0 .324.057.455.173l.746.664 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.308.684.682 0 .164-.059.329-.179.46l-2.116 2.313c-.134.147-.319.221-.504.221-.162 0-.325-.057-.455-.173zm11.772-1.639c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75z"
                fill-rule="nonzero"
              />
            </svg>
            <span className="text-center font-medium my-4">Project</span>
          </div>

          <div
            onClick={() => navigate("/video")}
            className="cursor-pointer col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-700 text-black uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 mt-2"
            >
              <path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z" />
            </svg>
            <span className="text-center font-medium my-4">Video</span>
          </div>
        </div>
      </section> */}

      <section id="hero" className="w-full">
        <div className="absolute z-10 container mx-auto lg:mt-12 left-1/2 transform -translate-x-1/2">
          <div className="mx-auto w-full flex flex-col lg:flex-row">
            <div className="flex flex-row">
              <div className="w-full grid grid-col-1 mt-24 lg:mt-16 md:grid-row-2 justify-center  items-center text-white">
                <div className="lg:px-5 flex flex-col justify-center items-center bg-black opacity-70 rounded-2xl lg:items-start text-center lg:text-left">
                  <h1 className="py-4 lg:text-4xl md:py-4 md:text-2xl sm:text-xl md:font-light font-bold tracking-wide leading-tight">
                    Arsitektur, <br className="" />
                    Bangunan, <br className="" />
                    Interior kantor, hunian, dan ruko
                  </h1>
                  <div className="my-0 w-full hidden md:block rounded-full">
                    <p className="text-2xl  text-center font-bold text-white tracking-wide">
                      PT. Abiudaya Raya Utama
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col justify-center items-center overflow-hidden">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-24 lg:block hidden">
                  <div class="lg:flex lg:flex-wrap -m-1 md:-m-2">
                    <div class="flex  flex-wrap w-1/2">
                      <div class="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/img1.png")}
                        />
                      </div>
                      <div class="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/img2.png")}
                        />
                      </div>
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/AO2.png")}
                        />
                      </div>
                    </div>

                    <div class="flex flex-wrap w-1/2">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/AR1.png")}
                        />
                      </div>
                      <div class="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/AR3.png")}
                        />
                      </div>
                      <div class="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={require("../assets/AH1.png")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-full flex flex-col justify-center items-center overflow-hidden">
              <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-24">
                <div class="lg:flex lg:flex-wrap -m-1 md:-m-2 hidden">
                  <div class="flex flex-wrap w-1/2">
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/img1.png")}
                        />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/img2.png")}
                      />
                    </div>
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/AO2.png")}
                      />
                    </div>
                  </div>

                  <div class="flex flex-wrap w-1/2">
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/AR1.png")}
                      />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/AR3.png")}
                      />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src={require("../assets/AH1.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="h-auto mx-auto bg-[#e3dac4] rounded-lg md:w-3/4 md:h-2/4 lg:grid lg:grid-cols-4 py-2 gap-2 hidden text-xs md:text-sm ">
            <div
              onClick={() => navigate("/hotel")}
              className="cursor-pointer  col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mt-2"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="currentColor"
              >
                <path d="M12.484 24v-5.991l2.224 2.352 4.042-2.12v2.416l-6.266 3.343zm-1-.003l-6.26-3.34v-2.465l4.088 2.245 2.172-2.385v5.945zm-3.7-15.313c.639.777 1.27 1.934 1.459 3.18l-3.208 1.77 5.449 2.891v.042l-2.381 2.614-4.599-2.525-.001.001-1.533-.883 2.254-2.481-2.254-2.121 4.814-2.488zm8.431.031l4.789 2.499-2.255 2.078.001.001 2.254 2.59-1.604.888-4.485 2.353-2.431-2.571v-.003l5.457-2.916-3.169-1.748c.194-1.321.695-2.266 1.443-3.171zm-3.967 5.285h-.521c-.137 0-.269-.046-.359-.127l-.693-.456h2.625l-.693.456c-.09.081-.221.127-.359.127zm1.077-1.167h-2.659c-.161 0-.292-.13-.292-.291 0-.161.131-.292.292-.292h2.659c.161 0 .291.131.291.292 0 .161-.13.291-.291.291zm.288-1.166h-3.251c0-2.304-1.874-3.301-1.874-5.383 0-2.172 1.748-3.367 3.498-3.367 1.75 0 3.502 1.197 3.502 3.367 0 2.082-1.875 3.047-1.875 5.383zm-6.267-5.334h-1.775v-1h1.821c-.039.22-.06.446-.06.676l.014.324zm11.058 0h-1.763l.013-.324c0-.23-.02-.456-.059-.676h1.809v1zm-9.998-3.02c-.227.248-.424.52-.584.811l-1.441-1.023.579-.815 1.446 1.027zm7.17-.005l1.439-1.022.579.815-1.432 1.018c-.161-.291-.359-.563-.586-.811zm-5.307-1.223c-.319.115-.621.261-.901.435l-.773-1.58.898-.44.776 1.585zm3.439-.004l.774-1.581.898.44-.77 1.574c-.281-.172-.583-.318-.902-.433zm-1.22-.272c-.163-.015-.328-.023-.495-.023-.171 0-.339.008-.505.024v-1.81h1v1.809z" />
              </svg>
              <span className="text-center font-medium my-4">Products</span>
            </div>

            <div
              onClick={() => navigate("/teams")}
              className="cursor-pointer col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
            >
              <svg
                className="h-10 w-10 mt-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992l-.594.391c-.077.069-.19.109-.307.109h-.447c-.118 0-.231-.04-.308-.109l-.594-.391h2.25zm10.875-.5h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-18 0h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm7.146-.5c.138 0 .25.112.25.25s-.112.25-.25.25h-2.279c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886s-2.999 1.024-2.999 2.886c0 1.784 1.607 2.639 1.607 4.614h2.786zm7.607-6c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-18 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm12.87 2.385l1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zm9.369-1.885v1h-1.501c.01-.335-.02-.672-.093-1h1.594zm-9.406 0c-.072.327-.102.663-.092.997v.003h-1.502v-1h1.594zm6.928-1.714l1.242-.882.579.816-1.252.888c-.146-.291-.335-.566-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046l.663-1.345.897.443-.664 1.345c-.278-.184-.58-.332-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zm-2.587-9.054v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-3.5 8.846c-.334-.039-.654-.041-1-.001v-1.529h1v1.53zm2.5-2.53h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414zm-3-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z" />
              </svg>
              <span className="text-center font-medium my-4">Team</span>
            </div>

            <div
              onClick={() => navigate("/project")}
              className="cursor-pointer col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-700 text-black uppercase"
            >
              <svg
                className="h-10 w-10 mt-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 11.25c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-.537c-.151-.135-.228-.321-.228-.509 0-.375.304-.682.683-.682.162 0 .324.057.455.173l.746.665 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.307.684.682 0 .163-.059.328-.179.459l-2.116 2.313c-.134.147-.319.222-.504.222-.162 0-.325-.057-.455-.173zm11.772-2.711c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-1.613v.001c-.151-.135-.228-.322-.228-.509 0-.376.304-.682.683-.682.162 0 .324.057.455.173l.746.664 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.308.684.682 0 .164-.059.329-.179.46l-2.116 2.313c-.134.147-.319.221-.504.221-.162 0-.325-.057-.455-.173zm11.772-1.639c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75z"
                  fill-rule="nonzero"
                />
              </svg>
              <span className="text-center font-medium my-4">Project</span>
            </div>

            <div
              onClick={() => navigate("/video")}
              className="cursor-pointer col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-700 text-black uppercase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="transparent"
                className="h-10 w-10 mt-2"
              >
                <path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z" />
              </svg>
              <span className="text-center font-medium my-4">Video</span>
            </div>
          </div>
        </div>

        <Fade {...props}>
          {sliderData.map((sliderData, index) => (
            <div className="items-center md:mt-22 h-auto mt-[87px]" key={index}>
              <div className="relative">
                <img
                  className="object-cover w-full h-auto rounded shadow-lg"
                  src={sliderData.picture}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Fade>
      </section>

      <section id="news">
        <div className="flex justify-center items-center">
          <div className="bg-[#906A0B] absolute z-10 sm:block hidden flex items-center justify-center lg:w-[600px] w-[300px] md:h-16 h-8 rounded-xl mt-12 mb-12">
            <h2 className="px-3 text-xl lg:mt-4 py-1 text-center md:text-2xl text-white font-bold uppercase tracking-widest font-extrabold  antialiased">
              Latest News
            </h2>
          </div>
        </div>
        <div class="container px-5 py-4 md:py-24 md:mt-4 mt-8 mx-auto wrapper">
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a href="/" aria-label="View Item">
              <div className="overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80 rounded-lg"
                  src={require("../assets/AO1.png")}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Sejarah PT. Abiudaya Raya Utama
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    PT. Abiudaya Raya Utama didirikan sejak tahun 2021. Dibentuk
                    pertama kali di JL.Barata Raya, Tangerang dengan lingkup
                    kerja sebagai interior Desain dan pembangunanya, dengan CEO
                    ialah Lucy Farida Fatmasari
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={require("../assets/AR1.png")}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Jenis Proyek
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Proyek yang dikerjakan meliputi, rumah, kantor, apartment,
                    dan hotel. Sejak tahun 2021 PT . Abiudaya Raya Utama telah
                    mengembangkan sayap perkerjaan dilingkup perkerjaan
                    arsitektur, bangunan, interior kantor, hunian, dan ruko.
                    Adapula PT.Abiudaya Raya Utama memiliki workshop didaerah
                    Karang Tengah, Kota Tangerang.
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80 rounded-lg"
                  src={require("../assets/coffee1.png")}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Sejarah PT. Abiudaya Raya Utama
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    PT. Abiudaya Raya Utama didirikan sejak tahun 2021. Dibentuk
                    pertama kali di JL.Barata Raya, Tangerang dengan lingkup
                    kerja sebagai interior Desain dan pembangunanya, dengan CEO
                    ialah Lucy Farida Fatmasari
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80 rounded-lg"
                  src={require("../assets/br1.png")}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Jenis Proyek
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Proyek yang dikerjakan meliputi, rumah, kantor, apartment,
                    dan hotel. Sejak tahun 2021 PT . Abiudaya Raya Utama telah
                    mengembangkan sayap perkerjaan dilingkup perkerjaan
                    arsitektur, bangunan, interior kantor, hunian, dan ruko.
                    Adapula PT.Abiudaya Raya Utama memiliki workshop didaerah
                    Karang Tengah, Kota Tangerang.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center">
            <a
              href="/news"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              More News
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomeScreen;
