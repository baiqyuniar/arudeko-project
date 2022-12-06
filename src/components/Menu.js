import React from "react";
import Dropdown from "./Dropdown";

const Menu = ({ items }) => {
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
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;
