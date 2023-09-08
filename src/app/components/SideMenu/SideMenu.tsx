'use client'
import React, { useState, useRef } from "react";
import {SideMenuProps } from "./interfaces"; // Make sure to import the correct path to your interfaces
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import useClickOutside from "@/app/hooks/useOutsideClick";

const SideMenu = ({ data }: SideMenuProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const divRef = useRef(null);

  const toggleMenu = (open: boolean = !isMenuOpen) => {
    setIsMenuOpen(open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useClickOutside(divRef, closeMenu);

  return (
    <aside ref={divRef} className={style.sideMenu}>
      {!isMenuOpen && <div className={style.menuTitle} onClick={() => toggleMenu()}>Menu</div>}
      {isMenuOpen && <div className={style.menuTitle} onClick={() => toggleMenu()}>X</div>}
      {isMenuOpen &&
        data.map((category) => (
          <MenuItem key={category.id} {...category} depth={0} />
        ))}
    </aside>
  );
};


export default SideMenu;
