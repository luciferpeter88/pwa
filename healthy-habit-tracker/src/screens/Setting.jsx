import React from "react";

function Settings() {
  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">Settings</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Notifications Section */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Notifications
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg">Enable Reminders</span>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#f88415]"
              />
            </div>
          </section>

          {/* API Integrations Section */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              API Integrations
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Configure your hardware APIs for sleep tracking, camera, and more.
            </p>
            <button className="mt-4 bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
              Configure APIs
            </button>
          </section>

          {/* Account Section */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">Account</h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg">Manage Your Account</span>
              <button className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
                Logout
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Settings;
