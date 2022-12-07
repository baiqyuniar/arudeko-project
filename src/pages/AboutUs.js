import React from "react";
import Header from "../components/Header";
import SidebarAbout from "../components/SidebarAbout";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="banner">
        <div className="container flex pt-[87px]">
          <img src={require("../assets/AH1.png")} className="h-64" />
          <img src={require("../assets/AH2.png")} className="h-64" />
          <img src={require("../assets/AR1.png")} className="h-64" />
          <img src={require("../assets/AR2.png")} className="h-64" />
          <img src={require("../assets/AO1.png")} className="h-64" />
          <img src={require("../assets/AR3.png")} className="h-64" />
          <img src={require("../assets/img1.png")} className="h-64" />
          <img src={require("../assets/img2.png")} className="h-64" />
          <img src={require("../assets/img3.png")} className="h-64 w-20" />
        </div>
      </section>

      <section id="content" className="w-full my-12">
        <div className="container mx-auto flex">
          <SidebarAbout />
          <div className="ml-20">
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
                Vision & Mission
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Proyek yang dikerjakan meliputi, rumah, kantor, apartment, dan
                hotel. Sejak tahun 2021 PT . Abiudaya Raya Utama telah
                mengembangkan sayap perkerjaan dilingkup perkerjaan arsitektur,
                bangunan, interior kantor, hunian, dan ruko. Adapula PT.Abiudaya
                Raya Utama memiliki workshop didaerah Karang Tengah, Kota
                Tangerang.
              </p>
            </div>
            <div className="flex">
              <img
                className="shadow-md rounded-md"
                src={require("../assets/AboutUs.png")}
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="uppercase text-2xl font-bold">our mission</h1>
                <p className="text-xl mx-8">
                  PT. Abiudaya Raya Utama berkomitmen untuk menghasilkan hasil
                  bangunan arsitektur, dan interior yang bermutu dan
                  berorientasi pada kepuasaan konsumen.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl text-center font-bold uppercase my-4">
                Our Vision
              </h1>
              <p className="text-xl mx-12">
                PT. Abiudaya Raya Utama berkomitmen menjadi perusahaan yang
                menanwarkan pembangunan desain gedung yang mencakup isi di
                dalamnya. Kami bertujuan untuk memberikan pelayanan produk
                kebutuhan interior atau bangunan yang berkualitas dan nyaman.
              </p>
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

export default AboutUs;
