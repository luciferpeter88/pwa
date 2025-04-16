import TrackingTabs from "./TrackingTabs";
import BottomNavigation from "../../../components/BottomNavigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full text-white bg-gradient-to-br from-[#141919] via-[#1c1f1f] to-[#101111] relative">
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <header className="mt-7.5 text-[5vw] text-center">Profile</header>
      <TrackingTabs />
      <section className="mt-8 w-full px-3 z-10">
        <Outlet />
      </section>
      <BottomNavigation />
    </main>
  );
};

export default Layout;
