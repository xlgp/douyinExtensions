export default () => {
    const chatElem = document.getElementsByClassName("webcast-chatroom___list")[0] as HTMLElement;
    const chatOptions = reactive({
        title: "Chat组件",
        modal: false,
        "close-on-click-modal": false,
        width: (chatElem && chatElem.offsetWidth || 300) + "px",
      });
    return {
        chatOptions
    }
}