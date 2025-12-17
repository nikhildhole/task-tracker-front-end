'use client';

import { useEffect, useState } from 'react';
import api from './lib/axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get<Task[]>('/api/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create new task
  const createTask = async (task: { title: string; description: string }) => {
    await api.post('/api/tasks', {
      ...task,
      completed: false,
    });
    fetchTasks();
  };

  // Update task
  const updateTask = async (id: number, updatedTask: Partial<Task>) => {
    await api.put(`/api/tasks/${id}`, updatedTask);
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id: number) => {
    await api.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  if (loading) {
    return <p className="text-center mt-10">Loading tasks...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 Task Tracker</h1>
      <TaskForm onCreate={createTask} />
      <TaskList
        tasks={tasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
