import { AuthProvider } from "../context/AuthContext";
import { TodoProvider } from "../context/TodoContext";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <TodoProvider>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            {children}
          </div>
        </div>
      </TodoProvider>
    </AuthProvider>
  );
};

export default Layout;
