export default () => {

    /**
     * 重新设置输入框样式
     */
    function renderChatroomInputContainer() {
        let containerElem = document.getElementsByClassName(
            "webcast-chatroom___input-container"
        )[0] as HTMLElement;
        if (!containerElem) {
            return;
        }
        containerElem.style.height = "46px";
        renderSendBtn(containerElem);
        renderLimit(containerElem);
    }

    function renderSendBtn(parentElement: HTMLElement) {
        let btnElem = parentElement.getElementsByClassName(
            "webcast-chatroom___send-btn"
        )[0] as HTMLButtonElement;
        if (!btnElem) {
            return;
        }
        let btnTop = (parentElement.clientHeight - btnElem.clientHeight) / 2;
        btnElem.style.top = btnTop + "px";
        btnElem.style.borderRadius = "6px";
    }

    function renderLimit(parentElement: HTMLElement) {
        let limitElem = parentElement.getElementsByClassName(
            "webcast-chatroom___limit"
        )[0] as HTMLElement;
        if (!limitElem) {
            return;
        }
        limitElem.style.position = "absolute";
        limitElem.style.color = "#ffd5dd";
        limitElem.style.bottom = "6px";
        limitElem.style.right = "-22px";
        limitElem.style.zIndex = "1";
    }

    setTimeout(() => {
        renderChatroomInputContainer();
    }, 1000);

}