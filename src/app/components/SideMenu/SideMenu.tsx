"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IMenuItemProps } from "./interfaces"; 
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";


export interface SideMenuHandles {
  toggleMenu: (open?: boolean) => void;
  node: () => HTMLDivElement | null;
}

interface SideMenuProps {
  data: IMenuItemProps[];
}

const SideMenu = React.forwardRef<SideMenuHandles, SideMenuProps>((props, ref) => {
  const { data } = props; // Destructure data prop
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (open?: boolean) => {
    if (typeof open === "boolean") {
      setIsMenuOpen(open);
    } else {
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  useImperativeHandle(ref, () => ({
    toggleMenu: toggleMenu, // Using the local toggleMenu function
    node: () => sideMenuRef.current,
  }));

  return (
    <aside className={style.sideMenu} ref={sideMenuRef}>
      <div
        className={style.menuTitle}
        onClick={() => toggleMenu()}
        style={{ fontSize: "24px" }}
      >
        {isMenuOpen ? "X" : "Menu"}
      </div>

      {isMenuOpen &&
        data.map((category) => (
          <MenuItem key={category.id} {...category} depth={0} />
        ))}
    </aside>
  );
});

SideMenu.displayName = "SideMenu";


export default SideMenu;
