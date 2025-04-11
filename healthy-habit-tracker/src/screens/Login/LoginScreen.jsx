import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login2.png";
import { loginUser } from "../../utils/userService";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await loginUser(form.email, form.password);

    if (!result.success) {
      setMessage(result.reason);
    } else {
      setMessage(`Welcome back, ${result.user.name}!`);
      // store user session
      localStorage.setItem("loggedInUser", JSON.stringify(result.user));
      navigate("/dashboard");
    }
  };

  return (
    <form
      className="bg-[#141919] min-h-screen text-white p-6 flex flex-col justify-center items-center space-y-6"
      onSubmit={handleLogin}
    >
      <img src={login} alt="Login" className=" absolute top-15" />
      <div className="mt-auto w-full">
        {message && <p className="text-red-500 text-md mb-3">{message}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full  p-3 bg-[#232828]/60 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-3 bg-[#232828]/60 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="w-full max-w-sm bg-[#f88415] text-white py-3 rounded-md font-semibold hover:opacity-90">
        Login
      </button>

      <p className="text-sm text-white mb-5">
        Don’t have an account?{" "}
        <button
          onClick={() => navigate("/register")}
          className="text-[#f88415]"
        >
          Create one
        </button>
      </p>
    </form>
  );
}
