"use client";
import { FC, useState } from "react";
import { IMenuItemProps } from "../interfaces";
import style from "./MenuItem.module.css";
import Link from "next/link";

const MenuItem: FC<IMenuItemProps> = ({ label, children = [], href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderLabel = () => {
    if (href) {
      return (
        <Link href={`/categories${href}`} style={{ paddingLeft: "20px" }}>
          {label}
        </Link>
      );
    }

    // Otherwise, render a regular div that can be toggled
    return (
      <div onClick={handleClick}>
        {label}
        {children.length > 0 && (isOpen ? " <" : " >")}
      </div>
    );
  };

  // Use array.join(' ') to combine classnames
  const className = [
    children.length > 0 ? style.menuItem : style.lastItem,
    isOpen ? style.open : "",
  ].join(" ");

  return (
    <div className={className}>
      {renderLabel()}
      {isOpen &&
        children.map((child) => <MenuItem key={child.id} {...child} />)}
    </div>
  );
};
export default MenuItem;
