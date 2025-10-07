import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/game";
import ChooseLevel from "./components/choose-level";

function App() {
  let [data, setData] = useState({});
  const [allData, setAllData] = useState(0);
  const [mode, setMode] = useState("Level");
  useEffect(() => {
    // fetch("https://unpkg.com/kpopnet.json", { method: "GET" })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setAllData(res);
    //   setData(
    //     res.groups
    //       .filter((el) => el.members.length <= 6)
    //       .map((el) => el.members)
    //       .flat()
    //       .map((el) => el.idol_id)
    //   );
    //   });
    asyncFunc();
    async function asyncFunc() {
      const resultOfFetch = await fetch("https://unpkg.com/kpopnet.json", {
        method: "GET",
      })
        .then((res) => {
          //console.log(res.json())
          return res.json();
        })
        .then((res) => {
          return res;
        });
      console.log(
        resultOfFetch.idols.filter((el) => +el.birth_date.slice(0, 4) === 1995)
      );
      console.log("wwwewew");

      setAllData(resultOfFetch);
      console.log(
        resultOfFetch.groups
          .filter((el) =>
            el.debut_date === null ? false : +el.debut_date.slice(0, 4) === 2020
          )
          .map((el1) => el1.name)
      );
      console.log(
        resultOfFetch.groups
          .filter((el) => +el.members.length === 4)
          .map((el) => el.name)
      );
      console.log(resultOfFetch.groups.filter((el) => el.agency_name === "SM"));
      console.log(resultOfFetch.idols.filter((el) => el.groups.length === 0));
    }
  }, []);
  function handleSelectLevel(input) {
    const copyOfIdols = [...allData.idols].map((el) => el.id);
    const newArrayOfRandomIdol = [];
    for (let i = 0; i < +input; i++) {
      const randomIndex = Math.floor(Math.random() * copyOfIdols.length);
      newArrayOfRandomIdol.push(...copyOfIdols.splice(randomIndex, 1));
    }
    setData(newArrayOfRandomIdol);
    setMode("Game");
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
    setMode("Level")
  }

  return (
    <>

    { mode === "Level" 
    ?
      <ChooseLevel
        handleSelectLevel={handleSelectLevel}
        handleSelectGroup={handleSelectGroup}
      />
      :
      <Game data={data} allData={allData} handleChangeModeInGame={handleChangeModeInGame} />
    }
       
    </>
  );
}

export default App;
