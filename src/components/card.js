import { useEffect, useState } from "react";
import "./card.css";
function Card({ removeCard, content }) {
  const [active, setActive] = useState(null);
  function delHandler() {
    removeCard(content);
  }
  function compHandler() {
    setActive(content);
  }
  return (
    <div className="cardDiv">
      <button className="delBtn" onClick={delHandler}>
        DEL
      </button>
      <button onClick={compHandler}>COMP</button>
      <div className="textDiv">
        <div className={`list-item ${active == content && "active"}`}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Card;
