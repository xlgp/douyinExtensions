import { ChangDuanItemType } from "../data";

export default ()=>{
    const getChangduanItem = ():ChangDuanItemType[]=>{
        return [{
            id: 0,
            name: "树上鸟儿成双对",
            originName: "树上鸟儿成双对",
            juZhong: "黄梅戏",
            juMu: "天仙配",
            originJuMu: "天仙配",
            offset: -10,
          },
          {
            id: 1,
            name: "谁料皇榜中状元",
            originName: "谁料皇榜中状元",
            juZhong: "黄梅戏",
            juMu: "女驸马",
            originJuMu: "女驸马",
            offset: -10,
          }] as ChangDuanItemType[];
    }
    return{
        getChangduanItem
    }
}