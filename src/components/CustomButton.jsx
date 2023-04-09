import state from "../store";

import { useSnapshot } from "valtio";

function CustomButton({ title, type, customStyle, handleClick }) {
  const snap = useSnapshot(state);

  const generateStyles = (type) => {
    if (type === "filled") {
      return { backgroundColor: snap.color, color: "#fff" };
    }
  };

  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyle}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
