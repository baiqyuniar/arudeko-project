import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [state, setState] = useState(false);

  return (
    <header className="w-full bg-[#906A0B] opacity-[0.89] text-white body-font font-poppins shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        <a href="/">
          <img
            alt="shunda-logo"
            src={require("../assets/Logo.png")}
            className="w-24 h-16"
          />
        </a>

        <Navbar />

        <div className="flex gap-1">
          <form className="flex items-center space-x-2 border rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-none text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="w-full bg-[#906A0B] opacity-[0.89] outline-none placeholder-white text-white sm:w-auto"
              type="text"
              placeholder="Search"
            />
          </form>

          <button
            className="rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-2"
            onClick={() => setState(!state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-12 rounded-md text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <ul
              className={`bg-[#906A0B] top-12 mt-5 lg:absolute lg:text-sm w-auto lg:mt-8 lg:shadow-md lg:space-y-0 ${
                state ? "" : "hidden"
              }`}
            >
              <li className="bg-[#906A0B]">
                <a className="block gap-2 flex text-white hover:bg-[#FAC213] lg:p-2.5">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRoge3WsUrDUBTG8X80qC1CCLg5uHSwQzfBxaGLiKPiW/gCdezQ1UfwCRQndRAXBQmCiw7dhFIIFdGESMUIGqcEoyK03ptw4fym3OXmfpyccwNCCCGEKI8FkCSJ1dw8/lC9+VHUVr1lZvbsygKY0PaGguQCVCs2G+sLY68bdZdG3dV53h/s9GF6apLd9jKLNYenMMa7fhhpfdd7prOzBMB265K+P+R1/1TfyV0nHyB+e+fcG+Dfv3DTDUZeB2HMhTcAoO8P9R38G61NfLC3onrLzJzrWPClAqlqxWatOc/hSW+sddoDt92Ama1VbQFSuQCq+4BI+/nzAUzsA+N7QO6Bv+6BQgPo+P6LmELyM1e2rAKPYaS8Ajr9OoVMZHyAbAoVMTF0ML4CxgeQKVQ24wPIFCqb8QGEEEIIIf7hEycURuUfhn7yAAAAAElFTkSuQmCC" />
                  <p className="flex justify-center items-center">English</p>
                </a>
              </li>
              <li className="bg-[#906A0B]">
                <a className="block gap-2 flex text-white hover:bg-[#FAC213] lg:p-2.5">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAZklEQVRoge3WsQmAQBBE0TsbEMF2rN52BLECDURzuWA8eC/acH82pQBAx+pznEs5k498Vdf79yH9SCsBaQLSBKQJSBOQJiCt+4B3Tm/70dWcnqfRnP4FAWkC0gSkCUgTkCYAAGhwAfKcBzv0ZMG+AAAAAElFTkSuQmCC" />
                  <p className="flex justify-center items-center">Indonesia</p>
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
