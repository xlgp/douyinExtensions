
// 观察器的配置（需要观察什么变动）
const config = { childList: true, subtree: true };

function isWebCastChatRoom(node: Element) {
    return typeof node.className === "string" && node.className.includes("webcast-chatroom");
}

export default () => new Promise((resolve, reject) => {

    // 当观察到变动时执行的回调函数
    const callback = function (mutationsList: MutationRecord[], observer: MutationObserver) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {

                for (const node of mutation.addedNodes) {

                    if (isWebCastChatRoom(node as Element)) {
                        observer.disconnect();
                        resolve(node);
                        break;
                    }
                }
            }
        }
    };

    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);

    // 选择需要观察变动的节点
    let targetNode = document.querySelector(
        "[data-e2e='living-container']"
    );
    // 以上述配置开始观察目标节点
    if (targetNode) {
        observer.observe(targetNode, config);
    } else {
        reject("没有找到 targetNode [data-e2e='living-container']");
    }
});