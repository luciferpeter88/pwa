const WorkoutCard = ({ title, image, bgColor }) => {
  return (
    <article
      className={`flex relative w-full ${bgColor} rounded-3xl h-[158px]`}
    >
      <div className="flex absolute left-10 flex-col gap-2.5 items-start top-[27px]">
        <h2 className="text-3xl font-bold leading-8 text-white">{title}</h2>
        <div className="flex gap-2.5 items-center">
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 2.5C21.9035 2.5 27.5 8.09645 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5C8.09645 27.5 2.5 21.9035 2.5 15C2.5 8.09645 8.09645 2.5 15 2.5Z"
                stroke="#7A86F8"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8127 15.5836C17.9014 16.5661 15.4214 18.2286 14.1527 18.7624C13.9502 18.8474 13.4339 19.0274 13.3227 19.0299C13.0864 19.0374 12.8589 18.9049 12.7489 18.6924C12.7064 18.6099 12.5814 18.0711 12.5414 17.8311C12.4227 17.1011 12.3614 15.9674 12.3627 14.8274C12.3614 13.6311 12.4277 12.4436 12.5602 11.7211C12.5952 11.5261 12.6977 11.0774 12.7277 11.0049C12.7839 10.8699 12.8864 10.7636 13.0102 10.6974C13.1052 10.6461 13.2139 10.6186 13.3227 10.6224C13.4339 10.6249 13.8864 10.7836 14.0414 10.8449C15.2639 11.3199 17.8502 13.0424 18.8002 14.0549C18.8852 14.1461 19.1189 14.3911 19.1577 14.4411C19.2464 14.5536 19.2902 14.6899 19.2902 14.8274C19.2902 14.9549 19.2514 15.0849 19.1714 15.1936C19.1302 15.2499 18.8914 15.4999 18.8127 15.5836Z"
                stroke="#7A86F8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-xs text-center text-indigo-400">Check Now</p>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="absolute right-[40px] bottom-[15px] w-[80px] h-[128px]"
      />
    </article>
  );
};

export default WorkoutCard;
