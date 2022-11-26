import useAutoInput, { AutoInputType } from "../../composable/useAutoInput";

function getElem() {
  return document.getElementsByClassName(
    "webcast-chatroom___textarea"
  )[0] as HTMLTextAreaElement;
}

function getBtnElem() {
  return document.getElementsByClassName(
    "webcast-chatroom___send-btn"
  )[0] as HTMLButtonElement;
}

let textAreaElem: HTMLTextAreaElement;
let btnElem: HTMLButtonElement;
let autoInput: AutoInputType;

export default {};

export function insertToTextAreaElem(text: string, focus: boolean = false) {
  if (!textAreaElem) {
    textAreaElem = getElem();
    autoInput = useAutoInput(textAreaElem);
  }

  if (text && textAreaElem) {
    autoInput.fireInput(text);
    if (focus) {
      setTimeout(() => {
        textAreaElem.focus();
      }, 200);
    }
  }
}

export function sendReply(text: string) {
  if (!textAreaElem) {
    textAreaElem = getElem();
    autoInput = useAutoInput(textAreaElem);
  }
  if (text && textAreaElem) {
    autoInput.fireInput(text);
  }
  if (!btnElem) {
    btnElem = getBtnElem();
  }
  btnElem.click();
}
