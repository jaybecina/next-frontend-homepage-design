import Image from "next/image";
import React from "react";
import Title from "../Title";
import Description from "../Description";
import Button from "../Button";

const HomeSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-7 gap-4 max-w-5xl w-full h-[800px] p-0">
        <div className="col-span-3">
          <Image
            src="/assets/images/woman.png"
            alt="Placeholder Image"
            width={420}
            height={618}
            className="rounded-md p-0"
            style={{
              width: 420,
              height: 618,
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-span-4 pl-[76px]">
          <div className="mb-4" style={{ transform: "translateX(-70%)" }}>
            <Title title="Turn Your Website Into Your Best Sales Person" />
          </div>
          <div className="w-[480px] h-[99px] mb-4">
            <Description
              desc="Triple your sales with a pixel-perfect website.
              At SmartSite Studio, we dont just design and write code, we build a revenue-driving machine for your business."
            />
          </div>

          <div className="flex" style={{ transform: "translateY(70%)" }}>
            <Button
              href=""
              customStyles="bg-orange-500 text-white px-4 py-2 mr-4"
            >
              Talk to Us
            </Button>
            <Button
              href=""
              customStyles="border border-blue-500 text-white px-4 py-2"
            >
              See Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
