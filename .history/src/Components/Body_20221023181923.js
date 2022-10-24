import { useState } from "react";
import "./body.css";
import { data } from "../dummy";
const Body = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      {data.map({data,ind}=>{
        <div className="body-container">
        <div className="box">
            <li>{}</li>
        </div>
      </div>
      })}
    </div>
  );
};

export default Body;
