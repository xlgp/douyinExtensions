import { filterFieldKey, filterFieldDefaultValue } from "../chat/constant";

export function getLocalFilterField() {
  let value = localStorage.getItem(filterFieldKey);
  if (!value) {
    localStorage.setItem(filterFieldKey, filterFieldDefaultValue);
    value = filterFieldDefaultValue;
  }
  return value;
}