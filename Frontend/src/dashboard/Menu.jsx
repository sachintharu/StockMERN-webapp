import React, { useState } from "react";
import "./dashboard.css"

import { Link, useNavigate } from "react-router-dom";;

const Menu = () => {

  
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();


 

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
   const handleLogout = () => {
    
    localStorage.removeItem("token");

    
    navigate("/");

    // close dropdown
    setIsProfileDropdownOpen(false);
  };

  
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus" style={{ margin: "auto 0" }}>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className="menu selected">Dashboard</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} >
          <div className="avatar">ZU</div>
          <span className="username">USERID</span>
            {/* ✅ Dropdown */}
          {isProfileDropdownOpen && (
            <div className="dropdown">
              <p className="logout-btn" onClick={handleLogout}>
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