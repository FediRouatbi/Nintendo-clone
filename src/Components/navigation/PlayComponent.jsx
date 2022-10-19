import React from "react";

const PlayComponent = ({ text, Icon }) => {
  console.log(Icon);
  return (
    <div className="group flex flex-col cursor-pointer items-center">
      <div className="px-10 border  group-hover:bg-red  border-gray/20 py-6 rounded-sm duration-700">
        <img
          src={Icon}
          alt=""
          className={`w-16 h-6 scale-[1.7]  group-hover:invert " ${
            Icon.startsWith("http") && "scale-[3.1] group-hover:invert-0"
          } ${text.includes("Online") && "scale-[2]"}  `}
        />
      </div>
      <p className="group-hover:text-red "> {text}</p>
    </div>
  );
};

export default PlayComponent;
