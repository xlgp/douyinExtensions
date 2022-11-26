import { setElemStyle } from "../../../content-scripts/useStyle";

export default (): HTMLElement => {
  let style = {
    position: "absolute",
    right: "0",
    bottom: "2px",
  };
  let Elem = document.querySelector(".webcast-chatroom___items");

  let div = document.createElement("div");
  setElemStyle(div, style);
  Elem?.append(div);
  return div;
};
