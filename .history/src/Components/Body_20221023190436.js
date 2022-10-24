import { useState } from "react";
import "./body.css";
import { data } from "../dummy";
const Body = () => {
  //   const [data, setData] = useState([]);

  return (
    <div>
      {data.map(({ id, title, description, link }) => (
        <div key={id} className="body-container">
          <div className="box">
            <li>{title}</li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
