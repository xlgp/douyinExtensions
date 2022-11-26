import { defineStore } from "pinia";
import { getLocalFilterField } from "../../composable/useStorage";
import { parseLocalFilterField } from "../composable/useChatUtil";
import { ChatRoomItem, filterFieldKey } from "../constant";

export const useChatStore = defineStore("dyChatStore", () => {
  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  /**
   * 最新一次查看面板的时间
   */
  const lastVisitDyChatTime = ref<number>(new Date().getTime());

  const filterChatItems = ref<ChatRoomItem[]>([]);

  /**
   * 未读信息第一个下标
   */
  const lastUnReadDyChatIndex = ref<number>(filterChatItems.value.length - 1);

  const filterChatItemIds = computed(() =>
    filterChatItems.value.map((item) => item.itemId)
  );

  const replyList = reactive(["晚上好", "兄台好", "早上好", "中午好"]);

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

  function isRead(item: ChatRoomItem) {
    return item.createdAt.getTime() <= lastVisitDyChatTime.value;
  }

  const unreadChatItemCount = computed(() => {
    let items = filterChatItems.value;
    let count = 0;
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      if (!isRead(item)) {
        count++;
        continue;
      }
      lastUnReadDyChatIndex.value = i + 1;
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
    lastUnReadDyChatIndex,
    setLastVisitDyChatTime,
    setFilterChatItems,
    clearFilterChatItems,
    saveFilterFieldList,
    replyList,
  };
});
