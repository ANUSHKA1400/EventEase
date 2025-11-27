import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { loginUser } from "../api/authApi";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) {
      // FIX: avoid synchronous setState warning
      Promise.resolve().then(() => {
        setUser(JSON.parse(saved));
      });
    }
  }, []);

  const login = async (credentials) => {
    const res = await loginUser(credentials);
    const { token, user } = res.data;

    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));

    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
