import React from "react";
import CardDtails from "./CardDtails";
import Gallery from "./Gallery";
import Breadcrumbs from "./Breadcrumbs";
import Esrb from "../Esrb";
import { ReactComponent as Earn } from "../../assets/earn.svg";
import { ReactComponent as Shipping } from "../../assets/shipping.svg";
const Card = () => {
  return (
    <>
      <div className="xl:bg-skyBlue relative  pt-10 lg:pt-24">
        <div className="flex justify-center gap-7 text-gray z-30 py-3   bg-lightGray w-full text-center">
          <div className="  hidden lg:flex">
            <Shipping className="text-red" />
            <div className="border-r px-4 border-r-gray/40">
              <strong>Free shipping</strong> on orders $ Restrictions apply
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <Earn className="w-7 text-red" />
            <div>
              Earn <strong className="underline">My Nintendo Points</strong> on
              digital games
            </div>
          </div>
        </div>
        <section className="shadow-lg md:p-10  translate-y-10 bg-white mx-auto  md:max-w-7xl">
          <Breadcrumbs />
          <div className="flex flex-col md:flex-row  gap-10">
            <div className="md:w-2/3">
              <Gallery />
              <Esrb
                width="w-14"
                className="hidden md:flex  mt-5 gap-2 max-w-md   bg-white   items-center"
              />
            </div>

            <CardDtails />
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
