import "./styles.css";
import emojiList from "./../../Data/emojiList.json";
import EmojiItem from "./../GridItem/index";

function EmojiGrid(props) {
  return (
    <div className="emoji-grid">
      {emojiList
        .filter((emoji) => emoji.keywords.includes(props.searchText))
        .map((emoji) => {
          return <EmojiItem emoji={emoji} key={emoji.title} />;
        })}
    </div>
  );
}

export default EmojiGrid;
