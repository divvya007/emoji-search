import "./styles.css";
import emojiList from "./../../Data/emojiList.json";
import EmojiItem from "./../GridItem/index";
import React, { useState } from "react";

function EmojiGrid() {
  const [emojiSymbol, setEmoji] = useState("");

  return (
    <div className="emoji-grid">
      {emojiList.map((emoji) => {
        return <EmojiItem emoji={emoji} key={emoji.title} />;
      })}
    </div>
  );
}

export default EmojiGrid;
