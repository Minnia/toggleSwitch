import React, { useState } from "react";
import "./toggle.css";
const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    console.log("pressed");
    setIsToggled(!isToggled);
  };
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;
