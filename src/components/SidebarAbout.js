import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="my-2 w-3/4 p-4 h-auto">
      <h1 className="uppercase font-poppins text-xl font-bold text-center">
        about us
      </h1>
      <p className="my-8 text-center font-poppins text-center">
        PT. Abiudaya Raya Utama didirikan sejak tahun 2021. Dibentuk pertama
        kali di JL.Barata Raya, Tangerang dengan lingkup kerja sebagai interior
        Desain dan pembangunanya, dengan CEO ialah Lucy Farida Fatmasari
      </p>
      <div className="my-12 flex w-full">
        <ul className="space-y-12 w-full">
          <li
            onClick={() => navigate("/aboutus")}
            className="flex justify-between items-center gap-8 h-16 hover:bg-[#FAC213] rounded-md hover:cursor-pointer"
          >
            <p className="uppercase font-poppins text-lg ml-4">
              vision & mission
            </p>
            <svg
              className="w-8 h-8 mr-2"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                fill-rule="nonzero"
              />
            </svg>
          </li>
          <li className="flex justify-between h-16 items-center gap-8 hover:bg-[#FAC213] rounded-md hover:cursor-pointer">
            <p className="uppercase font-poppins text-lg ml-4">
              company history
            </p>
            <svg
              className="w-8 h-8 mr-2"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                fill-rule="nonzero"
              />
            </svg>
          </li>
          <li
            onClick={() => navigate("/video")}
            className="flex justify-between h-16 items-center gap-8 hover:bg-[#FAC213] rounded-md hover:cursor-pointer"
          >
            <p className="uppercase font-poppins text-lg ml-4">company video</p>
            <svg
              className="w-8 h-8 mr-2"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                fill-rule="nonzero"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAbout;
