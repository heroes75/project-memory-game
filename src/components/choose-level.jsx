import { useState } from "react";

export default function ChooseLevel({ data }) {
  const [selectedValue, setSelectedValue] = useState("10");
  return (
    <div>
      <label className="label" htmlFor="level">
        <input
          onChange={(e) => setSelectedValue(e.target.value)}
          min={4}
          max={16}
          id="level"
          type="range"
          step="1"
          list="level"
        />
        <datalist id="level">
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
          <option value="11"></option>
          <option value="12"></option>
          <option value="13"></option>
          <option value="14"></option>
          <option value="15"></option>
          <option value="16"></option>
        </datalist>
      </label>
      <output>{selectedValue}</output>
      <button type="submit">Submit</button>
    </div>
  );
}
