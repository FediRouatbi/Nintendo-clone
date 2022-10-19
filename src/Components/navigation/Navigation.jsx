import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Heart2 } from "../../assets/heart2.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Shop } from "../../assets/shop.svg";
import { ReactComponent as User } from "../../assets/user.svg";

const Navigation = () => {
  return (
    <nav className="lg:hidden max-w-md text-gray z-50 px-4 shadow-[0px_0.25rem_0.5rem_0px_rgba(0,0,0,0.2)] py-4 fixed flex justify-around rounded-full left-1/2 -translate-x-1/2 bottom-4 w-11/12    bg-white">
      <Menu />
      <Heart2 />
      <div></div>
      <div
        className="bg-red text-white absolute p-3
       rounded-full -translate-y-1/2"
      >
        <Search />
      </div>

      <Shop />
      <User />
    </nav>
  );
};

export default Navigation;
