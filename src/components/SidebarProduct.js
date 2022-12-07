import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2 w-auto p-4 h-auto rounded-xl">
      <div className="my-2 flex w-full">
        <ul className="space-y-8 w-full">
          <li
            onClick={() => navigate("/hotel")}
            className="flex justify-start items-center h-16 hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Arsitektur Hotel
            </p>
          </li>

          <li
            onClick={() => navigate("/rumah")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Arsitektur Rumah
            </p>
          </li>

          <li
            onClick={() => navigate("/kantor")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Arsitektur Kantor
            </p>
          </li>

          <li
            onClick={() => navigate("/lobby")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Interior Lobby Apartment
            </p>
          </li>

          <li
            onClick={() => navigate("/studio")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Interior Kamar Type Studio
            </p>
          </li>

          <li
            onClick={() => navigate("/br")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Interior Kamar Type 1 BR
            </p>
          </li>

          <li
            onClick={() => navigate("/coffeemorning")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Interior Coffee Morning
            </p>
          </li>

          <li
            onClick={() => navigate("/bedroom")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Interior Bed Room
            </p>
          </li>

          <li
            onClick={() => navigate("/tamankecamatan")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Landscape Taman Kecamatan
            </p>
          </li>

          <li
            onClick={() => navigate("/tamanperumahan")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Landscape Taman Perumahan
            </p>
          </li>

          <li
            onClick={() => navigate("/ruangpublik")}
            className="flex justify-start h-16 items-center hover:bg-[#FAC213] rounded-md hover:cursor-pointer px-8"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="hidden lg:block"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
            <p className="uppercase font-poppins text-lg ml-4">
              Landscape Ruang Publik
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarProduct;
