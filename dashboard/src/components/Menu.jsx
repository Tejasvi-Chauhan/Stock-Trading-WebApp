import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    await api.post("/logout");
    window.location.href = "http://localhost:5173/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          {["Dashboard","Orders","Holdings","Positions","Funds"].map((item, index) => (
            <li key={item}>
              <Link
                to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                onClick={() => handleMenuClick(index)}
                style={{ textDecoration: "none" }}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {item}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* PROFILE */}
        <div className="profile-wrapper">
          <div
            className="profile"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <div className="avatar">ZU</div>
            <span className="caret">▾</span>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-info">
                <div className="avatar big">ZU</div>
                <div>
                  <p className="name">User</p>
                  <p className="email">user@email.com</p>
                </div>
              </div>

              <hr />

              <p className="dropdown-item">Profile</p>
              <p className="dropdown-item logout" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
