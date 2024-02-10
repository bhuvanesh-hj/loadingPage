import Image from "next/image";
import React from "react";

const SEOPoints = ({ img, p, h }) => {
  return (
    <div className="flex justify-between gap-2 my-8">
      <Image
        className="pb-28 hidden md:block"
        width={30}
        height={30}
        src={img}
        alt="img"
      />
      <div className="flex flex-col md:items-start items-center">
        <p className="text-xl text-[#0A56F1] font-bold mb-4">{h}</p>
        <p className="text-center md:text-start">{p}</p>
      </div>
    </div>
  );
};

export default SEOPoints;
