import React from "react";
import profile from "./assets/profile.png";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <img className="image" src={profile} />
        <div className="text-section">
          <p>Username{}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
