import React from "react";

const FooterInfo = ({ title, redText }) => {
  return (
    <div className="border-l-2 pl-5  my-6 mx-auto border-lightGray font-medium">
      <div className="w-fit cursor-pointer pb-3 text-gray/80 hover:text-gray hover:underline decoration-2 underline-offset-4">
        {title}
      </div>
      {redText.map((el) => (
        <div className="text-red/80 hover:text-red cursor-pointer hover:underline decoration-2 underline-offset-4">
          {el}
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;
