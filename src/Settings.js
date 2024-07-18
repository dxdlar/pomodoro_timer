import BackButton from "./BackButton";
import SettingsContext from "./SettingsContext";
import { useContext, useState } from "react";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [workInput, setWorkInput] = useState(settingsInfo.workMinutes);
  const [breakInput, setBreakInput] = useState(settingsInfo.breakMinutes);

  return (
    <div>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <input
        type="number"
        value={workInput}
        onChange={(e) => setWorkInput(e.target.value)}
      ></input>
      <button onClick={() => settingsInfo.setWorkMinutes(workInput)}>
        확인
      </button>
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <input
        type="number"
        value={breakInput}
        onChange={(e) => setBreakInput(e.target.value)}
      ></input>
      <button onClick={() => settingsInfo.setBreakMinutes(breakInput)}>
        확인
      </button>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;

// work :
// 슬라이더 (work) => inputbox로 대체
// break :
// 슬라이더 (break) => inputbox로 대체
