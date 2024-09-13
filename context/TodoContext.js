// context/TodoContext.js
import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (user, title, description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos((prevTodos) => ({
      ...prevTodos,
      [user.email]: [...(prevTodos[user.email] || []), newTodo],
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const editTodo = (user, id, title, description) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [user.email]: prevTodos[user.email].map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      ),
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const deleteTodo = (user, id) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [user.email]: prevTodos[user.email].filter((todo) => todo.id !== id),
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleCompletion = (user, id) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [user.email]: prevTodos[user.email].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, toggleCompletion }}
    >
      {children}
    </TodoContext.Provider>
  );
};
