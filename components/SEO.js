import React from "react";
import SEOPoints from "./SEOPoints";

const SEO = () => {
  return (
    <div className="rounded-3xl my-16 px-8 pt-8 pb-0 bg-gradient-to-b from-[#f6f8fd] to-[#FFFFFF00]">
      <p className="text-[#E68F50] font-bold text-3xl text-center">
        SEO Services
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
        <div>
          <SEOPoints
            h={"Customized SEO Services"}
            p={
              "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business."
            }
            img={"/images/Group 369.png"}
          />
          <SEOPoints
            h={"On-Page SEO Services"}
            p={
              "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes."
            }
            img={"/images/Group 369.png"}
          />
          <SEOPoints
            h={"Off-Page SEO Services"}
            p={
              "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel."
            }
            img={"/images/Group 369.png"}
          />
        </div>
        <div>
          <SEOPoints
            h={"Mobile SEO Services"}
            p={
              "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices."
            }
            img={"/images/Group 369.png"}
          />
          <SEOPoints
            h={"Free Website Audit and Strategies"}
            p={
              "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services."
            }
            img={"/images/Group 369.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default SEO;
