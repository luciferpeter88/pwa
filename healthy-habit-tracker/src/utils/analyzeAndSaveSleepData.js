// analyzeAndSaveSleepData.js
import { db } from "./db";

export default async function analyzeAndSaveSleepData(volumeLog, startTime) {
  // check if volumeLog is empty or startTime is not set
  if (!volumeLog.length || !startTime) return;

  const endTime = new Date();
  // calculate duration in minutes
  const durationMinutes = Math.round((endTime - startTime) / 60000);
  // calculate disturbance count, if volume is greater than 150 the noise is too loud
  const disturbanceCount = volumeLog.filter((v) => v > 150).length;
  // calculate average volume
  const averageVolume =
    volumeLog.reduce((sum, val) => sum + val, 0) / volumeLog.length;
  // create sleep data object
  const sleepData = {
    id: crypto.randomUUID(),
    date: startTime.toISOString().split("T")[0],
    start: startTime.toLocaleTimeString(),
    end: endTime.toLocaleTimeString(),
    durationMinutes,
    disturbanceCount,
    averageVolume: Math.round(averageVolume),
    createdAt: new Date().toISOString(),
  };

  try {
    await db.sleep.add(sleepData);
    console.log("Sleep data saved:", sleepData);
  } catch (err) {
    console.error("Failed to save sleep data:", err);
  }
}
