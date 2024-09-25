import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsReddit,
  BsTelegram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-graykDivider h-56 w-full"></div>
      <div className="bg-[#231f20] w-full">
        <div className="container mx-auto  gap-6 md:w-[60%] xl:w-[40%] w-full p-8 py-16 flex flex-col items-center">
          <h1 className="font-rubik  text-2xl md:text-[40px] font-semibold uppercase text-white  text-center leading-[45px]">
            join & follow the discord community
          </h1>
          <h4 className="text-purple font-light leading-8 text-center">
            We are a growing community and are always looking for enthusiastic
            people to join the project. If you are a coder, marketer, vlogger,
            community manager, enthusiast, or anything else join the Kaspa
            Discord and say, “hi!”
          </h4>
          <button
            className="relative text-[#091744] bg-pry rounded-full px-10 py-4 w-fit font-rubik text-sm font-medium flex items-center gap-2 transition-all duration-300 group"
            style={{ boxShadow: "0px 12px 28px -6px rgba(20, 241, 217, 0.24)" }}
          >
            DISCORD
            <span className="inline-block opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </button>
          <h3 className="text-white font-semibold text-2xl mt-5">FOLLOW US</h3>
          <div className="grid grid-cols-5 md:grid-cols-9 gap-2 justify-items-center items-center">
            <a
              href="https://twitter.com"
              className="w-[60px] h-[60px] bg-black flex items-center justify-center rounded"
              target="_blank"
            >
              <BsTwitterX fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://reddit.com"
              className="w-[60px] h-[60px] bg-[#FF4501] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsReddit fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://instagram.com"
              className="w-[60px] h-[60px] bg-[#EA2D59] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsInstagram fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://telegram.com"
              className="w-[60px] h-[60px] bg-[#179CDE] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsTelegram fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com"
              className="w-[60px] h-[60px] bg-[#3B5998] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsFacebook fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://linkedln.com"
              className="w-[60px] h-[60px] bg-[#007BB6] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsLinkedin fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://medium.com"
              className="w-[60px] h-[60px] bg-[#08AB6C] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsMedium fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://discord.com"
              className="w-[60px] h-[60px] bg-[#24282D] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsDiscord fill="white" className="w-7 h-7" />
            </a>
            <a
              href="https://youtube.com"
              className="w-[60px] h-[60px] bg-[#A82401] flex items-center justify-center rounded"
              target="_blank"
            >
              <BsYoutube fill="white" className="w-7 h-7" />
            </a>
          </div>

          <h3 className="text-white font-semibold text-2xl my-8 text-center">
            PUBLIC DONATIONS ARE WELCOME!
          </h3>
          <button className="outline-none bg-pry text-white rounded p-2 px-4 w-fit text-lg">
            Donate to DevFund
          </button>
          <h4 className="text-center text-white text-sm mt-3">
            This website is built and maintained with ❤️ by Kaspa Community
            Members
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
