const ProgressCard = () => {
  return (
    <section className="flex relative flex-col gap-2.5 justify-center items-center px-9 py-7 w-full bg-[#232828] rounded-3xl">
      <div className="flex gap-2.5 items-center z-[1]">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-[5vw] font-bold text-white">
            Your Weekly Progress
          </h2>
          <p className="text-sm text-indigo-100">Your weekly report</p>
        </div>
        <div className="relative">
          <svg
            className="w-[22vw] h-[22vw]"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49C0 21.938 21.938 0 49 0C76.062 0 98 21.938 98 49ZM10.78 49C10.78 70.1083 27.8917 87.22 49 87.22C70.1083 87.22 87.22 70.1083 87.22 49C87.22 27.8917 70.1083 10.78 49 10.78C27.8917 10.78 10.78 27.8917 10.78 49Z"
              fill="#f88415"
            />
            <path
              d="M57.6198 6.25037C58.2082 3.33228 61.0639 1.41507 63.8997 2.32025C69.7034 4.17273 75.1263 7.09639 79.8808 10.9556C86.0342 15.9504 90.8843 22.3632 94.015 29.6441C97.1457 36.9249 98.4636 44.8565 97.8556 52.7586C97.2477 60.6607 94.7321 68.2973 90.5246 75.0137C86.317 81.73 80.5432 87.3255 73.6982 91.3202C66.8531 95.315 59.1413 97.5898 51.224 97.9495C43.3068 98.3092 35.4204 96.7431 28.2414 93.3856C22.6944 90.7913 17.6977 87.1874 13.4986 82.7736C11.4468 80.6168 11.926 77.2108 14.2949 75.4081C16.6639 73.6055 20.0217 74.0976 22.1395 76.1897C25.2359 79.2486 28.8417 81.7656 32.8083 83.6208C38.4079 86.2396 44.5593 87.4612 50.7348 87.1806C56.9102 86.9 62.9254 85.1257 68.2646 82.0098C73.6037 78.8939 78.1073 74.5294 81.3892 69.2906C84.671 64.0519 86.6332 58.0953 87.1074 51.9317C87.5816 45.7681 86.5536 39.5814 84.1117 33.9024C81.6697 28.2233 77.8867 23.2213 73.087 19.3254C69.6872 16.5657 65.8491 14.4193 61.7457 12.9678C58.9393 11.9751 57.0314 9.16846 57.6198 6.25037Z"
              fill="white"
            />
            <text
              fill="white"
              xmlSpace="preserve"
              className="text-[8vw]"
              style={{ whiteSpace: "pre" }}
              fontFamily="Rubik"
              letterSpacing="0em"
            >
              <tspan x="26.0889" y="59.275">
                65
              </tspan>
            </text>
            <text
              fill="white"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Rubik"
              fontSize="12"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="63.501" y="59.275">
                %
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProgressCard;
