import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";

function HeaderSearch() {
  return (
    <div className="header-search">
      <InputSearchBox value="" />
      <ActionButton
        emoji="❌"
        onClick={() => {
          alert("click working");
        }}
      />
      <ActionButton emoji="😻" />
      <ActionButton emoji="🚖" />
      <ActionButton emoji="🍔" />
      <ActionButton emoji="🍎" />
      <ActionButton emoji="💖" />
    </div>
  );
}

export default HeaderSearch;
