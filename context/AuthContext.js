import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const signUp = (email, password, name) => {
    const newUser = { email, password, name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setMessage("Registration successful!");
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
      setMessage("Login successful!");
      return true;
    } else {
      setError("Invalid email or password");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, message, error, signUp, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
