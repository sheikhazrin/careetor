import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>s</h2>
      <p>s</p>
      <br />
      <h2>The date according to Go is:</h2>
    </main>
  );
}

export default App;
