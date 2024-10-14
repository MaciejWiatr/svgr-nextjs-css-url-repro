import "flag-icons/css/flag-icons.min.css";
import Icon from "../assets/icon.svg";

export default function Home() {
  return (
    <>
      <Icon width="32" />
      {/* Flag icons are missing here, inspect css in browser! */}
      <span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span>
    </>
  );
}
