type PropType = {
  text: string;
  to: string;
};
const ConnectCard = ({ text, to }: PropType) => {
  return (
    <a
      href={to}
      target="_blank"
      className="bg-pry p-1 w-fit rounded-md text-black uppercase text-center font-semibold px-3"
    >
      {text}
    </a>
  );
};

export default ConnectCard;
