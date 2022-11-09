import { ChatRoomItem } from "../constant";
import { useChatStore } from "../store/Chat";

export default () => {
    const chatStore = useChatStore();
    /**
     * 
     * @param toggle 
     */
    function toggleOtherDom(toggle: boolean) {
        //隐藏其他区域
        let elem = document.getElementById("_douyin_live_scroll_container_")
            ?.previousElementSibling as HTMLElement;
        if (elem) {
            elem.style.display = toggle && "block" || "none";
        }
        //隐藏footer
        document.getElementsByTagName("footer")[0].style.display = toggle && "block" || "none";
    }

    /**
     * 重新渲染视频直播区域
     * 主要删除上下无用的dom
     */
    function togglePlayerView(liveElem: HTMLElement, toggle: boolean) {
        if (!liveElem) { return; }
        //删除上部分
        let firstElem = liveElem.firstElementChild?.firstElementChild as HTMLElement;
        let lastElem = liveElem.firstElementChild?.lastElementChild as HTMLElement;
        let nextElem = liveElem.nextElementSibling as HTMLElement;

        firstElem && (firstElem.style.display = toggle && "block" || "none");
        lastElem && (lastElem.style.display = toggle && "block" || "none");
        nextElem && (nextElem.style.display = toggle && "block" || "none");
    }

    /**
     * 点击评论内容，获取昵称
     * @param callback 获取昵称后回调函数
     */
    function addNicknameListener(callback: Function) {
        function getChatroomItem(dom: HTMLElement | null): HTMLElement | null {
            if (dom == null) {
                return null;
            }
            //过滤
            if (dom.classList.contains("webcast-chatroom__room-message")) {
                return null;
            }

            if (dom.classList.contains("webcast-chatroom___item")) {
                return dom;
            }

            if (dom.classList.contains("webcast-chatroom___items")) {
                return null;
            }
            return getChatroomItem(dom.parentElement);
        }
        let elem = document.getElementsByClassName("webcast-chatroom___items")[0];
        if (!elem) {
            return;
        }
        elem.addEventListener("dblclick", function (e) {
            if (e.target instanceof HTMLElement) {
                let itemDom = getChatroomItem(e.target);
                if (itemDom) {
                    let nickname = getNickname(itemDom.children[0].children[1]);
                    callback(nickname);
                }
            }
        });
    }

    function getNickname(elem: Element) {
        return (elem as HTMLElement).innerText.slice(0, -1);
    }

    function getAtNickname(nickname: string) {
        return "@" + nickname + " ";
    }
    function isContainAtNickname(nickname: string, value: string) {
        return value.includes(getAtNickname(nickname));
    }

    function insertNicknameToTextAreaElem(nickname: string, focus: boolean = false) {
        let textAreaElem = document.getElementsByClassName(
            "webcast-chatroom___textarea"
        )[0] as HTMLTextAreaElement;

        if (
            nickname &&
            textAreaElem
        ) {
            if (!isContainAtNickname(nickname, textAreaElem.value)) {
                textAreaElem.value += getAtNickname(nickname);
            }
            if (focus) {
                setTimeout(() => {
                    textAreaElem.focus();
                }, 200);
            }
        }
    }

    /**
     * 重新设置输入框样式
     */
    function renderChatroomInputContainer() {
        let containerElem = document.getElementsByClassName(
            "webcast-chatroom___input-container"
        )[0] as HTMLElement;
        if (!containerElem) {
            return;
        }
        containerElem.style.height = "46px";
        renderSendBtn(containerElem);
        renderLimit(containerElem);
    }

    function renderSendBtn(parentElement: HTMLElement) {
        let btnElem = parentElement.getElementsByClassName(
            "webcast-chatroom___send-btn"
        )[0] as HTMLButtonElement;
        if (!btnElem) {
            return;
        }
        let btnTop = (parentElement.clientHeight - btnElem.clientHeight) / 2;
        btnElem.style.top = btnTop + "px";
        btnElem.style.borderRadius = "6px";
    }

    function renderLimit(parentElement: HTMLElement) {
        let limitElem = parentElement.getElementsByClassName(
            "webcast-chatroom___limit"
        )[0] as HTMLElement;
        if (!limitElem) { return; }
        limitElem.style.position = "absolute";
        limitElem.style.color = "#ffd5dd";
        limitElem.style.bottom = "6px";
        limitElem.style.right = "-22px";
        limitElem.style.zIndex = "1";
    }

    function toggleLivingPlayer() {
        let videoElem = document.getElementsByTagName("video")[0] as HTMLVideoElement;
        videoElem.addEventListener("click", (e) => {
            let display = videoElem.style.display || "none";
            videoElem.style.display = display == "none" && "block" || "none";
        });
    }

    /**
     * 判断是否包含用户昵称
     * @param elem
     * @param nickname
     * @returns true or false
     */
    function isContainAtUser(elem: Element, nickname: string) {
        return nickname && (elem as HTMLElement).innerText.includes(nickname);
    }

    /**
     * 监听 chatroom___items 子列表
     * @param filter 过滤条件
     * @param callback
     */
    function mutationObserver(filter: Function, callback: Function) {
        const config = { childList: true, subtree: true };
        // 当观察到变动时执行的回调函数
        const observerCallback = function (
            mutationsList: MutationRecord[]) {
            for (let mutation of mutationsList) {
                let addedNodes = mutation.addedNodes;
                for (let i = 0; i < addedNodes.length; i++) {
                    const node = addedNodes[i] as HTMLElement;
                    let item = node.childNodes[0] as HTMLElement;
                    if (item.classList.contains("webcast-chatroom__room-message")) {
                        continue;
                    }
                    if (filter(item.children[2], node.dataset.id)) {
                        callback(item, node.dataset.id);
                    }
                }
            }
        };

        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(observerCallback);

        // 以上述配置开始观察目标节点
        let targetNode = document.getElementsByClassName(
            "webcast-chatroom___items"
        )[0].firstChild;
        if (targetNode) {
            observer.observe(targetNode, config);
        }
    }

    function getChatroomItem(elem: HTMLElement, itemId: string): ChatRoomItem {
        let content = (elem.children[2] as HTMLElement).innerText;
        let nickname = getNickname(elem.children[1]);
        return {
            nickname,
            content,
            createdAt: new Date,
            itemId: itemId
        };
    }

    function getFilterNickname() {
        return chatStore.filterNickname;
    }

    function init() {
        toggleOtherDom(false);
        // toggleLivingPlayer();

        try {
            //获取直播区域
            let liveElem = document.querySelector(
                "[data-e2e='living-container']"
            ) as HTMLElement;

            togglePlayerView(liveElem, false);

            addNicknameListener((nickname: string) => insertNicknameToTextAreaElem(nickname, true));

            mutationObserver(
                (elem: Element, itemId: string) => {
                    return !chatStore.filterChatItemIds.includes(itemId) && isContainAtUser(elem, getFilterNickname());
                },
                (elem: HTMLElement, itemId: string) => {
                    let item = getChatroomItem(elem, itemId);
                    chatStore.setFilterChatItems(item);
                }
            );

            setTimeout(renderChatroomInputContainer, 1000);
        } catch (error) {
            console.error(error);
        }
    };

    init();
    return {
        insertNicknameToTextAreaElem
    }
};
