"use client"
import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Todo App
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="mr-2 form-checkbox h-5 w-5 text-blue-500"
              />
              <span
                className={`${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
