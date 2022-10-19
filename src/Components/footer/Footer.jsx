import React from "react";
import { ReactComponent as Nintendo } from "../../assets/nintendo.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instgram } from "../../assets/instgram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Esrb2 } from "../../assets/esrb2.svg";
import { ReactComponent as Region } from "../../assets/region.svg";

import FooterInfo from "./FooterInfo";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center  justify-between px-6 bg-red gap-10  w-full my-10 text-white py-10">
        <Nintendo className=" w-44  " />
        <div className="flex gap-7  ">
          <Facebook />
          <Instgram />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className="py-4 grid place-items-start justify-start sm:grid-cols-2 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <FooterInfo
          title="About Nintendo"
          redText={["Careers", "Coporate Social Responsibility"]}
        />
        <FooterInfo
          title="Shop"
          redText={[
            "Games",
            "Hardware",
            "Merchandise",
            "Sales & deals",
            "Exclusives",
            "Online service",
            "Nintendo NY store",
          ]}
        />
        <FooterInfo
          title="My Nintendo Store orders"
          redText={[
            "Order details",
            "Shipping info",
            "Returns & exchanges",
            "FAQ",
          ]}
        />
        <FooterInfo
          title="Support"
          redText={[
            "Nintendo Switch",
            "Nintendo Account",
            "Other system",
            "Repairs",
            "Nintendo product recycling",
          ]}
        />
        <div className="pl-5 mx-auto">
          <FooterInfo
            title="Parents"
            redText={["Info for parents", "Parental controls"]}
          />
          <FooterInfo
            title="Privacy"
            redText={["Privacy policy", "Cookies and interest-based ads"]}
          />
        </div>
        <FooterInfo
          title="Community"
          redText={["Community guidelines", "Online safety principles"]}
        />
      </div>
      <Esrb2 className="w-16 m-auto py-5 px-2" />
      <div className="bg-footerBg pb-28 lg:pb-9 py-9 px-4 text-white text-center text-xs">
        <div className=" mx-auto flex justify-between items-center gap-4 flex-col lg:flex-row">
          <div className="lg:text-left max-w-sm xl:max-w-full ">
            <p>
              © Nintendo. Games are property of their respective owners.
              Nintendo of America Inc. Headquarters are in Redmond, Washington,
              USA
            </p>
          </div>
          <div className="flex gap-4 justify-between font-bold ">
            <div className="flex flex-col gap-2 cursor-pointer hover:underline decoration-2 underline-offset-4">
              <a href="">Contact us</a>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer hover:underline decoration-2 underline-offset-4">
              <a href="">Website feedback</a>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer hover:underline decoration-2 underline-offset-4">
              <a href="">Terms of Use</a>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer hover:underline decoration-2 underline-offset-4">
              <a href="">Documents & Polices</a>
            </div>
          </div>
          <div className="cursor-pointer hover:underline decoration-2 underline-offset-4 font-bold   flex items-center gap-4 justify-center  ">
            <Region className="w-10 " />
            <span>Change region</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
