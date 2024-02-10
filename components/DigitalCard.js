import Image from "next/image";
import React from "react";

const DigitalCard = ({ img, h1, h2, p }) => {
  return (
    <div
      className="pb-32 p-6 relative rounded-3xl flex flex-col md:gap-4 gap-2"
      style={{
        border: "1px solid purple",
        background:
          "linear-gradient(135deg, #FFF 0%, rgba(255, 255, 255, 0.00) 50%)",
      }}
    >
      <div className="flex gap-2 mb-4 justify-around">
        <div className="p-1 rounded-lg">
          <Image
            src={img}
            alt="icon"
            className="md:w-[75] md:h-[75] w-[35] h-[35] mix-blend-multiply"
            width={75}
            height={75}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl text-[#0A56F1] md:text-[25px] text-[16px]">
            {h1}
          </p>
          <p className="font-bold text-xl text-[#0A56F1] md:text-[25px] text-[16px]">
            {h2}
          </p>
        </div>
      </div>
      <div>
        <p className="text-center mb-4 md:text-[22px] text-[14px]">{p}</p>
      </div>
      <button className="mb-8 rounded-full px-4 py-2 absolute bottom-1">
        <Image
          src={"/images/Group 401.png"}
          alt="arrow"
          width={50}
          height={50}
          className="bg-white mix-blend-multiply md:w-[50px] md:h-[50px] w-[25px] h-[25px]"
        />
      </button>
    </div>
  );
};

export default DigitalCard;
