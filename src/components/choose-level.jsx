import { useState } from "react";
import '../choose-level.css'

export default function ChooseLevel({ handleSelectLevel, handleSelectGroup }) {
  const [selectedValue, setSelectedValue] = useState(9);
  const [selectedGroup, setSelectedGroup] = useState("Rockit Girl");
  const [mode, setMode] = useState("range")
  function handleMode(e) {
    setMode(e.target.value)
  }

  return (
    <div className="menu-section">
      <h1>Memory Game</h1>
      <div className="select-type-of-level">
        <label htmlFor="range"><input onChange={handleMode} checked={mode === "range"} id="range" value="range" name="selection" type="radio" />Select card randomly</label>
        <label htmlFor="groups"><input onChange={handleMode} checked={mode === "groups"} id="groups" type="radio" value='groups' name="selection" />Select card by groups</label>
      </div>
      {
        mode === "range" 
        ? 
        <div className="level-section">
          <label className="label" htmlFor="level">
            Select your cards randomly:
          <input
            onChange={(e) => setSelectedValue(e.target.value)}
            min={4}
            max={33}
            id="level"
            type="range"
            step="1"
            value={selectedValue}
          />
          </label>
          <output style={{color: `rgb(${8.8 * (selectedValue - 4)}, ${255 - 8.8 * (selectedValue - 4)}, 0)`, fontSize: '32px'}}>{selectedValue}</output>
          <button onClick={() => handleSelectLevel(selectedValue)} type="submit">Submit</button>
        </div>
        :
        <>
        <div className="groups-section">
        Select your level by group:
        <select onChange={(e) => { e.preventDefault(); setSelectedGroup(e.target.value)}} name="select-group" id="groups">
          <option value="Rockit Girl" className="choice">Rockit Girl</option>
          <option value="VIVIZ" className="choice">VIVIZ</option>
          <option value="IVE" className="choice">IVE</option>
          <option value="aespa" className="choice">aespa</option>
          <option value="Blackpink" className="choice">Blackpink</option>
          <option value="Red Velvet" className="choice">Red Velvet</option>
          <option value="Kiss of Life" className="choice">Kiss of Life</option>
          <option value="Mamamoo" className="choice">Mamamoo</option>
          <option value="Sistar" className="choice">Sistar</option>
          <option value="Fifty Fifty" className="choice">Fifty Fifty</option>
          <option value="Young Posse" className="choice">Young Posse</option>
          <option value="ITZY" className="choice">ITZY</option>
          <option value="Loossemble" className="choice">Loossemble</option>
          <option value="ARTMS" className="choice">ARTMS</option>
          <option value="STAYC" className="choice">STAYC</option>
          <option value="Weeekly" className="choice">Weeekly</option>
          <option value="woo!ah!" className="choice">woo!ah!</option>
          <option value="cignature" className="choice">cignature</option>
          <option value="XG" className="choice">XG</option>
          <option value="NMIXX" className="choice">NMIXX</option>
          <option value="GOT the beat" className="choice">GOT the beat</option>
          <option value="Billlie" className="choice">Billlie</option>
          <option value="Purple Kiss" className="choice">Purple Kiss</option>
          <option value="TRI.BE" className="choice">TRI.BE</option>
          <option value="Dreamcatcher" className="choice">Dreamcatcher</option>
          <option value="Lightsum" className="choice">Lightsum</option>
          <option value="Oh My Girl" className="choice">Oh My Girl</option>
          <option value="T-ara" className="choice">T-ara</option>
          <option value="ICHILLIN" className="choice">ICHILLIN</option>
          <option value="Kep1er" className="choice">Kep1er</option>
          <option value="fromis_9" className="choice">fromis_9</option>
          <option value="Momoland" className="choice">Momoland</option>
          <option value="TWICE" className="choice">TWICE</option>
          <option value="After School" className="choice">After School</option>
          <option value="Girls' Generation" className="choice">Girls' Generation</option>
          <option value="IZ*ONE" className="choice">IZ*ONE</option>
          <option value="I.O.I" className="choice">I.O.I</option>
          <option value="LOONA" className="choice">LOONA</option>
          <option value="WJSN" className="choice">WJSN</option>
          <option value="tripleS" className="choice">tripleS</option>
          <option value="Le Sserafim" className="choice">Le Sserafim</option>
          <option value="EVERGLOW" className="choice">EVERGLOW</option>
          <option value="(G)I-DLE" className="choice">(G)I-DLE</option>
          <option value="GFRIEND" className="choice">GFRIEND</option>
          <option value="Wonder Girls" className="choice">Wonder Girls</option>
          <option value="I'll-it" className="choice">I'll-it</option>
          <option value="NewJeans">NewJeans</option>
          <option value="f(x)" className="choice">f(x)</option>
        </select>
        <button onClick={(e) => {e.preventDefault(); handleSelectGroup(selectedGroup)}} type="button">Submit</button>
      </div>
        </>
      }
    </div>
  );
}
