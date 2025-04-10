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
// import StepTrackerPage from "./screens/StepTrackerPage";
import StepHistoryPage from "./screens/StepHistoryPage";
import CalorieMaintenancePage from "./screens/CalorieMaintenance";
// newly added imports
import DashboardStats from "./screens/Stats/DashboardStats";
import ProfileDashboard from "./screens/Profile/ProfileDashboard";
import Layout from "./screens/Profile/Layout";
import WaterTrackerPage from "./screens/Profile/WaterTracker";
import StepTrackerPage from "./screens/Profile/StepTracker";
import AddCalorieScreen from "./screens/Add/AddCalorieScreen";
import AddWaterScreen from "./screens/Add/AddWaterScreen";
import StepCounterScreen from "./screens/Add/StepCountScreen";
import ProfilePage from "./screens/ProfileSetting/ProfileSettings";
import DailyGoals from "./screens/DailyGoals/DailyGoals";
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
        {/* <Route path="/steps" element={<StepTrackerPage />} /> */}
        <Route path="/step-history" element={<StepHistoryPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/maintenance" element={<CalorieMaintenancePage />} />
        {/* newly added routes */}
        <Route path="/stats" element={<DashboardStats />} />
        <Route path="/profile" element={<Layout />}>
          <Route index element={<ProfileDashboard />} />
          <Route path="water" element={<WaterTrackerPage />} />
          <Route path="steps" element={<StepTrackerPage />} />
        </Route>
        <Route path="/add-kcal" element={<AddCalorieScreen />} />
        <Route path="/add-water" element={<AddWaterScreen />} />
        <Route path="/step-count" element={<StepCounterScreen />} />
        <Route path="/profile-settings" element={<ProfilePage />} />
        <Route path="/daily-goals" element={<DailyGoals />} />
      </Routes>
    </Router>
  );
}

export default App;
