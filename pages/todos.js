import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const Todos = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect to the home page
  };

  return (
    <Layout>
      <h1 className="text-3xl mb-4">Welcome, {user ? user.name : "Guest"}!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Logout
      </button>
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

export default Todos;
