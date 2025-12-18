import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fff",  borderBottom: "1px solid #eee",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
    >
      <div className="container p-2">
        
        <Link className="navbar-brand" to="/"> <h2 className="m-0">EquiTrade</h2></Link>
         
        

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ marginLeft: "400px" }}
          >
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/about"}>About</Link>
            </li>
            <li>
            <Link className="nav-link active" aria-current="page" to={"/product"}>Products</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
