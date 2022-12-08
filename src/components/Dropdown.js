import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ submenus }) => {
  const navigate = useNavigate();
  return (
    <ul className="group-hover:block dropdown-menu bg-[#906A0B]  absolute z-10 mt-4 hidden h-auto top-4 py-4 px-2 rounded-md -ml-3">
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className="mt-4 w-64 p-2 hover:bg-[#FAC213] rounded-md text-white"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate(submenu.url);
            }}
          >
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
