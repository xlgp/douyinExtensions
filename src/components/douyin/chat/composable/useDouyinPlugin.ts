import { ChatRoomItem } from "../constant";
import { useChatStore } from "../store/Chat";
import {
  getChatroomItem,
  getNickname,
  insertNicknameToTextAreaElem,
  isContainFilterField,
} from "./useChatUtil";

export default () => {
  const chatStore = useChatStore();

  /**
   * 点击评论内容，获取昵称
   * @param callback 获取昵称后回调函数
   */
  function addNicknameListener(callback: Function) {
    let elem = document.getElementsByClassName("webcast-chatroom___items")[0];
    if (!elem) {
      return;
    }
    elem.addEventListener("dblclick", function(e) {
      if (e.target instanceof HTMLElement) {
        let itemDom = getChatroomItem(e.target);
        if (itemDom) {
          let nickname = getNickname(itemDom.children[0].children[1]);
          callback(nickname);
        }
      }
    });
  }

  /**
   * 监听 chatroom___items 子列表
   * @param filter 过滤条件
   * @param callback
   */
  function mutationObserver(filter: Function, callback: Function) {
    const config = { childList: true, subtree: true };
    // 当观察到变动时执行的回调函数
    const observerCallback = function(mutationsList: MutationRecord[]) {
      for (let mutation of mutationsList) {
        let addedNodes = mutation.addedNodes;
        for (let i = 0; i < addedNodes.length; i++) {
          const node = addedNodes[i] as HTMLElement;
          let item = node.childNodes[0] as HTMLElement;
          if (!item || item.classList.contains("webcast-chatroom__room-message")) {
            continue;
          }
          if (filter(item.children[2], node.dataset.id)) {
            callback(item, node.dataset.id);
          }
        }
      }
    };

    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(observerCallback);

    // 以上述配置开始观察目标节点
    let targetNode = document.getElementsByClassName(
      "webcast-chatroom___items"
    )[0].firstChild;
    
    if (targetNode) {
      observer.observe(targetNode, config);
    }
  }

  function createChatRoomItem(elem: HTMLElement, itemId: string): ChatRoomItem {
    let content = (elem.children[2] as HTMLElement).innerHTML;
    let nickname = getNickname(elem.children[1]);
    return {
      nickname,
      content,
      createdAt: new Date(),
      itemId: itemId,
    };
  }

  function getFilterFieldItems() {
    return chatStore.filterFieldList;
  }

  function init() {
    try {
      addNicknameListener((nickname: string) =>
        insertNicknameToTextAreaElem(nickname, true)
      );

      mutationObserver(
        (elem: Element, itemId: string) => {
          return (
            !chatStore.filterChatItemIds.includes(itemId) &&
            isContainFilterField(elem, getFilterFieldItems())
          );
        },
        (elem: HTMLElement, itemId: string) => {
          let item = createChatRoomItem(elem, itemId);
          chatStore.setFilterChatItems(item);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  init();
};
