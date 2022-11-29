import { ChangCiType, ChangDuanDetailType, ChangDuanType } from "../data";

export default () => {
  const getChangDuanDetailList = (): ChangDuanDetailType[] => {
      const data = [{
        id: 1,
        name: "春风送暖到襄阳",
        originName: "春风送暖到襄阳",
        juZhong: "黄梅戏",
        juMu: "女驸马",
        originJuMu: "女驸马",
        offset: -10,
      },
      {id:1,juZhong:"黄梅戏",name:"爱歌（回头一笑百媚生）", originName:"爱歌（回头一笑百媚生）", offset:-10, juMu:"", originJuMu:""},
{id:1,juZhong:"黄梅戏",name:"爱歌（你变那长安钟楼万寿钟）－春香传", originName:"爱歌（你变那长安钟楼万寿钟）－春香传", offset:-10, juMu:"", originJuMu:""},
{id:1,juZhong:"黄梅戏",name:"百花赠剑-溶溶月色照梅亭（杨舒星版）", originName:"百花赠剑-溶溶月色照梅亭（杨舒星版）", offset:-10, juMu:"", originJuMu:""},
{id:1,juZhong:"黄梅戏",name:"扮皇帝－游龙戏凤", originName:"扮皇帝－游龙戏凤", offset:-10, juMu:"", originJuMu:""},
{id:1,juZhong:"黄梅戏",name:"别洞观景", originName:"别洞观景", offset:-10, juMu:"", originJuMu:""},
{id:1,juZhong:"黄梅戏",name:"补背褡", originName:"补背褡", offset:-10, juMu:"", originJuMu:""}];
    return data as ChangDuanDetailType[];
  };
  const getChangCiList = (): ChangCiType[] => {
    return [
      {
        delayTime: 2000,
        delayTimeText: "00:06.27",
        content: "（伴）春花带✨露满园香",
      },
      {
        delayTime: 2000,
        delayTimeText: "00:14.06",
        content: "乳✨燕双双绕画梁",
      },
      { delayTime: 2000, delayTimeText: "00:21.85", content: "好景偏逢人烦恼" },
      { delayTime: 2000, delayTimeText: "00:29.87", content: "几回思母又望郎" },
      {
        delayTime: 2000,
        delayTimeText: "00:49.79",
        content: "（唱）春风送暖到襄阳",
      },
      { delayTime: 2000, delayTimeText: "01:13.26", content: "西窗独坐倍凄凉" },
      {
        delayTime: 2000,
        delayTimeText: "01:23.27",
        content: "亲生母早年✨逝✨世✨仙乡去",
      },
      {
        delayTime: 2000,
        delayTimeText: "01:30.85",
        content: "撇下了素珍女无限惆怅",
      },
      {
        delayTime: 2000,
        delayTimeText: "01:43.47",
        content: "继母娘宠亲生恨我兄妹",
      },
      {
        delayTime: 2000,
        delayTimeText: "01:51.05",
        content: "老爹爹听信谗言也变了心肠",
      },
      {
        delayTime: 2000,
        delayTimeText: "02:03.10",
        content: "我兄长被逼走把舅父投靠",
      },
      {
        delayTime: 2000,
        delayTimeText: "02:22.98",
        content: "上京都已八载也无有音信回乡",
      },
      { delayTime: 2000, delayTimeText: "02:39.66", content: "心烦欲把琴弦理" },
      {
        delayTime: 2000,
        delayTimeText: "02:54.09",
        content: "又不知李郎我那知音人现在何方",
      },
      { delayTime: 2000, delayTimeText: "03:16.16", content: "现在何方" },
      { delayTime: 2000, delayTimeText: "03:30.13", content: "绣起鸳鸯难成对" },
      {
        delayTime: 2000,
        delayTimeText: "03:40.83",
        content: "何🔹曰🔹里能与他比翼🔹飞🔹翔",
      },
      { delayTime: 2000, delayTimeText: "04:05.11", content: "忽听李郎投亲来" },
      { delayTime: 2000, delayTimeText: "04:09.50", content: "怎不叫人喜开怀" },
      { delayTime: 2000, delayTimeText: "04:13.88", content: "任凭紫燕成双对" },
      { delayTime: 2000, delayTimeText: "04:18.22", content: "任凭红花并蒂开" },
      {
        delayTime: 2000,
        delayTimeText: "04:22.80",
        content: "怎比得我与他情深似海",
      },
      {
        delayTime: 2000,
        delayTimeText: "04:44.89",
        content: "莫奈何男女有别咫尺天涯",
      },
      {
        delayTime: 2000,
        delayTimeText: "05:14.62",
        content: "相当年与公子同窗共砚",
      },
      {
        delayTime: 2000,
        delayTimeText: "05:19.46",
        content: "我二人心相印有口难开",
      },
      {
        delayTime: 2000,
        delayTimeText: "05:23.74",
        content: "生身母看出了儿女心愿",
      },
      {
        delayTime: 2000,
        delayTimeText: "05:29.65",
        content: "与李家结秦晋定下了同偕",
      },
      {
        delayTime: 2000,
        delayTimeText: "05:37.74",
        content: "在京都与李郎分别数载",
      },
      { delayTime: 2000, delayTimeText: "05:45.28", content: "喜相逢 欲畅叙" },
      {
        delayTime: 2000,
        delayTimeText: "05:54.94",
        content: "羞人答答难下楼台",
      },
    ];
  };

  function getChangDuan(){
    return{
      detail:getChangDuanDetailList()[0],
      changCiList:getChangCiList()
    }as ChangDuanType;
  }

  return {
    getChangDuanDetailList,
    getChangCiList,
    getChangDuan
  };
};
