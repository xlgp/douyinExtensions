export default () => {
    const chatElem = document.getElementsByClassName("webcast-chatroom___list")[0] as HTMLElement;

    return {
        chatWidth: chatElem && chatElem.offsetWidth || 300
    }
}