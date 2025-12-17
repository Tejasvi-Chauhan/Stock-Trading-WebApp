import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fff",  borderBottom: "1px solid #eee",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
    >
      <div className="container">
        {/* BRAND */}
        <a className="navbar-brand" href="#">
          <h2 className="m-0">Stock Trading app</h2>
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ marginLeft: "400px" }}
          >
            <li className="nav-item">
              <a className="nav-link active" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
