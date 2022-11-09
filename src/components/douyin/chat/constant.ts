export interface ChatRoomItem {
    nickname: string;
    content: string;
    createdAt: Date;
    itemId: string;
}

export const chatProvideKey = Symbol();

export interface ChatProvideType {
    close: () => void
}
