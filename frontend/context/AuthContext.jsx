import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api"; // agar api folder nahi hai to niche bataya hai

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/check-auth");
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (data) => {
    const res = await api.post("/login", data);
    if (res.data.success) setUser(res.data.user);
    return res.data;
  };

  const signup = async (data) => {
    const res = await api.post("/signup", data);
    if (res.data.success) setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await api.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
