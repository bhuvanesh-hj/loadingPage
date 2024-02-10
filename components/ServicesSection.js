import React from "react";
import Card from "./Card";

const ServicesSection = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-24 ">
      <Card
        img={"/images/locations_2837797 7.png"}
        h={"Unleashing Top Talent Globally"}
        p={
          "We offer 5% top talents and supports companies hiring from various time zones."
        }
      />
      <Card
        img={"/images/promotion_1589592 1.png"}
        h={"Securing Success"}
        p={
          "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation."
        }
      />
      <Card
        img={"/images/pin_3192970 1.png"}
        h={"Beyond Borders"}
        p={"We provide both, flexible full-time and part-time jobs"}
      />
      <Card
        img={"/images/badge_9616733 1.png"}
        h={"End-to-End Excellence"}
        p={
          "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us."
        }
      />
      <Card
        img={"/images/performance_7655790 1.png"}
        h={"Efficiency Redefined"}
        p={
          "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent."
        }
      />
      <Card
        img={"/images/commitment_5165921 1.png"}
        h={"Simplified Contracts Satisfied Partnerships"}
        p={
          "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support."
        }
      />
    </div>
  );
};

export default ServicesSection;
