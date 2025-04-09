import TrackingTabs from "./TrackingTabs";
import BottomNavigation from "../DashboardMain/BottomNavigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full text-white bg-[#141919]">
      <header className="mt-7.5 text-[5vw] text-center">Profile</header>
      <TrackingTabs />
      <section className="mt-8 w-full px-4">
        <Outlet />
      </section>
      <BottomNavigation />
    </main>
  );
};

export default Layout;
