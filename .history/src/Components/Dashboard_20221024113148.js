import React from "react";
import profile from "./assets/profile.png";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <img className="image" src={profile} />
        <div className="text-section">
          <a href="https://www.figma.com/file/Yp5Wh9zMGGrOoO83L5dB0c/Designs-for-frontend-(Copy)?node-id=4627%3A385793">
            {/* https://www.figma.com/file/Yp5Wh9zMGGrOoO83L5dB0c/Designs-for-frontend-(Copy)?node-id=4627%3A385793 */}
            Figma Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
