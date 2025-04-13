import { useEffect, useState } from "react";
import DashboardScreen from "./screens/DashboardMain/DashboardScreen";
import DashboardStatsScreen from "./screens/Stats/DashboardStatsScreen";
import ProfileDashboardScreen from "./screens/Profile/ProfileDashboardScreen";
import Layout from "./screens/Profile/components/Layout";
import WaterTrackerScreen from "./screens/Profile/WaterTrackerScreen";
import StepTrackerScreen from "./screens/Profile/StepTrackerScreen";
import AddCalorieScreen from "./screens/Add/AddCalorieScreen";
import AddWaterScreen from "./screens/Add/AddWaterScreen";
import StepCounterScreen from "./screens/Add/StepCountScreen";
import ProfilePageScreen from "./screens/ProfileSetting/ProfileSettingsScreen";
import DailyGoalsScreen from "./screens/DailyGoals/DailyGoalsScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    check();

    window.addEventListener("resize", check);
    return () => {
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/stats" element={<DashboardStatsScreen />} />
        <Route path="/profile" element={<Layout />}>
          <Route index element={<ProfileDashboardScreen />} />
          <Route path="water" element={<WaterTrackerScreen />} />
          <Route path="steps" element={<StepTrackerScreen />} />
        </Route>
        <Route path="/add-kcal" element={<AddCalorieScreen />} />
        <Route path="/add-water" element={<AddWaterScreen />} />
        <Route path="/step-count" element={<StepCounterScreen />} />
        <Route path="/profile-settings" element={<ProfilePageScreen />} />
        <Route path="/daily-goals" element={<DailyGoalsScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
