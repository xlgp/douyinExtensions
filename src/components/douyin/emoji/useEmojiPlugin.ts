import { setElemStyle } from "../../../content-scripts/useStyle";
import useAutoInput, { AutoInputType } from "../composable/useAutoInput";

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

let textAreaElem: HTMLTextAreaElement;
let autoInput: AutoInputType;

export function insertEmojiToTextAreaElem(
    emojiText: string,
    focus: boolean = false
) {
    if (!textAreaElem) {
        textAreaElem = getElem();
        autoInput = useAutoInput(textAreaElem);
    }

    if (emojiText && textAreaElem) {
        autoInput.fireInput(emojiText);
        if (focus) {
            setTimeout(() => {
                textAreaElem.focus();
            }, 200);
        }
    }
}