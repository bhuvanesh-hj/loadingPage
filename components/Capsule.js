import React from "react";

const Capsule = ({ title }) => {
  return (
    <button className="text-[#0A56F1] px-4 py-2 font-semibold text-lg rounded-full flex justify-center items-center border-solid border-2 border-[#0A56F1] bg-white">
      {title}
    </button>
  );
};

export default Capsule;
