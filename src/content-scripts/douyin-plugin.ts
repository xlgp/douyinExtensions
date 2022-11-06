

function removeOtherDom() {

    //删除其他区域
    document.getElementById('_douyin_live_scroll_container_')?.previousSibling?.remove();

    //隐藏footer
    document.getElementsByTagName('footer')[0].style.display = 'none';
}

/**
 * 重置输入组件的位置
 */
function renderInputContainer() {

    let inputContainer = document.getElementsByClassName("webcast-chatroom___input-container")[0] as HTMLElement;

    inputContainer.style.position = "absolute";
    inputContainer.style.top = "10px";
    inputContainer.style.opacity = "0.9";
    inputContainer.style.width = "100%";
    inputContainer.style.margin = "0";
}

/**
 * 重新渲染视频直播区域
 * 主要删除上下无用的dom
 */
function renderPlayerView(liveDom: HTMLElement) {
    //删除上部分
    liveDom.firstElementChild?.firstElementChild?.remove();
    liveDom.firstElementChild?.lastElementChild?.remove();
}

window.addEventListener('load', () => {
    removeOtherDom();
    try {
        //获取直播区域
        let liveDom = document.querySelector("[data-e2e='living-container']") as HTMLElement;
        liveDom?.nextSibling?.remove();
        renderPlayerView(liveDom);
    } catch (error) {

    }
})

export { }