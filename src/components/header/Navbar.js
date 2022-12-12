import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import NavbarDrop from "./NavbarDrop";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  return (
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
            <AiOutlineMenu name={`${open ? "close" : "menu"}`}></AiOutlineMenu>
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8">
          <li className="hover:bg-slate-600 hover:rounded-lg">
            <a href="/" className="text-white py-4 px-3 inline-block">
              Home
            </a>
          </li>
          <NavbarDrop />
          <li className="hover:bg-slate-600 hover:rounded-lg">
            <a href="/projects" className="text-white py-4 px-3 inline-block">
              Cek Update Project
            </a>
          </li>
          <li className="hover:bg-slate-600 hover:rounded-lg">
            <a href="/news" className="text-white py-4 px-3 inline-block">
              News
            </a>
          </li>
          <li className="hover:bg-slate-600 hover:rounded-lg">
            <a href="/contact" className="text-white  py-4 px-3 inline-block">
              Contact
            </a>
          </li>
        </ul>

        <div className="lg:flex lg:gap-1 lg:block hidden">
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
              className={`bg-gray-400 top-12 mt-5 lg:absolute lg:text-sm w-auto lg:mt-8 lg:shadow-md lg:space-y-0 ${
                state ? "" : "hidden"
              }`}
            >
              <li className="bg-gray-400">
                <a className="block gap-2 flex text-white hover:bg-slate-600 lg:p-2.5">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRoge3WsUrDUBTG8X80qC1CCLg5uHSwQzfBxaGLiKPiW/gCdezQ1UfwCRQndRAXBQmCiw7dhFIIFdGESMUIGqcEoyK03ptw4fym3OXmfpyccwNCCCGEKI8FkCSJ1dw8/lC9+VHUVr1lZvbsygKY0PaGguQCVCs2G+sLY68bdZdG3dV53h/s9GF6apLd9jKLNYenMMa7fhhpfdd7prOzBMB265K+P+R1/1TfyV0nHyB+e+fcG+Dfv3DTDUZeB2HMhTcAoO8P9R38G61NfLC3onrLzJzrWPClAqlqxWatOc/hSW+sddoDt92Ama1VbQFSuQCq+4BI+/nzAUzsA+N7QO6Bv+6BQgPo+P6LmELyM1e2rAKPYaS8Ajr9OoVMZHyAbAoVMTF0ML4CxgeQKVQ24wPIFCqb8QGEEEIIIf7hEycURuUfhn7yAAAAAElFTkSuQmCC" />
                  <p className="flex justify-center items-center">English</p>
                </a>
              </li>
              ;
              <li className="bg-gray-400">
                <a className="block gap-2 flex text-white hover:bg-slate-600 lg:p-2.5">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAZklEQVRoge3WsQmAQBBE0TsbEMF2rN52BLECDURzuWA8eC/acH82pQBAx+pznEs5k498Vdf79yH9SCsBaQLSBKQJSBOQJiCt+4B3Tm/70dWcnqfRnP4FAWkC0gSkCUgTkCYAAGhwAfKcBzv0ZMG+AAAAAElFTkSuQmCC" />
                  <p className="flex justify-center items-center">Indonesia</p>
                </a>
              </li>
            </ul>
          </button>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-gray-400 opacity-[0.89] fixed h-auto w-full top-0 bottom-0 py-24 px-12
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
        >
          <li>
            <a href="/" className="text-white py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <NavbarDrop />
          <li>
            <a href="/" className="text-white py-7 px-3 inline-block">
              Project
            </a>
          </li>
          <li>
            <a href="/" className="text-white py-7 px-3 inline-block">
              Team
            </a>
          </li>
          <li>
            <a href="/" className="text-white py-7 px-3 inline-block">
              News
            </a>
          </li>
          <li>
            <a href="/" className="text-white py-7 px-3 inline-block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
