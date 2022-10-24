import { useState } from "react";
import "./body.css";
import { data } from "../dummy";
const Body = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      {data.map(({ data, id }) => {
        <div key={id} className="body-container">
          <div className="box">
            <li>{data.name}</li>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Body;
