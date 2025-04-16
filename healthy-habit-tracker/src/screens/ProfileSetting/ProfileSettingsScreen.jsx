import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSpeechToText from "../../hooks/useSpeechToText";
import useCapturePicture from "../../hooks/useCapturePicture";
import { getLoggedInUser } from "../../utils/auth";
import { db } from "../../utils/db";

function ProfilePage() {
  const navigate = useNavigate();
  // Lekéri a bejelentkezett felhasználót (localStorage-ből)
  const { user } = getLoggedInUser();

  // Speech-to-text hook
  const { transcript, setTranscript, isListening, startListening } =
    useSpeechToText();

  // Kezdeti állapot, tartalmazza a user adatait
  const [userd, setUserd] = useState({
    email: "",
    name: "",
    phone: "",
    about: transcript,
    pictureSrc: "",
  });

  // Kamera hook
  const { image, showCamera, videoRef, canvasRef, openCamera, capturePhoto } =
    useCapturePicture();

  // Beállítjuk a komponens indulásakor a user adatait
  useEffect(() => {
    setUserd(user);
  }, []);

  // Ha új kép érkezik, frissítjük a pictureSrc-et
  useEffect(() => {
    if (image) {
      setUserd((prev) => ({
        ...prev,
        pictureSrc: image,
      }));
    }
  }, [image]);

  // Input változások kezelése
  function handleChange(e) {
    const { name, value } = e.target;
    setUserd((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  // Mentés: frissítjük a user adatait az adatbázisban és a localStorage-ben
  async function handleSubmit(e) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      ...userd,
      about: transcript,
      id: user.id,
    };

    console.log("Elmentendő user:", updatedUser);

    try {
      await db.users.put(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      console.log("User updated in DB + localStorage:", updatedUser);
    } catch (err) {
      console.error("Hiba mentés közben:", err);
    }
  }

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6 mt-5">
        <button className="text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="text-md font-semibold">Profile</h2>
        <button
          className="text-sm text-[#f88415] font-medium"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>

      {/* Profile Image */}
      <div className="relative">
        <img
          key={userd.pictureSrc} // Friss rendereléshez
          src={userd.pictureSrc || "https://via.placeholder.com/150"}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border border-gray-600"
        />
        <button
          onClick={openCamera}
          className="absolute bottom-1 right-1 bg-blue-600 p-1 rounded-full"
        >
          ✎
        </button>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-[#141919] bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-4">
          <video ref={videoRef} className="w-64 h-64 rounded-md bg-gray-800" />
          <canvas ref={canvasRef} className="hidden" />
          <button
            onClick={capturePhoto}
            className="bg-[#f88415] text-black px-6 py-2 rounded-md font-medium hover:opacity-90"
          >
            Capture
          </button>
        </div>
      )}

      {/* Inputs */}
      <div className="w-full mt-8 space-y-4">
        <input
          type="text"
          value={userd.name}
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          value={userd.email}
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
          name="email"
          onChange={handleChange}
        />
        <input
          type="tel"
          value={userd.phone || ""}
          placeholder="Phone Number"
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
          name="phone"
          inputMode="tel"
          onChange={handleChange}
        />

        {/* About Me Section */}
        <div className="relative">
          <textarea
            rows={3}
            placeholder="Tell us about yourself..."
            value={transcript}
            onChange={(e) => {
              setTranscript(e.target.value);
              handleChange(e);
            }}
            className="w-full bg-[#232828] text-white p-3 rounded-2xl border border-[#333] resize-none"
            name="about"
          />
          <button
            onClick={startListening}
            className="absolute bottom-2 right-3 text-white bg-[#f88415] px-3 py-1 rounded-full text-sm hover:opacity-90"
          >
            {isListening ? "Listening..." : "Speak"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
