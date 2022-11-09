import { defineStore } from "pinia";
import {
  ChatRoomItem,
  filterFieldDefaultValue,
  filterFieldKey,
} from "../constant";

function getLocalFilterField() {
  let value = localStorage.getItem(filterFieldKey);
  if (!value) {
    localStorage.setItem(filterFieldKey, filterFieldDefaultValue);
    value = filterFieldDefaultValue;
  }
  return value;
}

function parseLocalFilterField(value: string) {
  let list = value.trim().split(",");
  if (!list) return [];
  return list
    .filter((value: string) => value && value.trim())
    .map<string>((value: string): string => {
      return value.trim();
    });
}

export const useChatStore = defineStore("dyChatStore", () => {
  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  const filterChatItems = ref<ChatRoomItem[]>([]);
  const filterChatItemIds = computed(() =>
    filterChatItems.value.map((item) => item.itemId)
  );

  function setFilterChatItems(item: ChatRoomItem) {
    filterChatItems.value.push(item);
  }

  function saveFilterFieldList() {
    localStorage.setItem(filterFieldKey, filterFieldList.value.join(","));
  }
  return {
    filterFieldList,
    filterChatItemIds,
    filterChatItems,
    setFilterChatItems,
    saveFilterFieldList,
  };
});
