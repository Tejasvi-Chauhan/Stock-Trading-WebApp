import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth(); // ✅ context signup
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signup(inputValue); // ✅ context call

      if (res.success) {
        toast.success(res.message || "Successfully signed up", {
          position: "bottom-left",
        });

        // ✅ NO reload
        setTimeout(() => {
          window.location.href = "http://localhost:5174/"; // ya "/"
        }, 800);
      } else {
        toast.error(res.message, { position: "bottom-left" });
      }
    } catch {
      toast.error("Signup failed", { position: "bottom-left" });
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="page">
      <div className="form_container">
        <h2>Signup Account</h2>

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
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
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
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
