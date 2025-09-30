import { useEffect, useRef, useState } from "react";
import "./App.css";
import Game from "./components/game";

function App() {
  const [count, setCount] = useState(0);
  let [data, setData] = useRef();
    //console.log(allData.current);
  useEffect(() => {
    // async function name() {
    //   await fetch("https://dattebayo-api.onrender.com/characters")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // }
    //name()

    fetch("https://unpkg.com/kpopnet.json", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const [allData, setAllData] = useState(res)
        allData.current.res = {...res}
        setAllData(res)
        const Idols = res.groups
          .filter((el) => el.members.length <= 2)
          .map((el) => el.members)
          .flat().map(el => el.idol_id);

        console.log(allData.current);
        console.log(res);
        data.current = res.idols.filter((el) => Idols.includes(el.id));
        console.log(res.idols.filter((el) => +el.birth_date.slice(5, 7) === 12));
        console.log(res.groups.filter((el) => el.agency_name === "SM Entertainment"));
      });
  }, []);

        console.log(allData.current.res);
  return (
    <>
      <Game data={data.current} score={0} allData={allData.current}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
