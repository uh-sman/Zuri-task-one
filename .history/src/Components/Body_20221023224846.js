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
            <a href={link}>{title}</a>
          </div>
        </div>
      ))}
      <div className="icons">
        <a href={link}>
          <img src={github} />
        </a>
      </div>
    </div>
  );
};

export default Body;

{
  /* <a>
  <img src={slack} />
</a>; */
}
