import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";

function HeaderSearch() {
  return (
    <div className="header-search">
      <InputSearchBox value="" />
      <ActionButton emoji="❌" onClick={() => {}} />
      <ActionButton emoji="😻" onClick={() => {}} />
      <ActionButton emoji="🚖" onClick={() => {}} />
      <ActionButton emoji="🍔" onClick={() => {}} />
      <ActionButton emoji="🍎" onClick={() => {}} />
      <ActionButton emoji="💖" onClick={() => {}} />
    </div>
  );
}

export default HeaderSearch;
