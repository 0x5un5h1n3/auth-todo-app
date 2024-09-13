import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo, toggleCompletion } = useContext(TodoContext);

  return (
    <div
      className={`p-4 mb-2 rounded-lg ${
        todo.completed ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <h3 className="text-xl">{todo.title}</h3>
      <p>{todo.description}</p>
      <button
        onClick={() => toggleCompletion(todo.id)}
        className="bg-yellow-500 text-white p-2 rounded"
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() =>
          editTodo(todo.id, "Updated Title", "Updated Description")
        }
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Edit
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white p-2 rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
