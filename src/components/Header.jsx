import React from "react";
import "../styles/Dashboard.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <h1>Daily Grind Cafe Sales Dashboard</h1>
      <div className="month-filters">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
          <button key={month} className="month-btn">{month}</button>
        ))}
      </div>
    </header>
  );
};

export default Header;
