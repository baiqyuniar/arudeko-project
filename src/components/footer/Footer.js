import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="font-poppins bg-footer text-black">
      <div className="container w-full px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
          <div className=" flex flex-col justify-center">
            <img
              src={require("../../assets/Logo.png")}
              className="mr-5 lg:h-32 lg:w-48 h-16 w-24"
              alt="logo"
            />
            <p className="max-w-xs mt-4 text-base text-black">
              <span className="font-bold">
                PT.Abiudaya Raya Utama Head Office
              </span>
              <br />
              Jl. Barata Raya No. 34,
              <br />
              Karang Tengah
              <br />
              15157
            </p>
            <div className="flex mt-8 space-x-6 text-black">
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> YouTube </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.918 13.933h.706v3.795h-.706v-.419c-.13.154-.266.272-.405.353-.381.218-.902.213-.902-.557v-3.172h.705v2.909c0 .153.037.256.188.256.138 0 .329-.176.415-.284v-2.881zm.642-4.181c.2 0 .311-.16.311-.377v-1.854c0-.223-.098-.38-.324-.38-.208 0-.309.161-.309.38v1.854c-.001.21.117.377.322.377zm-1.941 2.831h-2.439v.747h.823v4.398h.795v-4.398h.821v-.747zm4.721 2.253v2.105c0 .47-.176.834-.645.834-.259 0-.474-.094-.671-.34v.292h-.712v-5.145h.712v1.656c.16-.194.375-.354.628-.354.517.001.688.437.688.952zm-.727.043c0-.128-.024-.225-.075-.292-.086-.113-.244-.125-.367-.062l-.146.116v2.365l.167.134c.115.058.283.062.361-.039.04-.054.061-.141.061-.262v-1.96zm10.387-2.879c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10.746-2.251c0 .394.12.712.519.712.224 0 .534-.117.855-.498v.44h.741v-3.986h-.741v3.025c-.09.113-.291.299-.436.299-.159 0-.197-.108-.197-.269v-3.055h-.741v3.332zm-2.779-2.294v1.954c0 .703.367 1.068 1.085 1.068.597 0 1.065-.399 1.065-1.068v-1.954c0-.624-.465-1.071-1.065-1.071-.652 0-1.085.432-1.085 1.071zm-2.761-2.455l.993 3.211v2.191h.835v-2.191l.971-3.211h-.848l-.535 2.16-.575-2.16h-.841zm10.119 10.208c-.013-2.605-.204-3.602-1.848-3.714-1.518-.104-6.455-.103-7.971 0-1.642.112-1.835 1.104-1.848 3.714.013 2.606.204 3.602 1.848 3.715 1.516.103 6.453.103 7.971 0 1.643-.113 1.835-1.104 1.848-3.715zm-.885-.255v.966h-1.35v.716c0 .285.024.531.308.531.298 0 .315-.2.315-.531v-.264h.727v.285c0 .731-.313 1.174-1.057 1.174-.676 0-1.019-.491-1.019-1.174v-1.704c0-.659.435-1.116 1.071-1.116.678.001 1.005.431 1.005 1.117zm-.726-.007c0-.256-.054-.445-.309-.445-.261 0-.314.184-.314.445v.385h.623v-.385z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 text-black">
            <div>
              <p className="font-bold">Company Overview</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a
                  onClick={() => navigate("/aboutus")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href
                >
                  Vision & Mission
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href>
                  Company History
                </a>
                <a
                  onClick={() => navigate("/video")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href
                >
                  Company Video
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold">Popular Articles</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Article 1
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Article 2
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Article 3
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Article 4
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold">More Information</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a
                  onClick={() => navigate("/project")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href="/"
                >
                  Projects
                </a>
                <a
                  onClick={() => navigate("/teams")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href="/"
                >
                  Team
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Careers
                </a>
                <a
                  onClick={() => navigate("/news")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href="/"
                >
                  News &amp; Events
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold">Contact Info</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a
                  onClick={() => navigate("/contact")}
                  className="hover:opacity-75 hover:cursor-pointer"
                  href="/"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold">Products</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Arsitektur Hotel
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Arsitektur Rumah
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Arsitektur Kantor
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Interior Lobby Apartment
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Interior Kamar Type Studio
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Interior Kamar Type 1 BR
                </a>
              </nav>
            </div>

            <div>
              <nav className="flex flex-col mt-10 space-y-2 text-sm">
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Interior Coffee Morning
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Interior Bedroom
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Landscape Taman Kecamatan
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Landscape Taman Perumahan
                </a>
                <a className="hover:opacity-75 hover:cursor-pointer" href="/">
                  Landscape Ruang Publik
                </a>
              </nav>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <p className="mt-8 text-xs font-semibold text-black text-center">
          © Copyright 2022, PT.Abiudaya Raya Utama Head Office, <br />
          All rights reserved. Various trademarks held by their respective
          owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
