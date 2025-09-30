import { useState } from "react";
import Card from "./card";

export default function Game({ data, score, allData }) {
  const [newData, setNewData] = useState(data);
  const [selectedId, setSelectedId] = useState(new Set());

  function randomizeCard() {
    const newArray = [];
    let set = new Set();
    let index = Math.floor(Math.random() * newData.length);
    while (newArray.length < newData.length) {
      if (!set.has(index)) {
        newArray.push(newData[index]);
      }
    }
    setNewData(newArray);
  }
  function handleClick(id) {
    const nextSelectedId = new Set(selectedId);
    if (nextSelectedId.has(id)) {
      return; //loose function
    }
    nextSelectedId.add(id);
    if (nextSelectedId.size === data.length) {
      return; //success function
    }
    randomizeCard();
    setSelectedId(nextSelectedId);
  }
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
        {allData.idols
          .filter((el) => data.includes(el.id))
          .map((el) => (
            <Card
              key={el.id}
              onclick={() => handleClick(el.id)}
              name={el.name}
              image={el.thumb_url}
            />
          ))}
      </div>
    </>
  );
}
