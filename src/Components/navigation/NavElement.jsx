import React from "react";
import { ReactComponent as Arrow } from "../../assets/Header/arrow.svg";

const NavElement = ({ Icon, title, active, onClick, arrowExist, open }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        open && "text-red"
      } flex gap-2  py-2 cursor-pointer hover:text-red duration-200`}
    >
      <Icon />
      {title}
      {arrowExist && (
        <Arrow className={` ${open && "rotate-180 "} duration-300`} />
      )}
    </div>
  );
};

export default NavElement;
