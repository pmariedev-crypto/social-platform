import { useState } from "react";

function SearchBar() {
  const [programType, setProgramType] = useState("");
  const [supportNeed, setSupportNeed] = useState("");

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      padding: "20px",
      justifyContent: "center"
    }}>
      <input placeholder="Location" />

      <select value={programType} onChange={(e) => setProgramType(e.target.value)}>
        <option value="">Program type</option>
        <option>Behavioral</option>
        <option>Youth Support</option>
        <option>Family Services</option>
      </select>

      <select value={supportNeed} onChange={(e) => setSupportNeed(e.target.value)}>
        <option value="">Support needed</option>
        <option>Housing</option>
        <option>Therapy</option>
        <option>Placement</option>
      </select>

      <button>Find Help</button>
    </div>
  );
}

export default SearchBar;