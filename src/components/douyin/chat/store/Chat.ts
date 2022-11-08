import { defineStore } from 'pinia'
import { ChatRoomItem } from '../constant';


export const useChatStore = defineStore('dyChatStore', () => {
    const filterNickname = ref("僻");
    const filterChatItems = ref<ChatRoomItem[]>([]);
    function setFilterChatItems(item: ChatRoomItem) {
        filterChatItems.value.push(item);
    }
    return { filterNickname, filterChatItems, setFilterChatItems }
})