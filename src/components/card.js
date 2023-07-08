import "./card.css";

function Card({ removeCard, content }) {
  function delHandler() {
    removeCard(content);
  }
  return (
    <div className="cardDiv">
      <button className="delBtn" onClick={delHandler}>
        DEL
      </button>
      <div className="textDiv">
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Card;
