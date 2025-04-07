import { useEffect, useState } from "react";
import { db } from "../utils/db";

export default function useHabitsByDate(date) {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHabits() {
      setLoading(true);
      const data = await db.habits.where("date").equals(date).toArray();
      setHabits(data);
      setLoading(false);
    }
    fetchHabits();
  }, [date]);

  const addHabit = async (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      completed: false,
      date,
    };
    await db.habits.add(newHabit);
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = async (id) => {
    const updated = habits.map((h) =>
      h.id === id ? { ...h, completed: !h.completed } : h
    );
    const toggled = updated.find((h) => h.id === id);
    await db.habits.update(id, { completed: toggled.completed });
    setHabits(updated);
  };

  const deleteHabit = async (id) => {
    await db.habits.delete(id);
    setHabits(habits.filter((h) => h.id !== id));
  };

  const editHabit = async (id, name) => {
    await db.habits.update(id, { name });
    setHabits(habits.map((h) => (h.id === id ? { ...h, name } : h)));
  };

  return {
    habits,
    loading,
    addHabit,
    toggleHabit,
    deleteHabit,
    editHabit,
  };
}
