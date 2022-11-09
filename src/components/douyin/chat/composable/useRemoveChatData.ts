import { useChatStore } from "../store/Chat"

export default () => {
    const maxSize = 20;
    const chatStore = useChatStore();
    setInterval(() => {
        if (chatStore.filterChatItems.length > maxSize) {
            chatStore.filterChatItems.splice(0, maxSize);
        }
    }, 1000 * 30);
    return;
}