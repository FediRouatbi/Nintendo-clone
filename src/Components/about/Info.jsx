import React from "react";
const Info = ({ Icon, title, info, redText }) => {
  return (
    <div className="  m-auto text-gray  pb-4">
      <hr className="pb-4" />
      <div className="flex gap-2 items-start">
        <Icon className="w-12" />

        <div className="w-4/5">
          <div className="font-bold">{title}</div>
          <div className="text-sm">{info}</div>
          <div className="text-red gap-3 text-sm font-bold underline flex flex-wrap">
            {redText?.map((el) => (
              <div>{el}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
