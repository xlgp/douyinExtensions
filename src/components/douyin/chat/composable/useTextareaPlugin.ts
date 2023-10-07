import useAutoInput, { AutoInputType } from "../../composable/useAutoInput";

export default (focusCallback: ((e: FocusEvent, focus: boolean) => void) | undefined = undefined) => {

  function getTextAreaElem() {
    let dom = document.getElementsByClassName(
      "webcast-chatroom___textarea"
    )[0] as HTMLTextAreaElement;

    if (dom) {
      if (focusCallback) {
        dom.addEventListener("focus", e => focusCallback(e, true));
        dom.addEventListener("blur", e => focusCallback(e, false));
      }
    }

    return dom;
  }

  function getBtnElem() {
    return document.getElementsByClassName(
      "webcast-chatroom___send-btn"
    )[0] as HTMLButtonElement;
  }

  let textAreaElem: HTMLTextAreaElement = getTextAreaElem();
  let btnElem: HTMLButtonElement;
  let autoInput: AutoInputType = useAutoInput(textAreaElem);

  function fireInput(text: string) {
    if (!text) {
      return;
    }
    if (!textAreaElem) {
      textAreaElem = getTextAreaElem();
      autoInput = useAutoInput(textAreaElem);
    }

    if (textAreaElem) {
      autoInput.fireInput(text);
      return true;
    }
    return false;
  }

  function insertToTextAreaElem(text: string, focus: boolean = false) {
    if (fireInput(text)) {
      if (focus) {
        setTimeout(() => {
          textAreaElem.focus();
        }, 200);
      }
    }
  }

  function sendReply(text: string) {
    if (!fireInput(text)) {
      return;
    }
    if (!btnElem) {
      btnElem = getBtnElem();
    }
    btnElem.click();
    console.log(textAreaElem.value);
    textAreaElem.value = "";
  }

  return {
    sendReply,
    insertToTextAreaElem
  }

}