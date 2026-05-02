import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeView = () => {
const bookNames = [
  "The Silent Reader",
  "Ocean of Dreams",
  "Whispers of the Old Forest",
  "Concrete City Stories",
  "Floral Tales of the Past",
  "Shadows on Stone Pages",
];
  return (
    <div className=" bg-[#0d2237]  ">
     <div className="container mx-auto flex ">
          <p className="text-2xl text-[#a57e4d] text-center font-serif">New Book</p>
    <Marquee speed={50} pauseOnHover={true} className=" bg-[#0d2237] py-3 font-medium">
  {bookNames.map((name, index) => (
    <span key={index} className="mx-10 text-white font-semibold text-lg">
        {name} |
    </span>
  ))}
</Marquee>
     </div>
    </div>
  );
};

export default MarqueeView;