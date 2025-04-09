const StatsCard = ({ icon, value, label }) => {
  return (
    <article className="flex justify-center items-center px-9  bg-[#232828]  rounded-[30px] w-2/3">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-center items-center p-4 bg-stone-700 rounded-full  w-14 h-14">
          <img src={icon} alt={label} />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-[5vw] font-bold text-center text-white">
            {value}
          </h2>
          <p className="text-sm text-center text-[#f88415]">{label}</p>
        </div>
      </div>
    </article>
  );
};

export default StatsCard;
