import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";
import React, { useState } from "react";
import EmojiGrid from "../EmojiGrid/index";

function HeaderSearch() {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="header-search">
        <InputSearchBox
          value={text}
          onChange={(e) => {
            setText(e.target.value);
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
      <div>
        <EmojiGrid searchText={text} />
      </div>
    </div>
  );
}

export default HeaderSearch;
