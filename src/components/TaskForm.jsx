import { useState } from "react";
import { PlusCircle } from "lucide-react";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-xl mb-8 space-y-4 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Task Title</label>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Description</label>
        <textarea
          placeholder="Add some details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-black w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 focus:outline-none transition-all resize-none"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3"
      >
        <PlusCircle className="h-5 w-5" />
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default TaskForm;
