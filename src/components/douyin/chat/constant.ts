export interface ChatRoomItem {
  nickname: string;
  content: string;
  createdAt: Date;
  itemId: string;
}

export interface AutoReplyChatItem {
  content: string;
  chatItemId: string;
  createdAt: Date;
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

export interface AutoReplyContentType {
  key: string,
  value: string,
  excludes?: Array<string>
}

export const originalContentReplyValue = "__original_content_reply__"
export const autoReplyContentList: AutoReplyContentType[] = [
  {
    key: "辛苦",
    value: "不客气"
  },
  {
    key: "谢谢",
    value: "不客气"
  },
  {
    key: "欢迎",
    value: "谢谢"
  },
  {
    key: "早上好|晚上好|中午好|上午好|下午好",
    value: originalContentReplyValue
  },
  {
    key: "僻.*.好$",
    excludes: ["同好"],
    value: "你好"
  }
]