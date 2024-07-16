import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
import PauseButton from "./PauseButton";
import { useState } from "react";

function Timer() {
  const minutes = 20;
  const seconds = 20;
  const percentage = 100;

  const [isPaused, SetIsPaused] = useState(true);

  return (
    <div>
      <CircularProgressbar value={percentage} text={minutes + ":" + seconds} />
      <div style={{ margintop: "20px" }}>
        {isPaused ? (
          <PlayButton
            isPaused={isPaused}
            onClick={() => {
              SetIsPaused(false);
              console.log(isPaused);
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              SetIsPaused(true);
              console.log(isPaused);
            }}
          />
        )}
      </div>
      <div style={{ margintop: "20px" }}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;

// 화면을 div 3개로 나누어서 (각 마진 20px)
// 상단 : progressbar
// 중앙 : 재생, 일시정지 버튼
// 하단 : Settings 버튼

// 재생버튼 누름 -> 시간이 줄어듬 (tick) + 일시정지 버튼으로 변경 (정지 상태인지 재생 상태인지 구분 필요함 -> useState)
// settings 버튼 누름 -> settings 화면으로 이동
