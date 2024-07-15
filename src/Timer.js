import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";

const value = 60;
const minutes = 2;

function Timer() {
  return (
    <div style={{ width: 350, height: 350 }}>
      <CircularProgressbar
        value={value}
        maxValue={60}
        minValue={0}
        text={`${minutes}:${value}`}
      />
      <div>
        <PlayButton />
      </div>
    </div>
  );
}

export default Timer;
