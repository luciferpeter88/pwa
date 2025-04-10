import GlassButton from "./GlassButton";
import fire from "../assets/Fire.png";
import glass from "../assets/Glass.png";
import step from "../assets/Step.png";
function FloatingGlassMenu() {
  return (
    <div className="fixed bottom-5 right-6 flex space-x-3">
      <GlassButton
        icon={fire}
        label="Kcal"
        color="bg-yellow-100/10"
        textColor="text-yellow-300"
        link="/add-kcal"
      />
      <GlassButton
        icon={step}
        label="Steps"
        color="bg-red-100/10"
        textColor="text-red-300"
        position="relative bottom-10"
        link="/step-count"
      />
      <GlassButton
        icon={glass}
        label="Water"
        color="bg-blue-100/10"
        textColor="text-blue-300"
        position="relative bottom-15"
        link="/add-water"
      />
    </div>
  );
}

function GlassMenu() {
  return (
    <div className="fixed h-screen top-0 left-0 right-0 flex justify-center p-4 backdrop-blur bg-white/10 ">
      <FloatingGlassMenu />
    </div>
  );
}
export default GlassMenu;
