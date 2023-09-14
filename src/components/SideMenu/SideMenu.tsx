"use client";
import React, { useState, useRef, useEffect } from "react";
import { SideMenuProps } from "./interfaces"; // Make sure to import the correct path to your interfaces
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import useClickOutside from "@/hooks/useOutsideClick";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BurgerIcon from "../burgerIcon/BurgerIcon";

interface BurgerIconProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}


const SideMenu = ({ data }: SideMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
  };


  // to close the menu when change route
  const pathname = usePathname();
  useEffect(() => {
    closeMenu(); // close the menu whenever the pathname or searchParams changes
  }, [pathname]);

  // to close the menu when click outside
  const divRef = useRef(null);
  // useClickOutside(divRef, closeMenu);

  return (
    <div className={style.sideMenuContainer}>
      <BurgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <nav

        className={`${style.sideMenu} ${isMenuOpen ? style.open : ""}`}
      >
        {/* <div className={style.menuTitle} onClick={toggleMenu}>
          Cerrar
        </div> */}

        {isMenuOpen &&
          data.map((category) => <MenuItem key={category.id} {...category} />)}
      </nav>
    </div>
  );
};

export default SideMenu;
