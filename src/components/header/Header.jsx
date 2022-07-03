import React from "react";
import "./Header.css";

function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <div className="brand-text">
          <h2>Crypto-Dashboard</h2>
        </div>
        <div className="search-box">
          <input type="text" className="search" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
