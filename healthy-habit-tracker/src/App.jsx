import { useEffect, useState } from "react";
import Splash from "./screens/Splash";
import Settings from "./screens/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
        <Route path="/" element={<Splash />} />
        {/* Define other routes for additional screens */}
      </Routes>
    </Router>
  );
}

export default App;
