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
        <button
          className="body-container"
          onClick={() => {
            window.location.href = link;
          }}
        >
          <a href={link} key={id} className="box">
            {title}
          </a>
        </button>
      ))}
      <div className="icons">
        <a>
          <img src={slack} />
        </a>
        <a href="https://github.com/uh-sman">
          <img src={github} />
        </a>
      </div>
    </div>
  );
};

export default Body;
