export default () => {

    /**
     *隐藏页面无用的区域
     * @param toggle
     */
    function toggleOtherDom(toggle: boolean) {
        //隐藏footer
        toggleDom(document.getElementsByTagName("footer")[0], toggle);
        //隐藏header 下的导航条
        toggleDom(document.getElementById("_douyin_live_scroll_container_")?.previousElementSibling as HTMLElement, toggle);
    }

    /**
     * 切换el显示与隐藏
     * @param el HTMLElement
     * @param toggle boolean toggle 为 true ,el display 为 flex,否则为none
     */
    function toggleDom(el: HTMLElement | null | undefined, toggle: boolean) {
        el && (el.style.display = (toggle && "flex") || "none");
    }

    /**
    * 重新渲染视频直播区域
    * 主要删除上下无用的dom
    */
    function togglePlayerView(toggle: boolean) {
        //获取大直播区域（直播区域+评论区域）
        let livingContainer = document.querySelector(
            "[data-e2e='living-container']"
        ) as HTMLElement;
        if (!livingContainer) {
            return;
        }

        //相关直播区域（直播大区域以下部分）
        toggleDom(livingContainer.nextElementSibling as HTMLElement, toggle);

        //直播区域
        let liveElem = livingContainer.firstElementChild;

        //主播名称区域
        toggleDom(liveElem?.firstElementChild as HTMLElement, toggle);

        /**
         * 直播区域下若有礼物区域
         */
        if (liveElem?.children.length == 3) {
            toggleDom(liveElem?.lastElementChild as HTMLElement, toggle);
        }
    }

    /**
     * 切换直播画面的显示与隐藏
     */
    function toggleLivingPlayer() {
        let playerElem = document.getElementsByClassName("living_player")[0] as HTMLElement;
        let videoElem = playerElem.querySelector("video") as HTMLVideoElement;
        playerElem.addEventListener("dblclick", () => {
            toggleDom(videoElem, videoElem.style.display == "none");
        });
    }

    function createUserDivElem() {
        let elem = document.createElement("div");
        elem.id = "ext-live-room-user";
        elem.style.display = "flex";
        return elem;
    }

    /**
     * 重新调整直播用户名的位置
     * @returns 
     */
    function insertLiveRoomNicknameElem() {
        let nicknameElem = document.querySelector('[data-e2e="live-room-nickname"]') as HTMLElement;
        if (!nicknameElem) { return; }
        let avatarElem = nicknameElem.previousElementSibling as HTMLElement;

        let userDivElem = createUserDivElem();

        let xgLeftGridElem = null;
        let xgLeftGridElemHieght = 0;
        try {
            xgLeftGridElem = document.getElementsByTagName("xg-controls")[0].getElementsByTagName("xg-left-grid")[0];
            xgLeftGridElemHieght = xgLeftGridElem.clientHeight;
            xgLeftGridElem.appendChild(userDivElem);

        } catch (error) {
            console.error(error);
            return;
        }
        if (avatarElem) {
            avatarElem.style.marginTop = (xgLeftGridElemHieght - avatarElem.clientHeight) / 2 + "px";
            userDivElem.append(avatarElem);
        }

        nicknameElem.style.lineHeight = xgLeftGridElemHieght + "px";
        nicknameElem.style.color = "#fff";
        nicknameElem.style.marginLeft = "4px";
        userDivElem.append(nicknameElem);
    }

    function init() {
        toggleLivingPlayer();
        insertLiveRoomNicknameElem();
    }

    function toggle(toggle: boolean) {
        toggleOtherDom(toggle);
        togglePlayerView(toggle);
    }
    return { toggle, init }
}