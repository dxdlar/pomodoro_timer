import "./App.css";
import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [isPaused] = useState();

  return (
    <main>
      <Timer isPaused={isPaused} />
    </main>
  );
}

export default App;
