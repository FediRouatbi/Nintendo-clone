import React from "react";

const Element = ({ Icon, iconText, list }) => {
  return (
    <>
      <div className="flex flex-col  [&>*:hover]:text-red [&>*:hover]:cursor-pointer [&>*:hover]:duration-200">
        <div className="flex gap-1 font-bold">
          <Icon className="text-red" />
          {iconText}
        </div>
        {list.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </>
  );
};

export default Element;
