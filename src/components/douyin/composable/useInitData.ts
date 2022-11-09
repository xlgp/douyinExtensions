import useChatData from "../chat/composable/useChatData";

export default () => {

    if (import.meta.env.DEV) {
        useChatData();
    }
}