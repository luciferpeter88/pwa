import { useEffect, useState } from "react";
import SplashScreen from "./screens/Splash";
import Dashboard from "./screens/Dashboard";
import SleepTracking from "./screens/SleepTracking";
import FittnessNutrition from "./screens/FittnessNutrition";
import Settings from "./screens/Setting";
import DailyHabit from "./screens/DailyHabit";
import History from "./screens/History";
import SleepHistoryPage from "./screens/SleepHistory";
import CalorieTrackerPage from "./screens/CalorieTracker";
import CalorieHistoryPage from "./screens/CalorieHistory";
import StepTrackerPage from "./screens/StepTrackerPage";
import StepHistoryPage from "./screens/StepHistoryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    check();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", check);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="h-screen flex items-center justify-center text-center px-4">
        <h1 className="text-xl font-semibold text-gray-700">
          This app is designed for mobile devices only. Please open it on a
          phone or resize your browser window.
        </h1>
      </div>
    );
  }
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sleep-tracking" element={<SleepTracking />} />
        <Route path="/sleep-history" element={<SleepHistoryPage />} />
        <Route path="/daily-habit" element={<DailyHabit />} />
        <Route path="/history" element={<History />} />
        <Route path="/fittness-nutrition" element={<FittnessNutrition />} />
        <Route path="/calories" element={<CalorieTrackerPage />} />
        <Route path="/calorie-history" element={<CalorieHistoryPage />} />
        <Route path="/steps" element={<StepTrackerPage />} />
        <Route path="/step-history" element={<StepHistoryPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
