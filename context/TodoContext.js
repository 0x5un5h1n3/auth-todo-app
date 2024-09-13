import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage based on the user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const userTodos =
        JSON.parse(localStorage.getItem(`todos_${storedUser.email}`)) || [];
      setTodos(userTodos);
    }
  }, []);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.setItem(
        `todos_${storedUser.email}`,
        JSON.stringify(updatedTodos)
      );
    }
  };

  const editTodo = (id, title, description) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, description } : todo
    );
    setTodos(updatedTodos);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.setItem(
        `todos_${storedUser.email}`,
        JSON.stringify(updatedTodos)
      );
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.setItem(
        `todos_${storedUser.email}`,
        JSON.stringify(updatedTodos)
      );
    }
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.setItem(
        `todos_${storedUser.email}`,
        JSON.stringify(updatedTodos)
      );
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, toggleCompletion }}
    >
      {children}
    </TodoContext.Provider>
  );
};
