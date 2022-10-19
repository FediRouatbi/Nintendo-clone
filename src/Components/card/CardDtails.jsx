import React from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Download } from "../../assets/download.svg";
const CardDtails = () => {
  return (
    <div className=" md:w-1/3 px-6 md:px-0">
      <h6 className="text-xs border-l-2 text-gray border-red pl-2">
        Nitendo Switch
      </h6>
      <h1 className="text-3xl font-semibold py-6 text-gray">Stardew Valley</h1>
      <div className="flex justify-between items-center">
        <span className="text-lg">$14.99</span>{" "}
        <Heart className="text-red stroke-white w-10 " />{" "}
      </div>
      <div className="flex gap-2 items-center py-4 text-xs">
        <img
          src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0000000298023224/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png"
          alt=""
          className="w-8"
        />
        Eligible for up to <strong>75</strong> Gold Points
      </div>
      <button className="w-full flex rounded-md justify-center gap-2 items-center bg-red/80 duration-500 hover:bg-red font-bold py-4 text-xl text-white">
        <Download /> Direct download
      </button>
      <p className="text-[10px] py-4">
        This item will be sent to your system automatically after purchase.
      </p>
    </div>
  );
};

export default CardDtails;
