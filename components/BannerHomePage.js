import Image from "next/image";
import React from "react";

const BannerHomePage = ({ heading, p1, p2, img, button, imgIcon }) => {
  return (
    <div className="rounded-3xl px-8 py-8 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#f6f8fd] to-[#FFFFFF00]">
      <div className="md:order-1 order-2 flex md:flex-col flex-col items-center md:items-start">
        {heading === "Our Story" ? (
          <p className="text-[#E68F50] font-bold text-[18px] md:text-[40px]">
            {heading}
          </p>
        ) : (
          <p className="text-[#0A56F1] font-bold text-[18px] md:text-[40px]">
            {heading}
          </p>
        )}
        <p className="text-[#36454f] font-bold md:text-[22px] text-[13px] text-center md:text-start">
          {p1}
        </p>
        <br />
        <p className="text-[#36454f] font-bold md:text-[22px] text-[13px] text-center md:text-start">
          {p2}
        </p>
        {button}
      </div>

      <Image
        className="w-[44rem] order-1 md:order-2 fill-none mix-blend-multiply"
        src={img}
        alt="image"
        width={704}
        height={607}
      />
    </div>
  );
};

export default BannerHomePage;
