import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
import PauseButton from "./PauseButton";
import { useState, useEffect, useContext, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, SetIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";

      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work" // work 모드면
      ? settingsInfo.workMinutes * 60 // work 시간에 * 60
      : settingsInfo.breakMinutes * 60; //  아니면 break 시간에 * 60
  // percentage로 변환 (남은시간 / 총 시간 * 100 계산값을 반올림)
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  // 남은 시간 분, 초 단위로 계산
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds; // 10초 이내일 경우

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? "#f54e4e" : "#4aec8c",
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ margintop: "20px" }}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              SetIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              SetIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
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
// settings 버튼 누름 -> settings 화면으로 이동 (useContext)
