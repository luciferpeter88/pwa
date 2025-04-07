// useSleepTracker.js
import { useRef, useState } from "react";
import analyzeAndSaveSleepData from "../utils/analyzeAndSaveSleepData";

export default function useSleepTracker() {
  const [tracking, setTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [volumeLog, setVolumeLog] = useState([]);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);

  // Handles starting or stopping sleep tracking
  const handleToggle = async () => {
    if (tracking) {
      // alansye and save sleep data
      await analyzeAndSaveSleepData(volumeLog, startTime);
      // Stop tracking
      setTracking(false);
      setStartTime(null);
      // if audioContextRef.current is not null, close the context
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
      // if audioStream is not null, stop the stream
      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
        setAudioStream(null);
      }
      console.log("Sleep Log Volume levels:", volumeLog);
    } else {
      try {
        // Request microphone access
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setAudioStream(stream);

        // Initialize AudioContext and analyser
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        sourceRef.current = source;

        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;

        source.connect(analyser);

        // Start tracking session
        setStartTime(new Date());
        setTracking(true);

        const log = [];

        // Analyze and log volume spikes for later processing
        const detectVolume = () => {
          analyser.getByteTimeDomainData(dataArray);
          const max = Math.max(...dataArray);
          log.push(max);
          setVolumeLog([...log]);
          animationRef.current = requestAnimationFrame(detectVolume);
        };

        detectVolume();
      } catch (err) {
        console.error("Microphone access denied or error:", err);
      }
    }
  };

  return {
    tracking,
    startTime,
    volumeLog,
    handleToggle,
  };
}
