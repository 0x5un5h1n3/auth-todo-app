import { AuthProvider } from "../context/AuthContext";
import { TodoProvider } from "../context/TodoContext";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <TodoProvider>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </TodoProvider>
    </AuthProvider>
  );
};

export default Layout;
