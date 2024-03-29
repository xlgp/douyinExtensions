import { storageSeparator, AutoReplyContentType } from "../constant";

//过滤
let filterClassList = [
  "webcast-chatroom__room-message",
  "webcast-chatroom___items",
];
export function getChatroomItem(dom: HTMLElement | null): HTMLElement | null {
  if (!dom) {
    return null;
  }

  for (let i = 0; i < filterClassList.length; i++) {
    if (dom.classList.contains(filterClassList[i])) {
      return null;
    }
  }

  if (dom.classList.contains("webcast-chatroom___item")) {
    return dom;
  }
  return getChatroomItem(dom.parentElement);
}

export function getNickname(elem: Element) {
  return (elem as HTMLElement).innerText.slice(0, -1);
}

export function getAtNickname(nickname: string) {
  return "@" + nickname + " ";
}
export function isContainAtNickname(nickname: string, value: string) {
  return value.includes(getAtNickname(nickname));
}

/**
 * 判断是否包含过滤数据
 * @param elem
 * @param nickname
 * @returns true or false
 */
export function isContainFilterField(elem: Element, filterFields: string[]) {
  if (filterFields && filterFields.length > 0) {
    let innerText = (elem as HTMLElement).innerText;
    for (let i = 0; i < filterFields.length; i++) {
      const field = filterFields[i];
      if (innerText.includes(field)) {
        return true;
      }
    }
  }
  return false;
}

export function insertNicknameToTextAreaElem(
  nickname: string,
  focus: boolean = false
) {
  let textAreaElem = document.getElementsByClassName(
    "webcast-chatroom___textarea"
  )[0] as HTMLTextAreaElement;

  if (nickname && textAreaElem) {
    if (!isContainAtNickname(nickname, textAreaElem.value)) {
      textAreaElem.value += getAtNickname(nickname);
    }
    if (focus) {
      setTimeout(() => {
        textAreaElem.focus();
      }, 200);
    }
  }
}

export function parseLocalFilterField(value: string) {
  let list = value.trim().split(storageSeparator);
  if (!list) return [];
  return list
    .filter((value: string) => value && value.trim())
    .map<string>((value: string): string => {
      return value.trim();
    });
}

export function getAutoReplyContent(content: string, autoReplyContentList: AutoReplyContentType[], originalContentReplyValue: string): string {
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