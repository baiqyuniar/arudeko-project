import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/footer/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import NavbarDrop from "../components/header/NavbarDrop";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = [
  { value: "", text: "Bahasa" },
  { value: "id", text: "Indonesia" },
  { value: "en", text: "English" },
];

const ContactPage = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/hubungi";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k02u8ef",
        "template_4cy96i5",
        forms.current,
        "Jy70Z1r7ZanVwLlF7"
      )
      .then(
        (result) => {
          alert("message sent successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full body-font font-poppins shadow-sm">
      <section id="navbar">
        <nav className="bg-gray-400 absolute z-50 px-4 mx-auto w-full md:px-24 lg:px-0">
          <div className="container mx-auto flex items-center font-medium justify-between">
            <div className="p-5 md:w-auto w-full flex justify-between">
              <img
                src={Logo}
                alt="logo"
                className="md:w-32 md:h-16 md:cursor-pointer w-32 h-16"
              />
              <div
                className="text-3xl md:hidden right-0"
                onClick={() => setOpen(!open)}
              >
                <AiOutlineMenu
                  name={`${open ? "close" : "menu"}`}
                ></AiOutlineMenu>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8">
              <li className="hover:bg-slate-600 hover:cursor-pointer px-2 hover:rounded-lg">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/proyek");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("cek")}
                </a>
              </li>
              {/* <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/berita");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("berita")}
                </a>
              </li> */}
              <li className="hover:bg-slate-600 hover:rounded-lg hover:cursor-pointer px-2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/hubungi");
                  }}
                  className="text-white py-4 inline-block"
                >
                  {t("hubungi")}
                </a>
              </li>
            </ul>

            <select
              value={lang}
              onChange={handleChange}
              className="bg-gray-400 text-white mb-1 py-4 inline-block uppercase"
            >
              {languages.map((item) => {
                return (
                  <option
                    className="text-white"
                    key={item.value}
                    value={item.value}
                  >
                    {item.text}
                  </option>
                );
              })}
            </select>

            {/* Mobile nav */}
            <ul
              className={`
      md:hidden bg-gray-400 opacity-[0.89] fixed h-auto w-full top-0 bottom-0 py-24 px-12
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
            >
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("beranda")}
                </a>
              </li>
              <NavbarDrop />
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/proyek");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("cek")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/berita");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("berita")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/hubungi");
                  }}
                  className="text-white py-7 px-3 inline-block"
                >
                  {t("hubungi")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="contact" className="w-full pt-32 bg-split">
        <div class="flex container items-center justify-center mx-auto p-12">
          <div className="bg-white flex flex-col-reverse lg:flex-row justify-between rounded lg:gap-32 gap-2 lg:mt-24">
            <div class="w-full lg:max-w-[550px] lg:mx-8 px-2 mx-0">
              <h1 className="lg:text-3xl text-center font-bold tracking-wider m-4">
                {t("umpan balik")}
              </h1>
              <p className="text-xl m-4">{t("kontak")}</p>
              <form ref={forms} onSubmit={sendEmail} className="my-8">
                <div class="mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Message"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    class="hover:shadow-form rounded-full bg-[#8A423E] py-3 px-8 text-base font-semibold text-white outline-none"
                  >
                    {t("kirim")}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:mt-24 mt-8">
              <h1 className="uppercase lg:text-2xl text-center font-bold lg:my-1 mx-8">
                {t("informasi")}
              </h1>
              <div className="mx-8">
                <div className="flex my-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="flex items-center lg:mt-8 justify-center"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  <p className="text-lg ml-4">
                    <span className="font-bold my-4">
                      PT.Abiudaya Raya Utama Head Office{" "}
                    </span>
                    <br />
                    Jl. Barata Raya No. 34, <br />
                    Karang Tengah <br />
                    15157
                  </p>
                </div>
              </div>

              {/* <div className="mx-8">
        <div className="flex my-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
          </svg>
          <p className="text-lg lg:ml-4">web@sd.co.id</p>
        </div>
      </div> */}

              <div className="mx-8">
                <div className="flex my-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z" />
                  </svg>
                  <p className="text-lg ml-4">+62812-7719-1691</p>
                </div>
              </div>

              <div className="mx-8 mb-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20c0 1.104-.896 2-2 2h-2v-16h2c1.104 0 2 .896 2 2v12zm-6-14v16h-18v-16h2v-4h14v4h2zm-15 2h12v-5h-12v5zm2 9v1h2v-1h-2zm2-1v-1h-2v1h2zm1 1v1h2v-1h-2zm2-1v-1h-2v1h2zm1 1v1h2v-1h-2zm-6 2v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm2-3v-1h-2v1h2zm2-6h-12v3h12v-3zm-2-6h-8v1h8v-1zm-2 2h-6v1h6v-1z" />
                  </svg>
                  <p className="text-lg ml-4">021 734 4704</p>
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

export default ContactPage;
