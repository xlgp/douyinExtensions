import { defineStore } from "pinia";
import {
  ChatRoomItem,
  filterFieldDefaultValue,
  filterFieldKey,
  filterNicknameDefaultValue,
  filterNicknameKey,
  SelectOptiontype,
} from "../constant";

function getLocalNickname() {
  let localName = localStorage.getItem(filterNicknameKey);
  if (!localName) {
    localStorage.setItem(filterNicknameKey, filterNicknameDefaultValue);
    localName = filterNicknameDefaultValue;
  }
  return localName;
}

function getLocalFilterField() {
  let value = localStorage.getItem(filterFieldKey);
  if (!value) {
    localStorage.setItem(filterFieldKey, filterFieldDefaultValue);
    value = filterFieldDefaultValue;
  }
  return value;
}

function parseLocalFilterField(value: string) {
  return value
    .trim()
    .split(",")
    .map((value) => {
      let o = value.trim().split("|");
      return {
        value: o[0].trim(),
      };
    });
}

export const useChatStore = defineStore("dyChatStore", () => {
  const filterNickname = ref(getLocalNickname());

  const filterFieldList = ref(parseLocalFilterField(getLocalFilterField()));

  const filterChatItems = ref<ChatRoomItem[]>([]);
  const filterChatItemIds = computed(() =>
    filterChatItems.value.map((item) => item.itemId)
  );

  function setFilterChatItems(item: ChatRoomItem) {
    filterChatItems.value.push(item);
  }

  function saveFilterNickname() {
    localStorage.setItem(filterNicknameKey, filterNickname.value);
  }
  return {
    filterNickname,
    filterFieldList,
    filterChatItemIds,
    filterChatItems,
    setFilterChatItems,
    saveFilterNickname,
  };
});
