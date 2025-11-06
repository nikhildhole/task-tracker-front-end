'use client';

import { useState } from 'react';

export default function TaskList({ tasks, onUpdate, onDelete }: any) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState({ title: '', description: '', completed: false });

  const startEdit = (task: any) => {
    setEditId(task.id);
    setEditData(task);
  };

  const handleUpdate = (id: number) => {
    onUpdate(id, editData);
    setEditId(null);
  };

  return (
    <div className="grid gap-4 max-w-xl mx-auto">
      {tasks.map((task: any) => (
        <div key={task.id} className="bg-white p-4 rounded-2xl shadow-md">
          {editId === task.id ? (
            <div className="flex flex-col gap-2">
              <input
                className="border p-2 rounded"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
              <textarea
                className="border p-2 rounded"
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editData.completed}
                  onChange={(e) => setEditData({ ...editData, completed: e.target.checked })}
                />
                Completed
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(task.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-sm mt-1">
                Status:{' '}
                <span className={task.completed ? 'text-green-600' : 'text-red-500'}>
                  {task.completed ? 'Done' : 'Pending'}
                </span>
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => startEdit(task)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
