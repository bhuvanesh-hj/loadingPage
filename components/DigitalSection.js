"use client";

import React from "react";
import DigitalCard from "./DigitalCard";
import styles from "./DigitalSection.module.css";

const DigitalSection = () => {
  return (
    <div
      className={`grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-20 ${styles.sliderContainer}`}
    >
      <DigitalCard
        img={"/images/software_4224716 1.png"}
        h1={"Website"}
        h2={"Development"}
        p={
          "We specialize in responsive website development, ensuring optimal performance across various devices."
        }
      />
      <DigitalCard
        img={"/images/code_3829489 1.png"}
        h1={"App"}
        h2={"Development"}
        p={
          "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation."
        }
      />

      <DigitalCard
        img={"/images/cloud-computing_5738519 1.png"}
        h1={"Software"}
        h2={"Development"}
        p={
          "We specialize in tailored solutions ensuring business growth and efficiency by providing superior software."
        }
      />

      <DigitalCard
        img={"/images/marketing_8227788 1.png"}
        h1={"Digital "}
        h2={"Marketing"}
        p={
          "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies."
        }
      />

      <DigitalCard
        img={"/images/marketing_8227788 1.png"}
        h1={"UI/UX"}
        h2={"Design"}
        p={
          "We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces."
        }
      />

      <DigitalCard
        img={"/images/seo_10390574 1.png"}
        h1={"SEO "}
        h2={"Optimization"}
        p={
          "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience."
        }
      />
    </div>
  );
};

export default DigitalSection;
