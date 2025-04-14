import { useState, useRef } from "react";

function useSpeechToText() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  // Check if the browser supports SpeechRecognition
  const isSupported =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  const startListening = () => {
    if (!isSupported) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }
    // browser specific support
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    // its going to be a one time use untli the there is no voice input
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };

    recognition.onerror = (e) => {
      console.error("Speech recognition error:", e);
      alert("Speech recognition error: " + e.error);
      setIsListening(false);
    };

    recognition.start();
  };
  return {
    transcript,
    setTranscript,
    isListening,
    startListening,
  };
}
export default useSpeechToText;
