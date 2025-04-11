import React from "react";
import { useNavigate } from "react-router-dom";
import regster from "../../assets/register.png";
export function Register() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#141919] min-h-screen text-white p-6 flex flex-col justify-center items-center space-y-6">
      <img
        src={regster}
        alt="Register"
        className=" absolute top-5 left-[%]  object-cover rounded-md h-2/3"
      />

      <input
        type="text"
        placeholder="Full Name"
        className="w-full mt-auto max-w-sm p-3 bg-[#232828]/20 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-sm p-3 bg-[#232828]/20 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-3 bg-[#232828]/60 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
      />

      <button
        className="w-full max-w-sm bg-[#f88415] text-white py-3 rounded-md font-semibold hover:opacity-90"
        onClick={() => navigate("/")}
      >
        Register
      </button>

      <p className="text-sm text-gray-400 mb-5">
        Already have an account?{" "}
        <button onClick={() => navigate("/")} className="text-[#f88415]">
          Log in
        </button>
      </p>
    </div>
  );
}
export default Register;
