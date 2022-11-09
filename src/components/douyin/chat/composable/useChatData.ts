import { useChatStore } from "../store/Chat"

export default () => {

    let chatStore = useChatStore();
    let id = setInterval(() => {
        let len = chatStore.filterChatItems.length
        if (len > 20) {
            clearInterval(id);
            return;
        }
        chatStore.filterChatItems.push({
            content: "内容......." + len,
            nickname: "昵称" + len,
            itemId: (new Date).getTime() + "",
            createdAt: new Date
        });
    }, 2000);


}