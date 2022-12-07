import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Teams = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="content" className="w-full pt-32">
        <div className="container mx-auto">
          <div class="text-center pb-8 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              <span className="inline-block">
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
              Our Team
            </h2>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg text-center mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    DIREKTUR UTAMA <br /> PT. ABIUDAYA RAYA UTAMA
                  </h2>

                  <h1 className="max-w-lg mb-6 font-sans text-xl text-center font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    LUCY FARIDA FATMASARI
                  </h1>

                  <p className="text-base text-center text-gray-700 md:text-lg">
                    PT.Abiudaya Raya Utama memiliki CEO atau direktur Lucy
                    Farida Fatmasari, dan beranggotakan lebih dari 20 karyawan.
                    Pada beberapa jajaran direksi, PT.Abiudaya Raya Utama
                    memiliki beberapa kepala, Mulai dari wakil direktur,
                    bendahara, kepala arsitek, kepala bengkel atau workshop
                    interior yang ahli dibidangnya masing – masing. Pengalaman
                    yang dimiliki disetiap kepala bidang atau jajaran direksi
                    sendiri terbilang cukup berpengalaman.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                  <img
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src={require("../assets/ceo2.webp")}
                    alt=""
                  />
                  <img
                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    src={require("../assets/ceo3.webp")}
                    alt=""
                  />
                </div>
                <div className="px-3">
                  <img
                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                    src={require("../assets/ceo1.webp")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen">
              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/dirkeu.png")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold uppercase">
                    DRG. SYAFILA NURFATHIA LUBIS S,KG.,MARS
                  </p>
                  <p className="mb-5 text-base text-gray-800">
                    Direktur Keuangan
                  </p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p>
                      Dalam bidangnya, ia merupakan seseorang yang sangat tekun
                      dan dipercaya dalam mengatur pengeluaran dan pemasukan
                      perusahaan sehingga perusahaan menjadi institusi yang
                      sehat dan tetap berkembang keperusahaan yang bersaing
                      dibidangnya. Berbekal pengalaman lebih dari 4 tahun dan
                      ikut dalam bidangnya.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/conseptor.webp")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold uppercase">
                    Ardhi Supriyanto,S.T.M.Arch
                  </p>
                  <p className="mb-5 text-base text-gray-800">Conceptor</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p></p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/kepalaarsitek.png")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">PRIESMA ERAHADYAN, ST</p>
                  <p className="mb-5 text-base text-gray-800">Kepala Arsitek</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p>
                      Memiliki pengalaman dibidang arsitektur sejak 2013 dan
                      merupakan lulusan Bina Nusantara University jurusan
                      arsitektur, Beliau memiliki peran aktif di PT.Abiudaya
                      Raya Utama dan penting dalam desain arsitektur yang
                      mengikuti perkembangan zaman pada tipe bangunanya.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/seniorarsitek.png")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">Ardiansyah, S.T</p>
                  <p className="mb-5 text-base text-gray-800">Senior Arsitek</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p>
                      Ardiansyah, merupakan lulusan universitas Hasanudin tahun
                      2013 silam.Di PT. Abiudaya Raya Utama, jabatan yang ia
                      miliki yaitu senior arsitek. Yang bertugas untuk mengatur
                      atau mengontrol kualitas gambar sebelum diberikan kepada
                      klient. Ia mulai ikut serta kedalam tim arsitek sejak
                      tahun 2021 silam dan langsung diberikan kepercayaan untuk
                      membuat interior maupun gambar arsitektur dengan skala
                      menengah kecil.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/arsitekjunior.png")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold uppercase">
                    widya ardiyanti, S.ARs
                  </p>
                  <p className="mb-5 text-base text-gray-800">Arsitek Junior</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p>
                      Widya Ardiyanti merupakan lulusan universitas Teknologi
                      Yogyakarta tahun 2021, jabatan yang ia miliki adalah
                      junior arsitek. Yang bertugas membackup pekerjaan dari
                      ardiansayah. Ia mulai ikut serta dalam tim arsitek sejak
                      tahun 2021 silam.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <img
                    className="absolute object-contain w-full h-full rounded"
                    src={require("../assets/tekniksipil.png")}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">RAI MUHAMMAD FARHAN, S.T</p>
                  <p className="mb-5 text-base text-gray-800">Teknik Sipil</p>
                  <div className="flex items-center space-x-3 sm:justify-center">
                    <p>
                      Farhan merupakan salah satu tenaga ahli tehnik sipil yang
                      berperan langsung dalam pengecekan kekuatan tanah, dan
                      perhitungan struktur bangunan yang akan dibangun sesuai
                      acuan dari gambar kerja yang ada. Farhan sendiri telah
                      bergabung sejak tahun 2021 sebagai tim inti desain arsitek
                      dan tenaga kerja surveyor lapak untuk PT.Abiudaya Raya
                      Utama.
                    </p>
                  </div>
                </div>
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

export default Teams;
