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

export const filterNicknameKey = "DyFilterNickname";
export const filterNicknameDefaultValue = "僻";
