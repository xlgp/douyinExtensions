import { useChatStore } from "../store/Chat";

const size = 4;

export default () => {
  let chatStore = useChatStore();
  let id = setInterval(() => {
    let len = chatStore.filterChatItems.length;
    if (len > size) {
      clearInterval(id);
      return;
    }
    let itemId = new Date().getTime() + "";
    chatStore.filterChatItems.push({
      content:
        "本曲出自黄梅戏《蓝桥汲水》选段：杉木水桶辛郎儿唆" +
        len,
      nickname: "昵称" + len,
      itemId,
      createdAt: new Date(),
    });
    chatStore.autoReplyChatItems[itemId] = chatStore.autoReplyChatItems[itemId] || [];
    chatStore.autoReplyChatItems[itemId].push({
      content: "回复内容1",
      createdAt: new Date(),
      chatItemId: itemId
    });
    chatStore.autoReplyChatItems[itemId].push({
      content: "回复内容2",
      createdAt: new Date(),
      chatItemId: itemId
    });
    chatStore.autoReplyChatItems[itemId].push({
      content: "回复内容3",
      createdAt: new Date(),
      chatItemId: itemId
    });
  }, 2000);
};
