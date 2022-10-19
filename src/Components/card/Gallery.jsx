import React from "react";

const Gallery = () => {
  return (
    <>
      <img
        src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0000000298023224/c_scale,w_400/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
        alt=""
        loading="lazy"
      />
      <nav className="flex gap-2 overflow-y-auto py-3">
        {[...new Array(8)].map((_, i) => (
          <img
            key={i}
            src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0000000298023224/c_scale,w_400/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
            alt=""
            loading="lazy"
            className="w-16 md:w-24 rounded-sm"
          />
        ))}
      </nav>
    </>
  );
};

export default Gallery;
