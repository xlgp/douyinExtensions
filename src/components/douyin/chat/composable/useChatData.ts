import { useChatStore } from "../store/Chat";

const size = 40;

let nicknameList = ["好啊", "僻", "心灵", "阿斯顿", "微软", "哦i", "那边", "模块", "阿三", "风格化"];

let info = {
  [nicknameList[1]]: nicknameList[1] + " 谢谢",
  [nicknameList[2]]: nicknameList[2] + " 辛苦",
};

function getNickNameIndex() {
  return Math.floor(Math.random() * nicknameList.length);
}

export default () => {
  let chatStore = useChatStore();
  let id = setInterval(() => {
    let len = chatStore.filterChatItems.length;
    if (len > size) {
      clearInterval(id);
      return;
    }
    let itemId = new Date().getTime() + "";
    let nickname = nicknameList[getNickNameIndex()];
    let item = {
      content: info[nickname] || "本曲出自黄梅戏《蓝桥汲水》选段：杉木水桶辛郎儿唆" + len,
      nickname,
      itemId,
      createdAt: new Date(),
    };
    chatStore.setFilterChatItems(item);
  }, 100);
};
