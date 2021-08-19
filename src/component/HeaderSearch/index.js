import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";

function HeaderSearch() {
  return (
    <div className="header-search">
      <InputSearchBox />
      <ActionButton emoji="❌" />
      <ActionButton emoji="😻" />
      <ActionButton emoji="🚖" />
      <ActionButton emoji="🍔" />
      <ActionButton emoji="🍎" />
      <ActionButton emoji="💖" />
    </div>
  );
}

export default HeaderSearch;
