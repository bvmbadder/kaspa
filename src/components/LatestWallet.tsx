import React from "react";

type PropType = {
  icon: string;
  heading: string;
  body: React.ReactNode; // Corrected to React.ReactNode
};

const LatestWallet = ({ body, heading, icon }: PropType) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center bg-feBg bg-contain bg-center bg-no-repeat max-xl:p-20 p-10">
        <img src={icon} alt="" className="w-40" />
      </div>
      <div className="flex flex-col items-center gap-5 md:w-[70%] text-sm leading-7">
        <div className="uppercase text-pry text-center">{heading}</div>
        <hr className=" border border-pry w-[50%]" />
        <div className="text-white text-center">{body}</div>
      </div>
    </div>
  );
};

export default LatestWallet;
