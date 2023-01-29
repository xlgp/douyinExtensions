import { filterFieldKey, filterFieldDefaultValue, replyTagKey, storageSeparator } from "../chat/constant";

export function getLocalFilterField() {
  let value = localStorage.getItem(filterFieldKey);
  if (!value) {
    localStorage.setItem(filterFieldKey, filterFieldDefaultValue);
    value = filterFieldDefaultValue;
  }
  return value;
}

export const getFromStorage = () => {
  try {
    return window.localStorage.getItem(replyTagKey)?.split(storageSeparator);
  } catch (error) {
    console.error(error);
  }
  return [];
}