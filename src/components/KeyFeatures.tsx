import { BsArrowRightCircle } from "react-icons/bs";

type PropType = {
  icon: string;
  heading: string;
  body: string;
};

const KeyFeatures = ({ body, heading, icon }: PropType) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex items-center justify-center bg-feBg bg-contain bg-center bg-no-repeat max-xl:p-20 p-20">
        <img src={icon} alt="" className="w-40 py-12" />
      </div>
      <div className="flex flex-col items-center gap-4 md:w-[90%]  leading-7 -mt-16">
        <div className="uppercase font-rubik text-white text-center">
          {heading}
        </div>
        <div className="text-purple text-center font-lato text-sm leading-8">
          {body}
        </div>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 text-sm uppercase text-pry mt-auto border-b-2 border-pry/40 pb-2 px-2"
      >
        <h1 className="font-rubik">Learn More</h1>
        <BsArrowRightCircle />
      </a>
    </div>
  );
};

export default KeyFeatures;
