import React, { useState } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", completed: false },
    { id: 2, name: "Sleep by 10PM", completed: true },
    { id: 3, name: "Exercise", completed: false },
  ]);
  const [newHabit, setNewHabit] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleToggle = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleDelete = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const handleAdd = () => {
    if (newHabit.trim() !== "") {
      const id =
        habits.length > 0 ? Math.max(...habits.map((h) => h.id)) + 1 : 1;
      setHabits([...habits, { id, name: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const handleEdit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, name: editingText } : habit
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">
          Daily Habit Tracker
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
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
                  onChange={() => handleToggle(habit.id)}
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
                    className={`text-lg ${
                      habit.completed
                        ? "line-through text-gray-400"
                        : "text-gray-100"
                    }`}
                  >
                    {habit.name}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
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
                  onClick={() => handleDelete(habit.id)}
                  className="text-[#f88415] hover:text-white transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Habit Section */}
        <div className="mt-6 bg-[#232828] rounded-md p-4 shadow-md">
          <h2 className="text-[#f88415] text-xl font-semibold mb-2">
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
    </div>
  );
};

export default HabitTracker;
