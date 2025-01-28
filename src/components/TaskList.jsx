/* eslint-disable react/prop-types */
import "react";
import Task from "./Task";
import { Smile } from "lucide-react";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
        <div className="inline-block bg-purple-100 p-6 rounded-2xl mb-4">
          <Smile className="h-12 w-12 text-purple-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">All Clear!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Time to relax or add new tasks to conquer your day. You&apos;ve got this! 💪
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
