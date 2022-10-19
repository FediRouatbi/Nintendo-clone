import React from "react";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
const Navigation = () => {
  return (
    <div className="py-4  text-xs text-gray pl-5 md:pl-0 ">
      <ul className="flex items-center gap-2 ">
        <li className="flex items-center  gap-2">
          Store
          <ArrowRight className="w-3  " />
        </li>
        <li className="flex items-center  gap-2">
          Games <ArrowRight className="w-3 " />
        </li>
        <li className="flex items-center  gap-2 font-bold">Stardew Valley</li>
      </ul>
    </div>
  );
};

export default Navigation;
