"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ISideMenuProps, SideMenuHandles } from "./interfaces"; 
import style from "./SideMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";




const SideMenu = forwardRef<SideMenuHandles, ISideMenuProps>((props, ref) => {
  const { data } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (open: boolean = !isMenuOpen) => {
    setIsMenuOpen(open);
  };

  useImperativeHandle(ref, () => ({
    toggleMenu,
    getMenuNode: () => sideMenuRef.current
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
