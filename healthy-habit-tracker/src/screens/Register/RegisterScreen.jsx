// RegisterPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#141919] min-h-screen text-white p-6 flex flex-col justify-center items-center space-y-6">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full max-w-sm p-3 bg-[#232828] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-sm p-3 bg-[#232828] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415]"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-3 bg-[#232828] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415]"
      />

      <button
        className="w-full max-w-sm bg-[#f88415] text-white py-3 rounded-md font-semibold hover:opacity-90"
        onClick={() => navigate("/")}
      >
        Register
      </button>

      <p className="text-sm text-gray-400">
        Already have an account?{" "}
        <button onClick={() => navigate("/")} className="text-[#f88415]">
          Log in
        </button>
      </p>
    </div>
  );
}
export default Register;
