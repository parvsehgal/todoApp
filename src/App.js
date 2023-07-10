import InputFeild from "./components/input";
import "./App.css";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [dataToMap, setDataToMap] = useState([]);
  let compToRender = dataToMap.map((data) => {
    return <Card content={data} removeCard={removeCard}></Card>;
  });

  function makeCard(someData) {
    let newData = [...dataToMap, someData];
    setDataToMap(newData);
    console.log(dataToMap);
  }

  function removeCard(valueOfCard) {
    let filtered = dataToMap.filter((val) => {
      return val != valueOfCard;
    });
    setDataToMap(filtered);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setDataToMap([])}>DEL ALL</button>
      <div className="todoBox">
        <InputFeild makeCard={makeCard}></InputFeild>
        {compToRender}
      </div>
    </div>
  );
}

export default App;
