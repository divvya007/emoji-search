import "./styles.css";

function GridItem(props) {
  return <div className="grid-item">{props.emoji.symbol}</div>;
}

export default GridItem;
