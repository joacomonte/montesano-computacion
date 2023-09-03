"use client";
import { FC, useState } from "react";
import { IMenuItemProps } from "../interfaces";
import style from "./MenuItem.module.css";



const MenuItem: FC<IMenuItemProps> = ({ label, children = [], depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: `${depth * 10}px` }} className={style.menuItem}>
      <div className={style.menuLabel} onClick={handleClick}>
        {label}
        {children.length > 0 && (isOpen ? " <" : " >")}
      </div>
      {isOpen &&
        children.map((child) => (
          <MenuItem key={child.id} {...child} depth={depth + 1} />
        ))}
    </div>
  );
};

export default MenuItem;
