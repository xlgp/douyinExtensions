import { defineStore } from "pinia";
import { getFromStorage, getLocalFilterField } from "../../composable/useStorage";
import { getAtNickname, parseLocalFilterField } from "../composable/useChatUtil";
import { sendReply } from "../composable/useTextareaPlugin";
import { AutoReplyChatItem, autoReplyContentList, ChatRoomItem, filterFieldKey, originalContentReplyValue, replyTagKey, storageSeparator } from "../constant";

export const useChatStore = defineStore("dyChatStore", () => {

  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  const isAutoReply = ref(true);

  /**
   * 最新一次查看面板的时间
   */
  const lastVisitDyChatTime = ref<number>(new Date().getTime());

  const filterChatItems = ref<ChatRoomItem[]>([]);

  const autoReplyChatItems = ref<{
    [itemId: string]: AutoReplyChatItem[]
  }>({});

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

  function addAutoReplyChatItems(item: ChatRoomItem, replyContent: string) {

    autoReplyChatItems.value[item.itemId] = autoReplyChatItems.value[item.itemId] || [];
    autoReplyChatItems.value[item.itemId].push({
      chatItemId: item.itemId,
      content: replyContent,
      createdAt: new Date
    });
  }

  function autoReply(item: ChatRoomItem) {
    let replyContent = getAutoReplyContent(item.content);
    if (isAutoReply.value && replyContent) {

      sendReply(getAtNickname(item.nickname) + replyContent);

      addAutoReplyChatItems(item, replyContent);
    }
  }

  function getAutoReplyContent(content: string): string {
    let result = "";
    for (let i = 0; i < autoReplyContentList.length; i++) {
      let item = autoReplyContentList[i];

      let m = content.match(new RegExp(item.key));
      if (m) {

        //如果有排除项，直接break，不自动回复
        let filter = item.excludes?.filter(item => m?.input?.includes(item));
        if (filter && filter.length > 0) {
          break;
        }

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
    autoReplyChatItems,
    getAutoReplyContent,
    saveReplyList: saveToStorage
  };
});
