export default () => {

    /**
     *隐藏页面无用的区域
     * @param toggle
     */
    function toggleOtherDom(toggle: boolean) {
        //隐藏其他区域
        let elem = document.getElementById("_douyin_live_scroll_container_")
            ?.previousElementSibling as HTMLElement;
        if (elem) {
            elem.style.display = (toggle && "block") || "none";
        }
        //隐藏footer
        document.getElementsByTagName("footer")[0].style.display =
            (toggle && "block") || "none";
    }

    /**
    * 重新渲染视频直播区域
    * 主要删除上下无用的dom
    */
    function togglePlayerView(liveElem: HTMLElement, toggle: boolean) {
        if (!liveElem) {
            return;
        }
        //删除上部分
        let firstElem = liveElem.firstElementChild
            ?.firstElementChild as HTMLElement;
        let lastElem = liveElem.firstElementChild?.lastElementChild as HTMLElement;
        let nextElem = liveElem.nextElementSibling as HTMLElement;

        firstElem && (firstElem.style.display = (toggle && "block") || "none");
        lastElem && (lastElem.style.display = (toggle && "block") || "none");
        nextElem && (nextElem.style.display = (toggle && "block") || "none");
    }


    /**
     * 切换直播画面的显示与隐藏
     */
    function toggleLivingPlayer() {
        let videoElem = document.getElementsByTagName(
            "video"
        )[0] as HTMLVideoElement;
        videoElem.addEventListener("click", (e) => {
            let display = videoElem.style.display || "none";
            videoElem.style.display = (display == "none" && "block") || "none";
        });
    }

    function init() {
        //获取直播区域
        let liveElem = document.querySelector(
            "[data-e2e='living-container']"
        ) as HTMLElement;
        toggleOtherDom(false);
        toggleLivingPlayer();
        togglePlayerView(liveElem, false);
    }
    setTimeout(() => {
        init();
    }, 10);
}