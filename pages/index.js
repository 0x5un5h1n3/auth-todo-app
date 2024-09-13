// pages/index.js
import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Home = () => {
  const { user } = useContext(AuthContext); // Ensure this is inside the Layout

  return (
    <Layout>
      {user ? (
        <>
          <TodoForm />
          <TodoList />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <SignUp />
          <Login />
        </div>
      )}
    </Layout>
  );
};

export default Home;
