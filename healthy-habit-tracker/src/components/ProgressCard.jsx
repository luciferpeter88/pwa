const ProgressCard = ({ progress = "Weekly", goal, precent, type }) => {
  return (
    <section className="flex relative flex-col gap-2 justify-center items-center px-5 py-5 w-full bg-[#232828] rounded-3xl">
      <div className="flex gap-5 justify-between items-center w-full">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-[4vw] font-medium text-white">
            Your {progress}{" "}
            <span className="font-bold text-[#f88415] capitalize">{type}</span>{" "}
          </h2>
          <p className="text-sm text-white">
            Progress is set to{" "}
            <span className="ml-2 text-[5vw] font-semibold text-[#f88415]">
              {goal}
            </span>{" "}
          </p>
        </div>
        <div className="relative">
          <svg viewBox="0 0 100 100" className="w-[20vw] h-[20vw]">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#FFFFFF"
              strokeWidth="10"
              fill="none"
              opacity="0.2"
            />

            {/* Narancssárga dinamkus progress kör */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#f88415"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="282.6"
              strokeDashoffset={(1 - precent / 100) * 282.6}
              transform="rotate(-90 50 50)"
              className="transition-all duration-700"
            />

            {/* Százalék szöveg középen */}
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontFamily="Rubik"
              fontWeight="bold"
            >
              {precent}%
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProgressCard;
