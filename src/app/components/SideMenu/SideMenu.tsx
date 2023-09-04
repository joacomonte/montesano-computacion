'use client'
import React, { useState, useRef } from "react";
import {SideMenuProps } from "./interfaces"; // Make sure to import the correct path to your interfaces
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import useClickOutside from "@/app/hooks/useOutsideClick";

const SideMenu = ({ data }: SideMenuProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef(null);

  const toggleMenu = (open: boolean = !isMenuOpen) => {
    setIsMenuOpen(open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useClickOutside(menuRef, closeMenu);

  return (
    <aside className={style.sideMenu}>
      <div
        className={style.menuTitle}
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? "X" : "Menu"}
      </div>

      {isMenuOpen &&
        data.map((category) => (
          <MenuItem key={category.id} {...category} depth={0} />
        ))}
    </aside>
  );
};


export default SideMenu;
