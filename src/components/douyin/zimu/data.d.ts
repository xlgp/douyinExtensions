export interface ChangCiType {
    content: string,
    delayTime: number,
    delayTimeText: string
}
export interface ChangDuanItemType {
    id:number,
    name: string,
    originName: string,
    juMu: string,
    originJuMu: string,
    juZhong: string,
    beiZhu?: string,
    offset: number,
}
export interface ChangDuanType {
    item: ChangDuanItemType,
    changCiList: ChangCiType[]
}