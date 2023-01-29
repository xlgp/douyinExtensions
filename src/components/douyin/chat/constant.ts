export interface ChatRoomItem {
  nickname: string;
  content: string;
  createdAt: Date;
  itemId: string;
}

export const chatProvideKey = Symbol();

export interface ChatProvideType {
  close: () => void;
}

export const replyTagKey = "replyTag";
export const storageSeparator = ",";

export const filterFieldKey = "DyFilterField";
export const filterFieldDefaultValue = "僻,心灵";

export interface SelectOptiontype {
  value: string;
}
