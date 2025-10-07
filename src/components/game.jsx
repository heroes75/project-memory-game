import { useRef, useState } from "react";
import Card from "./card";

export default function Game({ data, allData, handleChangeModeInGame }) {
  const [newData, setNewData] = useState(data);
  const [selectedId, setSelectedId] = useState(new Set());
  const [showName, setShowName] = useState(false) ;
  const dialog = useRef(null);
  const buttonRestart = useRef(null);
  const buttonReplay = useRef(null);
  const numbersOfCard = data.length
  let score = selectedId.size;
  let bestScore = +localStorage.getItem("best-score") || 0;
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
      dialog.current.showModal()
      console.log("loose")
      increaseScore(score)
    }
    nextSelectedId.add(id);
    
    if (nextSelectedId.size === data.length) {
      dialog.current.showModal()
      increaseScore(numbersOfCard)
      console.log("win")
    }
    randomizeCard();
    setSelectedId(nextSelectedId);
  }
  console.log(newData.length);
  function replayFunction() {
    setNewData(data)
    setSelectedId(new Set())
    dialog.current.close()
  }
  function increaseScore(score) {
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem("best-score", score)
    }
  }

  const displayIdol = newData.map(el => allData.idols.filter(el1 => el1.id === el)).flat()
  return (
    <>
    <dialog ref={dialog} className="dialog">
      <button ref={buttonRestart} onClick={() => handleChangeModeInGame()} className="restart-button">restart</button>
      <button onClick={() => replayFunction()} ref={buttonReplay} type="reset" className="replay-button">replay</button>
    </dialog>
      <nav>
        <ol>
          <li>
            <h2>
              <a href="">Memory Game</a>
            </h2>
          </li>
          <li>
            <p className="score">{score}/{numbersOfCard}</p>
            <span className="best-score">{bestScore}</span>
            <label htmlFor="show-name">Show Name<input type="checkbox" name="show-name" id="show-name" checked={showName} onChange={() => setShowName(!showName)} /></label>
          </li>
        </ol>
      </nav>
      <div className="cardsContainer">
        {displayIdol
          .map((el) => (
            <Card
              key={el.id}
              handleClick={() => handleClick(el.id)}
              name={el.name}
              image={el.thumb_url}
              showName={showName}
            />
          ))}
      </div>
    </>
  );
}
