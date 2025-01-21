"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleTask= (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
    console.log(newTask)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* card */}
      <div className="max-w-2xl mx-auto rounded-lg bg-white shadow-lg p-2">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        {/* first div */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={handleTask}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
          />
          <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 " >
            Add
          </button>
        </div>
        {/* list of tasks */}
        <ul>
          <li>
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
