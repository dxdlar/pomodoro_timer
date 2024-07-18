import "./slider.css";
import BackButton from "./BackButton";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <label>Break: {settingsInfo.breakMinutes}:00</label>
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
