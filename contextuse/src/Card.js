// Card.js
import React, { useContext } from "react";
import MyContext from "./MyContext";

function Card() {
  const [value,setValue] = useContext(MyContext);

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Card Component</h3>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
      <p>Received from App: {value}</p>
    </div>
  );
}

export default Card;
