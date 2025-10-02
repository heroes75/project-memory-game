import { useEffect, useRef, useState } from "react";
import "./App.css";
import Game from "./components/game";

function App() {
  const [count, setCount] = useState(0);
  let [data, setData] = useState({});
  const [allData, setAllData] = useState(0);
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
      setAllData(resultOfFetch);
      setData(
        resultOfFetch.groups
          .filter((el) => el.name === "(G)I-DLE")
          .map((el) => el.members)
          .flat()
          .map((el) => el.idol_id)
      );
    }
  }, []);

  console.log(allData);
  return (
    <>
      {allData && <Game data={data} allData={allData} />}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
