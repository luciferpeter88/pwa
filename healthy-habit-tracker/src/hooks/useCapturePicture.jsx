import React, { useState, useRef } from "react";

function useCapturePicture() {
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    console.log(navigator);
    try {
      if (navigator.permissions) {
        // Check if the camera permission is denied
        // If the permission is denied, show an alert and return
        const permissionStatus = await navigator.permissions.query({
          name: "camera",
        });
        if (permissionStatus.state === "denied") {
          alert(
            "Camera permission is denied. Please allow camera access in your browser settings."
          );
          return;
        }
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 1000);
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
  };
  return {
    image,
    showCamera,
    videoRef,
    canvasRef,
    openCamera,
    capturePhoto,
  };
}

export default useCapturePicture;
