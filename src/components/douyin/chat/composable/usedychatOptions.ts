export default () => {
    const chatElem = document.getElementsByClassName("webcast-chatroom___list")[0] as HTMLElement;
    const chatOptions = reactive({
        title: "@用户的列表",
        modal: false,
        "close-on-click-modal": false,
        width: (chatElem && chatElem.clientWidth || 300) + "px",
      });
    return {
        chatOptions
    }
}