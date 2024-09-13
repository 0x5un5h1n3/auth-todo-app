// context/AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  signUp: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password, name) => {
    const newUser = { email, password, name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
