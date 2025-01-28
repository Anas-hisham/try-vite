/* eslint-disable react/prop-types */
import "react";
import { Check, Trash2 } from "lucide-react";

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md flex justify-between items-center bg-white group
        transition-all duration-300 hover:shadow-lg border-l-8
        ${
          task.completed
            ? "border-green-400 opacity-75 hover:opacity-90"
            : "border-purple-400"
        }`}
    >
      <div className="flex-1 pr-4">
        <h3
          className={`text-xl font-semibold transition-all duration-300
            ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        >
          {task.title}
        </h3>
        {task.description && (
          <p className="text-gray-600 mt-2 text-sm">{task.description}</p>
        )}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`p-3 rounded-xl transition-all duration-300
            ${
              task.completed
                ? "bg-green-100 hover:bg-green-200 text-green-600"
                : "bg-purple-100 hover:bg-purple-200 text-purple-600"
            }
            hover:scale-110 active:scale-95`}
        >
          <Check className="h-5 w-5" />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="p-3 rounded-xl bg-red-100 hover:bg-red-200 text-red-600
            transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Task;
