import React from "react";
import profile from "./assets/profile.png";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div>
        <img className="image" src={profile} />
      </div>
    </div>
  );
};

export default Dashboard;
