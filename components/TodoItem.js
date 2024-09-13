// components/TodoItem.js
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { editTodo, deleteTodo, toggleCompletion } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleEdit = () => {
    editTodo(todo.id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div
      className={`bg-white shadow-md rounded p-4 flex flex-col ${
        todo.completed
          ? "border-l-4 border-green-500 bg-green-100"
          : "border-l-4 border-red-500 bg-red-100"
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 mb-2 rounded"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border p-2 mb-2 rounded"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3
            className={`text-lg font-bold ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`text-gray-700 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.description}
          </p>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => toggleCompletion(todo.id)}
              className={`font-bold py-1 px-2 rounded ${
                todo.completed
                  ? "bg-green-500 hover:bg-green-700 text-white"
                  : "bg-yellow-500 hover:bg-yellow-700 text-white"
              }`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
