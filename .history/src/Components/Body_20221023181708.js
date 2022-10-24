import { useState } from "react";
import "./body.css";
import { data } from "../dummy";
const Body = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <div className="body-container">
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Body;
