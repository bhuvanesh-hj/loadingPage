import React from "react";
import Capsule from "./Capsule";

const Solutions = () => {
  const arr = [
    "Website Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
  ];
  return (
    <div className="text-center my-16">
      <p className="text-[#36454F] font-bold my-4 md:text-[22px] text-[14px]">
        In the realm of digital solutions, we offer expertise in
      </p>
      <div className="flex flex-wrap justify-center md:flex-row md:justify-around gap-2 my-4">
        {arr.map((item) => (
          <Capsule key={item} title={item} />
        ))}
      </div>
      <p className="text-[#36454F] font-bold my-4 md:text-[22px] text-[14px]">
        showcasing our proficiency across various facets of the digital platform
      </p>
    </div>
  );
};

export default Solutions;
