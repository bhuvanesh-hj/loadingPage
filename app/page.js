import BannerHomePage from "@/components/BannerHomePage";
import ChooseCard from "@/components/ChooseCard";
import DigitalSection from "@/components/DigitalSection";
import SEO from "@/components/SEO";
import ServicesSection from "@/components/ServicesSection";
import Solutions from "@/components/Solutions";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(270deg, rgba(230, 143, 80, 0.1) 0%, rgba(10, 86, 241, 0.1) 100%)",
        padding: "3rem",
      }}
    >
      <BannerHomePage
        heading={"Diversifying the Designs of Digital World"}
        p1={
          "Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients."
        }
        p2={
          "EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing."
        }
        img={"/images/2809413-removebg-preview 1.jpg"}
        button={
          <button className="bg-[#E68F50] w-[214px] h-[60px] mt-24 pl-3 pr-9 py-2 flex justify-between items-center gap-2 rounded-[50px]">
            <div className="w-[40px] h-[40px] rounded-full bg-slate-50 flex justify-center items-center">
              <Image
                src={"/images/Vector.png"}
                alt="call"
                width={20}
                height={20}
              />
            </div>
            <p className="text-white font-bold text-[21px]">Book a Call</p>
          </button>
        }
      />

      <Solutions />

      <div className="text-center my-16 md:flex md:flex-col hidden">
        <p className="text-[#E68F50] font-bold text-3xl">Stay Ahead! </p>
        <p className="text-[#E68F50] font-bold text-3xl">
          Launch Your Next Project with Stackkaroo
        </p>
      </div>

      <BannerHomePage
        heading={"Our Story"}
        p1={
          "Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations. "
        }
        p2={
          "Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride."
        }
        img={
          "/images/baf2eadd-07e8-4143-a6d9-c5610f45f3ec-cover-removebg-preview 1.png"
        }
        button={
          <button className="bg-[#0A56F1] w-[250px] h-[35px] md:bg-[#E68F50] md:w-[404px] md:h-[60px] mt-24 md:pl-3 pl-2 py-2 pr-1 md:py-2 flex justify-start gap-2 items-center rounded-[50px]">
            <Image
              src={"/images/Group 394.png"}
              alt="call"
              width={40}
              height={40}
              className="w-[23px] h-[23px] md:w-[40px] md:h-[40px]"
            />
            <p className="text-white font-bold text-[14px] md:text-[25px]">
              Get Estimated Project Cost
            </p>
          </button>
        }
      />

      <div className="text-center my-14">
        <p className="text-[#E68F50] font-bold text-[18px] md:text-[40px]">
          Why Choose Us?
        </p>
        <p className="text-[#36454F] font-bold my-4 text-[13px] md:text-[22px]">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
        </p>
        <p className="text-[#36454F] font-bold my-[-10px] text-[13px] md:text-[22px]">
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>

      <div className="p-4 my-2">
        <div className="flex md:flex-row flex-col md:justify-center gap-12 mb-8">
          <ChooseCard
            p1={"User-Centric"}
            p2={"Approach"}
            img={"/images/Group 395.png"}
          />
          <ChooseCard
            p1={"Customer"}
            p2={"Satisfaction"}
            img={"/images/Group 398.png"}
          />
          <ChooseCard
            p1={"Integrating"}
            p2={"Feedback"}
            img={"/images/Group 397.png"}
          />
        </div>
        <div className="flex md:flex-row flex-col md:justify-center gap-12 mb-8">
          <ChooseCard
            p1={"High Quality "}
            p2={"Products"}
            img={"/images/Group 399.png"}
          />
          <ChooseCard
            p1={"On-Time Product "}
            p2={"Delivery"}
            img={"/images/Group 400.png"}
          />
        </div>
      </div>

      <div className="text-center my-14">
        {" "}
        <p className="text-[#E68F50] font-bold text-[18px] md:text-[40px]">
          Stackkaroo’s Digital Services
        </p>
        <p className="text-[#36454F] font-bold my-4 text-[13px] md:text-[22px]">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
        </p>
        <p className="text-[#36454F] font-bold my-[-10px] text-[13px] md:text-[22px]">
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>

      <DigitalSection />

      <SEO />

      <div className="text-center my-16">
        <p className="text-[#E68F50] font-bold text-3xl text-[18px] md:text-[40px]">
          Stackkaroo’s Talent Hiring & Job Placement Services
        </p>
        <p className="text-[#36454F] font-bold my-4 text-[13px] md:text-[20px]">
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries.
        </p>
        <p className="text-[#36454F] font-bold my-4 text-[13px] md:text-[20px]">
          We also provide global job opportunities with good salaries, support,
          and professional development.
        </p>
      </div>

      <ServicesSection />
    </main>
  );
};

export default page;
