import { useState } from "react";
import Card from "./card";

export default function Game({ data, allData }) {
  const [newData, setNewData] = useState(allData.idols.filter((el) => data.includes(el.id)));
  const [selectedId, setSelectedId] = useState(new Set());
  let score = selectedId.size;
  function randomizeCard() {
    const newArray = [];
    const copyOfNewData = [...newData]
    let index = Math.floor(Math.random() * newData.length);
    while (copyOfNewData.length !== 0) {
      newArray.push(...copyOfNewData.splice(index, 1));
      index = Math.floor(Math.random() * copyOfNewData.length);
    }
    setNewData(newArray);
  }
  function handleClick(id) {
    const nextSelectedId = new Set(selectedId);
    if (nextSelectedId.has(id)) {
      console.log("loose")
      return; //loose function
    }
    nextSelectedId.add(id);
    if (nextSelectedId.size === data.length) {
      console.log("win")
      return; //success function
    }
    console.log('count: %d')
    randomizeCard();
    console.log('count: %d2')
    setSelectedId(nextSelectedId);
  }
  console.log(newData.length);
  
  return (
    <>
      <nav>
        <ol>
          <li>
            <h2>
              <a href="">Memory Game</a>
            </h2>
          </li>
          <li>
            <p className="score">{score}</p>
          </li>
        </ol>
      </nav>
      <div className="cardsContainer">
        {newData
          .filter((el) => data.includes(el.id))
          .map((el) => (
            <Card
              key={el.id}
              handleClick={() => handleClick(el.id)}
              name={el.name}
              image={el.thumb_url}
            />
          ))}
      </div>
    </>
  );
}
