import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";
import React, { useState } from "react";

function HeaderSearch() {
  const [text, setText] = useState("");

  return (
    <div className="header-search">
      <InputSearchBox
        value={text}
        onChange={(e) => {
          console.log(e);
          setText(e.target.text);
        }}
      />
      <ActionButton
        emoji="❌"
        onClick={() => {
          setText("");
        }}
      />
      <ActionButton
        emoji="😻"
        onClick={() => {
          setText("cat");
        }}
      />
      <ActionButton
        emoji="🚖"
        onClick={() => {
          setText("transport");
        }}
      />
      <ActionButton
        emoji="🍔"
        onClick={() => {
          setText("food");
        }}
      />
      <ActionButton
        emoji="🍎"
        onClick={() => {
          setText("fruit");
        }}
      />
      <ActionButton
        emoji="💖"
        onClick={() => {
          setText("heart");
        }}
      />
    </div>
  );
}

export default HeaderSearch;
