import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const { login } = useAuth(); // ✅ context login
  const navigate = useNavigate(); // ✅ SPA navigation

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(inputValue); // ✅ context call

      if (res.success) {
        toast.success(res.message, { position: "bottom-left" });

        // ✅ NO reload
        setTimeout(() => {
          window.location.href = "http://localhost:5174/"; // or "/"
        }, 800);
      } else {
        toast.error(res.message, { position: "bottom-left" });
      }
    } catch {
      toast.error("Login failed", { position: "bottom-left" });
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="page">
      <div className="form_container">
        <h2>Login Account</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>

          <button type="submit">Submit</button>

          <span>
            Don’t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
