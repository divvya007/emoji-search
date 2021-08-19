import "./styles.css";
import ActionButton from "../ActionButton";
import InputSearchBox from "../InputSearchBox";

function HeaderSearch() {
  return (
    <div className="header-search">
      <InputSearchBox />
      <ActionButton emoji="hello" />
      <ActionButton />
      <ActionButton />
      <ActionButton />
      <ActionButton />
      <ActionButton />
    </div>
  );
}

export default HeaderSearch;
