import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Todos = () => {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <h1 className="text-3xl mb-4">Welcome, {user?.name}!</h1>
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

export default Todos;
