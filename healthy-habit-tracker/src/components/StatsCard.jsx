import GoalEditModal from "../components/GoalMoadl";
import { useState } from "react";
const StatsCard = ({ icon, value, label, settings, type, setRender }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="flex justify-center items-center px-9  bg-[#232828]  rounded-[30px] w-2/3 relative bg-white/5  border border-white/10">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-center items-center p-4 bg-[#f88415]/10 rounded-full w-14 h-14 shadow-[0_0_12px_#f88415]">
          <img src={icon} alt={label} />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-[5vw] font-bold text-white">{value}</h2>
          <p className="text-sm text-[#f88415]">{label}</p>
        </div>
      </div>

      {settings && (
        <button
          className="absolute right-4 bottom-3"
          onClick={() => setShow(true)}
        >
          &#x2699;
        </button>
      )}
      <GoalEditModal
        show={show}
        type={type}
        onClose={() => setShow(false)}
        setRender={setRender}
      />
    </article>
  );
};

export default StatsCard;
