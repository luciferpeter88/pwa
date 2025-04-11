import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import regster from "../../assets/register.png";
import userService from "../../utils/userService";
export function Register() {
  const navigate = useNavigate();
  // State to manage form data
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  // State to manage error messages
  const [message, setMessage] = useState("");
  // one function to handle the registration process based on the name attribute
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerUser = userService;
    try {
      const response = await registerUser(form.name, form.email, form.password);
      // if the response is not successful, set the message and return nothing
      if (!response.success) {
        setMessage(response.message);
        return;
      }
      setMessage(response.message);
      // Clear the form after successful registration
      setForm({ name: "", email: "", password: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(message);

  return (
    <form
      className="bg-[#141919] min-h-screen text-white p-6 flex flex-col justify-center items-center space-y-6"
      onSubmit={handleSubmit}
    >
      <img
        src={regster}
        alt="Register"
        className=" absolute top-5 left-[%]  object-cover rounded-md h-2/3"
      />
      <div className="mt-auto w-full">
        {message && <p className="text-red-500 text-md mb-3">{message}</p>}

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-[#232828]/20 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
          name="name"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-sm p-3 bg-[#232828]/20 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
        name="email"
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-3 bg-[#232828]/60 backdrop-blur-sm border border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] z-10"
        name="password"
        onChange={handleChange}
        autoComplete="off"
        required
      />

      <button className="w-full max-w-sm bg-[#f88415] text-white py-3 rounded-md font-semibold hover:opacity-90">
        Register
      </button>

      <p className="text-sm text-gray-400 mb-5">
        Already have an account?{" "}
        <button type="submit" className="text-[#f88415]">
          Log in
        </button>
      </p>
    </form>
  );
}
export default Register;
