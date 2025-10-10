import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/game";
import ChooseLevel from "./components/choose-level";
import { Analytics } from '@vercel/analytics/react';

function App() {
  let [data, setData] = useState({});
  const [allData, setAllData] = useState(0);
  const [mode, setMode] = useState("Level");
  useEffect(() => {
      asyncFunc();
    async function asyncFunc() {
      const resultOfFetch = await fetch("https://unpkg.com/kpopnet.json", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return res;
        });

      setAllData(resultOfFetch);
    }
  }, []);
  function handleSelectLevel(input) {
    if (allData) {
      const copyOfIdols = [...allData.idols].map((el) => el.id);
      const newArrayOfRandomIdol = [];
      for (let i = 0; i < +input; i++) {
        const randomIndex = Math.floor(Math.random() * copyOfIdols.length);
        newArrayOfRandomIdol.push(...copyOfIdols.splice(randomIndex, 1));
      }
      setData(newArrayOfRandomIdol);
      setMode("Game");
    }
  }
  function handleSelectGroup(input) {
    setData(
      allData.groups
        .filter((el) => el.name === input)
        .map((el) => el.members)
        .flat()
        .map((el) => el.idol_id)
    );
    setMode("Game");
  }

  function handleChangeModeInGame() {
    setMode("Level");
  }

  return (
    <>
      {mode === "Level" ? (
        <ChooseLevel
          handleSelectLevel={handleSelectLevel}
          handleSelectGroup={handleSelectGroup}
        />
      ) : (
        <Game
          data={data}
          allData={allData}
          handleChangeModeInGame={handleChangeModeInGame}
        />
      )}
      <Analytics />
    </>
  );
}

export default App;
