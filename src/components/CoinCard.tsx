type PropType = {
  icon: string;
  body: React.ReactNode;
};
const CoinCard = ({ body, icon }: PropType) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={icon} alt={icon} className="w-[180px]" />
      <div className="text-pry">{body}</div>
    </div>
  );
};

export default CoinCard;
