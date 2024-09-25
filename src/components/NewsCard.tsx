type PropType = {
  title: string;
  date: string;
  text: string;
};
const NewsCard = ({ date, text, title }: PropType) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-4 bg-[#00000008]">
      <h2 className="font-rubik text-black font-semibold">{title}</h2>
      <h3 className="font-rubik text-pry text-sm">by kaspa | {date}</h3>
      <h3 className="text-[#9FB9D6] text-sm leading-8">{text}</h3>
      <h3 className="text-[#9FB9D6] text-sm cursor-pointer mt-auto hover:text-pry">
        read more
      </h3>
    </div>
  );
};

export default NewsCard;
