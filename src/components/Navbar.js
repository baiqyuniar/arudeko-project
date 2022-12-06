import React from "react";
import { menuItems } from "./menuItems";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
      <ul className="mx-auto flex justify-between items-center">
        {menuItems.map((menu, index) => {
          return <Menu items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
