import React from "react";
import { ReactComponent as Esrbb } from "../assets/esrb.svg";

const Esrb = ({ className, width }) => {
  return (
    <div className={className}>
      <Esrbb className={width} />
      <p className="text-[10px] text-left">
        Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
        Mild Language, Mild Blood
        <hr className="my-2" />
        Users Interact
      </p>
    </div>
  );
};

export default Esrb;
