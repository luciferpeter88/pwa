import React, { useState } from "react";
import useHabitsByDate from "../hooks/useHabitsByDate";
import { Link } from "react-router-dom";

function HabitTracker() {
  const today = new Date().toISOString().split("T")[0];
  const { habits, loading, addHabit, toggleHabit, editHabit, deleteHabit } =
    useHabitsByDate(today);

  const [newHabit, setNewHabit] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  // add new habot and save it in the localStorage
  const handleAdd = () => {
    if (newHabit.trim()) {
      addHabit(newHabit.trim());
      setNewHabit("");
    }
  };

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const handleEdit = (id) => {
    if (editingText.trim()) {
      editHabit(id, editingText.trim());
      setEditingId(null);
      setEditingText("");
    }
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-lg font-bold">
          Daily Habit Tracker
        </h1>
        <Link to="/history" className="text-[#f88415] text-sm">
          History
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-[#f88415] text-md font-semibold mb-4">
          Today's Habits
        </h2>
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="flex items-center justify-between bg-[#232828] rounded-md p-4 shadow-md"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={habit.completed}
                    onChange={() => toggleHabit(habit.id)}
                    className="form-checkbox h-5 w-5 text-[#f88415] mr-3"
                  />
                  {editingId === habit.id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="p-1 rounded-md bg-[#141919] text-gray-100 border border-gray-600 focus:outline-none"
                    />
                  ) : (
                    <span
                      className={`text-sm ${
                        habit.completed
                          ? "line-through text-gray-400"
                          : "text-gray-100"
                      }`}
                    >
                      {habit.name}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2 text-sm">
                  {editingId === habit.id ? (
                    <button
                      onClick={() => handleEdit(habit.id)}
                      className="text-[#f88415] hover:text-white transition"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(habit.id, habit.name)}
                      className="text-[#f88415] hover:text-white transition"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="text-[#f88415] hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Habit Section */}
        <div className="mt-6 bg-[#232828] rounded-md p-4 shadow-md">
          <h2 className="text-[#f88415] text-lg font-semibold mb-2">
            Add a New Habit
          </h2>
          <div className="flex">
            <input
              type="text"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              placeholder="Enter new habit"
              className="flex-1 p-2 rounded-l-md bg-[#141919] text-gray-100 border border-gray-600 focus:outline-none"
            />
            <button
              onClick={handleAdd}
              className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-r-md font-medium hover:opacity-90 transition"
            >
              Add
            </button>
          </div>
        </div>
      </main>
      <Link to="/" className="text-[#f88415] text-sm p-4">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default HabitTracker;
