import "./App.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState, useEffect } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  const [isPaused] = useState();

  return (
    <main>{showSettings ? <Settings /> : <Timer isPaused={isPaused} />}</main>
  );
}

export default App;
