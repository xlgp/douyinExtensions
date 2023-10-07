import { defineStore } from "pinia";
import { getFromStorage, getLocalFilterField } from "../../composable/useStorage";
import { getAtNickname, getAutoReplyContent, parseLocalFilterField } from "../composable/useChatUtil";
import useTextareaPlugin from "../composable/useTextareaPlugin";
import { AutoReplyChatItem, autoReplyContentList, ChatRoomItem, filterFieldKey, originalContentReplyValue, replyTagKey, storageSeparator } from "../constant";

export const useChatStore = defineStore("dyChatStore", () => {

  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  const isAutoReply = ref<Boolean>(true);

  const isTextAreaFocus = ref<Boolean>(false);

  const { sendReply } = useTextareaPlugin(e => isTextAreaFocus.value = true, e => isTextAreaFocus.value = false);

  /**
   * 最新一次查看面板的时间
   */
  const lastVisitDyChatTime = ref<number>(new Date().getTime());

  const filterChatItems = ref<ChatRoomItem[]>([]);

  //准备回复队列
  const pendingReplyItemIds = ref<number[]>([]);

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


  let autoReplyInterval: any;
  watch(isTextAreaFocus, focus => {
    clearInterval(autoReplyInterval);
    if (focus) {
      return;
    }

    autoReplyInterval = setInterval(() => {
      if (pendingReplyItemIds.value.length == 0) {
        clearInterval(autoReplyInterval);
      }
      autoReply();
    }, 1000);
  });

  function setFilterChatItems(item: ChatRoomItem) {
    filterChatItems.value.push(item);
    pendingReplyItemIds.value.push(filterChatItems.value.length - 1);
    //自动回复
    if (isAutoReply.value) {
      autoReply();
    }
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

  function autoReply() {

    if (isTextAreaFocus.value) {
      return;
    }
    let index = pendingReplyItemIds.value.shift();
    if (Number.isInteger(index)) {
      let item: ChatRoomItem = filterChatItems.value[index as number];
      let replyContent = getAutoReplyContent(item.content, autoReplyContentList, originalContentReplyValue);

      if (replyContent) {

        sendReply(getAtNickname(item.nickname) + replyContent);

        addAutoReplyChatItems(item, replyContent);
      }
    }
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
    replyList,
    isAutoReply,
    autoReplyChatItems,
    setLastVisitDyChatTime,
    setFilterChatItems,
    clearFilterChatItems,
    saveFilterFieldList,
    saveReplyList: saveToStorage
  };
});
