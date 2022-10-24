import { useState } from "react";
import "./body.css";
import github from "./assets/Icon.png";
import slack from "./assets/slack.png";
import { data } from "../dummy";
const Body = () => {
  //   const [data, setData] = useState([]);

  return (
    <div>
      {data.map(({ id, title, description, link }) => (
        <div key={id} className="body-container">
          <div className="box">
            <a>{title}</a>
          </div>
        </div>
      ))}
      <div className="icons">
        <img src={slack} />
        <img src={github} />
      </div>
    </div>
  );
};

export default Body;
