'use client'
import React, { useState, useRef, useEffect } from "react";
import {SideMenuProps } from "./interfaces"; // Make sure to import the correct path to your interfaces
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import useClickOutside from "@/app/hooks/useOutsideClick";
import { usePathname } from 'next/navigation';

const SideMenu = ({ data }: SideMenuProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // to close the menu when change route
  const pathname = usePathname();
  useEffect(() => {
    closeMenu(); // close the menu whenever the pathname or searchParams changes
  }, [pathname]);

  // to close the menu when click outside
  const divRef = useRef(null);
  useClickOutside(divRef, closeMenu);

  return (
    <aside ref={divRef} className={style.sideMenu}>
      <div
        className={style.menuTitle}
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? "Cerrar" : "Menu"}
      </div>

      {isMenuOpen &&
        data.map((category) => (
          <MenuItem key={category.id} {...category}/>
        ))}
    </aside>
  );
};


export default SideMenu;
