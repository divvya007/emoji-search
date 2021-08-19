import "./styles.css";

function InputSearchBox(props) {
  return (
    <input
      value={props.value}
      className="input-search-box"
      onChange={props.onChange}
    ></input>
  );
}

export default InputSearchBox;
