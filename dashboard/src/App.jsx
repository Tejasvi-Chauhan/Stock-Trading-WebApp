import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import api from "./api/api";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
          await new Promise((res) => setTimeout(res, 300));
        const res = await api.get("/check-auth");
        if (!res.data.success) {
          window.location.href = "http://localhost:5173/login";
        }
      } catch {
        window.location.href = "http://localhost:5173/login";
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return null; // loader laga sakta hai

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
