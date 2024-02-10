import React from "react";

const Card = ({ img, h, p }) => {
  return (
    <div
      className="p-9 text-center rounded-3xl"
      style={{
        boxShadow: "0px 8px 10px 0px #65656540",
        border: "1px solid #65656540",
      }}
    >
      <div className="flex justify-center items-center">
        <img src={img} alt="img" />
      </div>
      <p className="font-bold text-lg text-[#0A56F1] my-4">{h}</p>

      <p className="text-center mb-4">{p}</p>
    </div>
  );
};

export default Card;
