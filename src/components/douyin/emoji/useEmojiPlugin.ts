import { setElemStyle } from "../../../content-scripts/useStyle";

export default (): HTMLElement => {
    let style = {
        position: "absolute",
        right: "0",
        bottom: "2px"
    }
    let Elem = document.querySelector(".webcast-chatroom___items");

    let div = document.createElement("div");
    setElemStyle(div, style);
    Elem?.append(div);
    return div;
}

function getElem() {
    return document.getElementsByClassName(
        "webcast-chatroom___textarea"
    )[0] as HTMLTextAreaElement;
}

let textAreaElem = getElem();

export function insertEmojiToTextAreaElem(
    emojiText: string,
    focus: boolean = false
) {
    textAreaElem = textAreaElem || getElem();

    if (emojiText && textAreaElem) {
        textAreaElem.value += emojiText;
        if (focus) {
            setTimeout(() => {
                textAreaElem.focus();
            }, 200);
        }
    }
}