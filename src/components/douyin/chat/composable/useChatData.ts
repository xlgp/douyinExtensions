import { ChatRoomItem } from "../../../../content-scripts/douyin-plugin"

export default () => {

    const items = ref<ChatRoomItem[]>();

    return {
        items
    }
}