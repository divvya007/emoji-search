import "./styles.css";

function ActionButton(props) {
  return (
    <button className="action-button" onClick={props.onClick}>
      {props.emoji}
    </button>
  );
}

export default ActionButton;
