import { defineStore } from "pinia";
import { getFromStorage, getLocalFilterField } from "../../composable/useStorage";
import { getAtNickname, parseLocalFilterField } from "../composable/useChatUtil";
import { sendReply } from "../composable/useTextareaPlugin";
import { autoReplyContentList, ChatRoomItem, filterFieldKey, originalContentReplyValue, replyTagKey, storageSeparator } from "../constant";

export const useChatStore = defineStore("dyChatStore", () => {

  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  const isAutoReply = ref(true);

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

  const replyList = ref(getFromStorage() || []);

  function setFilterChatItems(item: ChatRoomItem) {
    filterChatItems.value.push(item);
    //自动回复
    autoReply(item);
  }

  function clearFilterChatItems() {
    filterChatItems.value.length = 0;
  }

  function saveFilterFieldList() {
    localStorage.setItem(filterFieldKey, filterFieldList.value.join(storageSeparator));
  }

  function setLastVisitDyChatTime() {
    lastVisitDyChatTime.value = new Date().getTime();
  }

  function isRead(item: ChatRoomItem) {
    return item.createdAt.getTime() <= lastVisitDyChatTime.value;
  }

  function autoReply(item: ChatRoomItem) {
    let replyContent = getAutoReplyContent(item.content);
    if (isAutoReply.value && replyContent) {
      sendReply(getAtNickname(item.nickname) + replyContent);
    }
  }

  function getAutoReplyContent(content: string): String {
    let result = "";
    for (let i = 0; i < autoReplyContentList.length; i++) {
      let item = autoReplyContentList[i];

      let m = content.match(new RegExp(item.key));
      if (m) {
        if (item.value === originalContentReplyValue) {
          result = m[0];
        } else {
          result = item.value;
        }
        break;
      }
    }

    return result;
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

  const saveToStorage = () => {
    window.localStorage.setItem(replyTagKey, replyList.value.join(storageSeparator));
  }

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
    isAutoReply,
    getAutoReplyContent,
    saveReplyList: saveToStorage
  };
});
