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
    chatStore.filterChatItems.push({
      content:
        "刚才抢到红包啦内容.......,本曲出自黄梅戏《蓝桥汲水》选段：杉木水桶辛郎儿唆 " +
        len,
      nickname: "昵称" + len,
      itemId: new Date().getTime() + "",
      createdAt: new Date(),
    });
  }, 2000);
};
