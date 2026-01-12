import React from "react";
import { useNavigate } from "react-router-dom";

const OpenAccount = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a EquiTrade account</h1>
        <p className="mt-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <button
          className="p-2 mt-4 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
