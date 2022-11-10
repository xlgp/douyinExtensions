import { defineStore } from "pinia";
import { getLocalFilterField } from "../../composable/useStorage";
import { parseLocalFilterField } from "../composable/useChatUtil";
import {
  ChatRoomItem,
  filterFieldKey,
} from "../constant";

export const useChatStore = defineStore("dyChatStore", () => {
  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  /**
   * 最新一次查看面板的时间
   */
  const lastVisitDyChatTime = ref<number>((new Date).getTime());

  const filterChatItems = ref<ChatRoomItem[]>([]);
  const filterChatItemIds = computed(() =>
    filterChatItems.value.map((item) => item.itemId)
  );

  function setFilterChatItems(item: ChatRoomItem) {
    filterChatItems.value.push(item);
  }

  function clearFilterChatItems() {
    filterChatItems.value.length = 0;
  }

  function saveFilterFieldList() {
    localStorage.setItem(filterFieldKey, filterFieldList.value.join(","));
  }

  function setLastVisitDyChatTime() {
    lastVisitDyChatTime.value = new Date().getTime();
  }

  const unreadChatItemCount = computed(() => {
    let items = filterChatItems.value;
    let count = 0;
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      if (item.createdAt.getTime() > lastVisitDyChatTime.value) {
        count++;
        continue;
      }
      break;
    }
    return count;
  });

  return {
    filterFieldList,
    filterChatItemIds,
    filterChatItems,
    lastVisitDyChatTime,
    unreadChatItemCount,
    setLastVisitDyChatTime,
    setFilterChatItems,
    clearFilterChatItems,
    saveFilterFieldList,
  };
});
