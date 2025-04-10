import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSpeechToText from "../../hooks/useSpeechToText";

function ProfilePage() {
  const navigate = useNavigate();
  const { transcript, setTranscript, isListening, startListening } =
    useSpeechToText();
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  // const [aboutMe, setAboutMe] = useState("");
  // const [isListening, setIsListening] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 100);
    } catch (err) {
      console.error("Camera access denied", err);
      alert("Camera permission is required to take a profile photo.");
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);
    setShowCamera(false);

    // TODO: Save imageData to IndexedDB later
  };

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6 mt-5">
        <button className="text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="text-md font-semibold">Profile</h2>
        <button className="text-sm text-[#f88415] font-medium">Save</button>
      </div>

      {/* Profile Image */}
      <div className="relative">
        <img
          src={image || "/default-avatar.png"}
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
          defaultValue="Peter Kaszap-Nagy"
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
          inputMode="text"
        />
        <input
          type="email"
          defaultValue="kaszapnagyp@gmail.com"
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
        />
        <input
          type="tel"
          defaultValue="07401772626"
          className="w-full bg-[#232828] text-white p-3 rounded-full border border-[#333]"
        />

        {/* About Me Section */}
        <div className="relative">
          <textarea
            rows={3}
            placeholder="Tell us about yourself..."
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            className="w-full bg-[#232828] text-white p-3 rounded-2xl border border-[#333] resize-none"
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
