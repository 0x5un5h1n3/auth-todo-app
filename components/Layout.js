// components/Layout.js
import { AuthProvider } from "../context/AuthContext";
import { TodoProvider } from "../context/TodoContext";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <TodoProvider>
        <div className="max-w-4xl mx-auto p-4">{children}</div>
      </TodoProvider>
    </AuthProvider>
  );
};

export default Layout;
