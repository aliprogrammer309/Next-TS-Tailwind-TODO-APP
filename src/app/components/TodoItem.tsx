"use client";

import React from "react";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mr-2 form-checkbox h-5 w-5 text-blue-500"
        />
        <span
          className={`${
            completed
              ? "line-through text-gray-500 dark:text-gray-400"
              : "text-gray-800 dark:text-white"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
