const MetricCard = ({ icon, value, label, bgColor, iconBgColor }) => {
  return (
    <article
      className={`flex gap-3 items-center py-5 pl-4 w-full rounded-3xl ${bgColor}`}
    >
      <div
        className={`flex justify-center items-center w-12 h-12 ${iconBgColor} rounded-full`}
      >
        <img src={icon} alt={label} />
      </div>
      <div className="flex flex-col gap-1.5 items-start">
        <h3 className="text-[5vw] font-bold text-center text-white">{value}</h3>
        <p className="text-[3vw] text-[#f88415]">{label}</p>
      </div>
    </article>
  );
};

export default MetricCard;
