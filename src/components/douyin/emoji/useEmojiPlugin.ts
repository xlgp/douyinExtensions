import { setElemStyle } from "../../../content-scripts/useStyle";

export default (): HTMLElement => {
  let style = {
    position: "absolute",
    right: "16px",
    bottom: "68px",
  };
  let Elem = document.querySelector(".webcast-chatroom");

  let div = document.createElement("div");
  setElemStyle(div, style);
  Elem?.append(div);
  return div;
};
