function removeOtherDom() {

    //删除其他区域
    document.getElementById('_douyin_live_scroll_container_')?.previousSibling?.remove();

    //隐藏footer
    document.getElementsByTagName('footer')[0].style.display = 'none';
}

/**
 * 重新渲染视频直播区域
 * 主要删除上下无用的dom
 */
function renderPlayerView(liveElem: HTMLElement) {
    //删除上部分
    liveElem.firstElementChild?.firstElementChild?.remove();
    liveElem.firstElementChild?.lastElementChild?.remove();
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
    document.getElementsByClassName("webcast-chatroom___items")[0].addEventListener('click',
        function (e) {
            if (e.target instanceof HTMLElement) {
                let itemDom = getChatroomItem(e.target);
                if (itemDom) {
                    let nickname = itemDom.children[0].children[1].innerHTML.slice(0, -1);
                    callback(nickname);
                }
            }
        }
    )
}

function getAtNickname(nickname: string) {
    return "@" + nickname + " ";
}
function isContainAtNickname(nickname: string, value: string) {
    return value.includes(getAtNickname(nickname));
}

function insertNicknameToTextAreaElem(nickname: string, textAreaElem: HTMLTextAreaElement) {
    if (nickname && !isContainAtNickname(nickname, textAreaElem.value)) {
        textAreaElem.value += getAtNickname(nickname);
    }
}

/**
 * 重新设置输入框样式
 */
function renderChatroomInputContainer() {
    let containerElem = document.getElementsByClassName("webcast-chatroom___input-container")[0] as HTMLElement;
    containerElem.style.height = "46px";
    renderSendBtn(containerElem);
    renderLimit(containerElem);
}

function renderSendBtn(parentElement: HTMLElement) {
    let btnElem = parentElement.getElementsByClassName("webcast-chatroom___send-btn")[0] as HTMLButtonElement;
    let btnTop = (parentElement.clientHeight - btnElem.clientHeight) / 2;
    btnElem.style.top = btnTop + "px";
    btnElem.style.borderRadius = "6px";
}

function renderLimit(parentElement: HTMLElement) {
    let limitElem = parentElement.getElementsByClassName("webcast-chatroom___limit")[0] as HTMLElement;
    limitElem.style.position = "absolute";
    limitElem.style.color = "#ffd5dd";
    limitElem.style.bottom = "6px";
    limitElem.style.right = "-22px";
    limitElem.style.zIndex = "1";
}

window.addEventListener('load', () => {
    removeOtherDom();
    try {
        //获取直播区域
        let liveElem = document.querySelector("[data-e2e='living-container']") as HTMLElement;
        liveElem?.nextSibling?.remove();
        renderPlayerView(liveElem);

        let textAreaElem = document.getElementsByClassName("webcast-chatroom___textarea")[0] as HTMLTextAreaElement;

        addNicknameListener((nickname: string) => {
            insertNicknameToTextAreaElem(nickname, textAreaElem);
        });

        renderChatroomInputContainer();
    } catch (error) {
        console.error(error);
    }
})

export { }