// code snippet for page tsx
// import styles from "./page.module.css";

import React, { FC } from "react";
import "./burger.css";

interface BurgerIconProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
const BurgerIcon: FC<BurgerIconProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <>
      <input id="checkbox" type="checkbox" checked={isMenuOpen} readOnly />
      <label className="toggle" htmlFor="checkbox" onClick={toggleMenu}>
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </>
  );
}

export default BurgerIcon;

