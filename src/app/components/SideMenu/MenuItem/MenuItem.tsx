"use client";
import { FC, useState } from "react";
import { IMenuItemProps } from "../interfaces";
import style from "./MenuItem.module.css";
import Link from "next/link";

const MenuItem: FC<IMenuItemProps> = ({ label, children = [], depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderLabel = () => {
    // Derive the URL from the label
    const href = `/categories/${label.replace(/ñ/g, 'n').replace(/ /g, '-').toLowerCase()}`;

    // If there are no children, render a Link
    if (children.length === 0) {
      return (
        <Link className={style.menuLabel} href={href}>
          {label}
        </Link>
      );
    }

    // Otherwise, render a regular div that can be toggled
    return (
      <div className={style.menuLabel} onClick={handleClick}>
        {label}
        {children.length > 0 && (isOpen ? " <" : " >")}
      </div>
    );
  };

  return (
    <div style={{ paddingLeft: `${depth * 20}px` }} className={style.menuItem}>
      {renderLabel()}
      {isOpen &&
        children.map((child) => (
          <MenuItem key={child.id} {...child} depth={depth + 1} />
        ))}
    </div>
  );
};
export default MenuItem;
