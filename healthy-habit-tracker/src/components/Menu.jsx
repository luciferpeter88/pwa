import * as React from "react";
function Menu({ setIsMenuOpen }) {
  const menuItems = [
    { text: "Profile" },
    { text: "Daily Goals" },
    { text: "About" },
    { text: "Settings" },
    { text: "Privacy Policy" },
  ];
  const handleLogout = () => {
    console.log("Logging out...");
  };
  return (
    <nav className="flex overflow-hidden w-full flex-col items-center mx-auto w-full text-[5vw] font-medium leading-none text-center text-white bg-[#232828] h-screen fixed top-0 left-0 z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="absolute top-4 left-5 cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      >
        <path
          d="M2.01642 2.01633C2.12698 1.90549 2.25832 1.81755 2.40292 1.75754C2.54752 1.69754 2.70254 1.66666 2.85909 1.66666C3.01565 1.66666 3.17066 1.69754 3.31526 1.75754C3.45986 1.81755 3.59121 1.90549 3.70177 2.01633L10.0004 8.31734L16.299 2.01633C16.4097 1.90567 16.5411 1.81788 16.6856 1.75799C16.8302 1.6981 16.9852 1.66728 17.1417 1.66728C17.2982 1.66728 17.4532 1.6981 17.5977 1.75799C17.7423 1.81788 17.8737 1.90567 17.9844 2.01633C18.095 2.12699 18.1828 2.25836 18.2427 2.40295C18.3026 2.54753 18.3334 2.7025 18.3334 2.859C18.3334 3.0155 18.3026 3.17047 18.2427 3.31505C18.1828 3.45964 18.095 3.59101 17.9844 3.70167L11.6834 10.0003L17.9844 16.2989C18.095 16.4096 18.1828 16.541 18.2427 16.6856C18.3026 16.8301 18.3334 16.9851 18.3334 17.1416C18.3334 17.2981 18.3026 17.4531 18.2427 17.5977C18.1828 17.7422 18.095 17.8736 17.9844 17.9843C17.8737 18.0949 17.7423 18.1827 17.5977 18.2426C17.4532 18.3025 17.2982 18.3333 17.1417 18.3333C16.9852 18.3333 16.8302 18.3025 16.6856 18.2426C16.5411 18.1827 16.4097 18.0949 16.299 17.9843L10.0004 11.6833L3.70177 17.9843C3.5911 18.0949 3.45973 18.1827 3.31514 18.2426C3.17056 18.3025 3.01559 18.3333 2.85909 18.3333C2.70259 18.3333 2.54763 18.3025 2.40304 18.2426C2.25845 18.1827 2.12708 18.0949 2.01642 17.9843C1.90576 17.8736 1.81798 17.7422 1.75809 17.5977C1.6982 17.4531 1.66737 17.2981 1.66737 17.1416C1.66737 16.9851 1.6982 16.8301 1.75809 16.6856C1.81798 16.541 1.90576 16.4096 2.01642 16.2989L8.31743 10.0003L2.01642 3.70167C1.90558 3.59111 1.81764 3.45977 1.75763 3.31517C1.69763 3.17057 1.66675 3.01556 1.66675 2.859C1.66675 2.70245 1.69763 2.54743 1.75763 2.40283C1.81764 2.25823 1.90558 2.12689 2.01642 2.01633Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col gap-y-10 items-center justify-center h-full">
        {menuItems.map((item) => (
          <button
            key={item.text}
            className={` hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-4 py-2 transition-opacity`}
            onClick={() => console.log(`Navigating to ${item.text}`)}
            aria-label={`Navigate to ${item.text}`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="mt-auto mb-3 text-[5vw] text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md px-4 py-2 transition-colors"
        aria-label="Log out of your account"
      >
        Log Out
      </button>
    </nav>
  );
}

export default Menu;
