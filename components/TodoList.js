import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos available. Please add some!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
