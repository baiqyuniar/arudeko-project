import React from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Menu = ({ items }) => {
  const navigate = useNavigate();
  return (
    <li className="py-2 px-5 uppercase group relative dropdown hover:text-[#FAC213]">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href="/" onClick={(e) =>
          {
            e.preventDefault();
            navigate(items.url)
          }
        }>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;
