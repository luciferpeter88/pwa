import React, { useRef, useState } from "react";

function CameraUpload() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }
  };

  const captureImage = () => {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    context.drawImage(videoRef.current, 0, 0, width, height);
    const imageData = canvasRef.current.toDataURL("image/png");
    setCapturedImage(imageData);
  };

  return (
    <div className="bg-primary min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-third shadow-md">
        <h1 className="text-secondary text-2xl font-bold">Camera Upload</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 flex flex-col items-center">
        <div className="bg-third rounded-md p-4 shadow-md w-full max-w-md flex flex-col items-center">
          <video
            ref={videoRef}
            className="w-full rounded-md mb-4"
            autoPlay
            playsInline
          ></video>
          <button
            onClick={startCamera}
            className="bg-secondary text-primary px-4 py-2 rounded-md font-medium hover:opacity-90 transition mb-4"
          >
            Start Camera
          </button>
          <button
            onClick={captureImage}
            className="bg-secondary text-primary px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Capture Image
          </button>
          {capturedImage && (
            <div className="mt-4">
              <img
                src={capturedImage}
                alt="Captured"
                className="rounded-md shadow-md"
              />
            </div>
          )}
          <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
      </main>
    </div>
  );
}

export default CameraUpload;
