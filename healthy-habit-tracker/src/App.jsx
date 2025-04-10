import { useEffect, useState } from "react";
import Dashboard from "./screens/Dashboard";
import DashboardScreen from "./screens/DashboardMain/DashboardScreen";
import DashboardStats from "./screens/Stats/DashboardStatsScreen";
import ProfileDashboard from "./screens/Profile/ProfileDashboardScreen";
import Layout from "./screens/Profile/components/Layout";
import WaterTrackerPage from "./screens/Profile/WaterTrackerScreen";
import StepTrackerPage from "./screens/Profile/StepTrackerScreen";
import AddCalorieScreen from "./screens/Add/AddCalorieScreen";
import AddWaterScreen from "./screens/Add/AddWaterScreen";
import StepCounterScreen from "./screens/Add/StepCountScreen";
import ProfilePage from "./screens/ProfileSetting/ProfileSettingsScreen";
import DailyGoals from "./screens/DailyGoals/DailyGoalsScreen";
import Login from "./screens/Login/LoginScreen";
import Register from "./screens/Register/RegisterScreen";
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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
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
