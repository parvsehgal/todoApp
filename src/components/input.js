import { useState } from "react";
import "./input.css";
function InputFeild({ makeCard }) {
  const [task, setTask] = useState("");
  function chnageHandler(event) {
    setTask(event.target.value);
  }

  function addHandler() {
    makeCard(task);
    setTask("");
  }
  return (
    <div className="inputDiv">
      <button className="addBtn" onClick={addHandler}>
        +
      </button>
      <input
        type="text"
        placeholder="Add a task"
        className="inpF"
        onChange={chnageHandler}
        value={task}
      ></input>
    </div>
  );
}
export default InputFeild;
