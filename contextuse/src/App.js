// App.js
import React, { useState } from "react";
import MyContext from "./MyContext";
import Dashboard from "./Dashboard";

function App() {
  const [message,setMessage] = useState("Hello");

  return (
    <MyContext.Provider value={[message, setMessage]}>
      <Dashboard />
    </MyContext.Provider>
  );
}

export default App;
