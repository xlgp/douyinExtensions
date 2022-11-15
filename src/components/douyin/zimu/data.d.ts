export interface ChangCiType {
    content: string,
    delayTime: number,
    delayTimeText: string
}
export interface ChangDuanDetailType {
    id:number,
    name: string,
    originName: string,
    juMu: string,
    originJuMu: string,
    juZhong: string,
    beiZhu?: string,
    offset: number,
}
/**
 * index:当前actived唱词的下标
 */
export interface ChangDuanType {
    detail: ChangDuanDetailType,
    changCiList: ChangCiType[],
    index:number,
}