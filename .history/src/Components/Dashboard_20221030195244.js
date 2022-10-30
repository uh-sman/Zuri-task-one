import React from "react";
import profile from "./assets/profile.png";
import share from "./assets/Avatar.png";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <img src={share} className="share" />
      <div className="dashboard-container">
        <img className="image" src={profile} />
        <div className="text-section">
          <a href="https://twitter.com/UsmanUm58956112">@UsmanUm58956112</a>
        </div>
        {/* SLACK NAME */}
      </div>
    </div>
  );
};

export default Dashboard;
