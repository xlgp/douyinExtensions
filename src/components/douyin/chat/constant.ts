export interface ChatRoomItem {
    nickname: string;
    content: string;
}

export const chatProvideKey = Symbol();

export interface ChatProvideType{
    close:() => void
}
