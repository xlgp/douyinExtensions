import { defineStore } from 'pinia'
import { ChatRoomItem, filterNicknameDefaultValue, filterNicknameKey } from '../constant';

export const useChatStore = defineStore('dyChatStore', () => {

    let localName = localStorage.getItem(filterNicknameKey);
    if (!localName) {
        localStorage.setItem(filterNicknameKey, filterNicknameDefaultValue);
        localName = filterNicknameDefaultValue;
    }
    const filterNickname = ref(localName);

    const filterChatItems = ref<ChatRoomItem[]>([]);
    function setFilterChatItems(item: ChatRoomItem) {
        filterChatItems.value.push(item);
    }

    function saveFilterNickname() {
        localStorage.setItem(filterNicknameKey, filterNickname.value);
    }
    return { filterNickname, filterChatItems, setFilterChatItems, saveFilterNickname }
})