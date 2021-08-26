import React, { useState } from "react";
import "./styles.css";

function FancyButton() {
  const [color, setColor] = useState("purple");
  function handleOnBtnClick() {
    setColor(color === "purple" ? "orange" : "purple");
  }
  return (
    <>
      {color === "purple" ? (
        <div style={{ background: color }} onClick={handleOnBtnClick}>
          click me
        </div>
      ) : (
        <button
          style={{ backgroundColor: color }}
          onClick={handleOnBtnClick}
          className="fancy-btn"
        >
          Im a button now
        </button>
      )}
    </>
  );
}
export default FancyButton;
