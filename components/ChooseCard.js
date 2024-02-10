import React from "react";

const ChooseCard = ({ img, p1, p2 }) => {
  return (
    <div
      className="flex gap-2 md:gap-8 md:pr-7 flex-row md:flex-row md:justify-between md:items-center p-4 border-2 border-[#fff] md:rounded-3xl rounded-full"
      style={{
        background:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.075) 0%, rgba(10, 86, 241, 0.075) 100%)",
        boxShadow: "0px 4px 10px 0px rgba(10, 86, 241, 0.25)",
      }}
    >
      <div className="bg-white p-2 md:rounded-lg rounded-full">
        <img src={img} alt="icon" className="md:w-14 w-8" />
      </div>
      <div className="flex md:flex-col flex-row gap-2 items-center justify-center">
        <p className="font-bold text-lg text-[#0A56F1]">{p1}</p>
        <p className="font-bold text-lg text-[#0A56F1]">{p2}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
