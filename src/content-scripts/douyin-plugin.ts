function removeOtherDom() {
  //隐藏其他区域
  let elem = document.getElementById("_douyin_live_scroll_container_")
    ?.previousElementSibling as HTMLElement;
  if (elem) {
    elem.style.display = "none";
  }
  //隐藏footer
  document.getElementsByTagName("footer")[0].style.display = "none";
}

/**
 * 重新渲染视频直播区域
 * 主要删除上下无用的dom
 */
function renderPlayerView(liveElem: HTMLElement) {
  //删除上部分
  let firstElem = liveElem.firstElementChild?.firstElementChild as HTMLElement;
  let lastElem = liveElem.firstElementChild?.lastElementChild as HTMLElement;
  let nextElem = liveElem.nextElementSibling as HTMLElement;

  firstElem && (firstElem.style.display = "none");
  lastElem && (lastElem.style.display = "none");
  nextElem && (nextElem.style.display = "none");
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
  document
    .getElementsByClassName("webcast-chatroom___items")[0]
    .addEventListener("dblclick", function(e) {
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

function insertNicknameToTextAreaElem(nickname: string) {
  let textAreaElem = document.getElementsByClassName(
    "webcast-chatroom___textarea"
  )[0] as HTMLTextAreaElement;

  if (
    nickname &&
    textAreaElem &&
    !isContainAtNickname(nickname, textAreaElem.value)
  ) {
    textAreaElem.value += getAtNickname(nickname);
  }
}

/**
 * 重新设置输入框样式
 */
function renderChatroomInputContainer() {
  let containerElem = document.getElementsByClassName(
    "webcast-chatroom___input-container"
  )[0] as HTMLElement;
  containerElem.style.height = "46px";
  renderSendBtn(containerElem);
  renderLimit(containerElem);
}

function renderSendBtn(parentElement: HTMLElement) {
  let btnElem = parentElement.getElementsByClassName(
    "webcast-chatroom___send-btn"
  )[0] as HTMLButtonElement;
  let btnTop = (parentElement.clientHeight - btnElem.clientHeight) / 2;
  btnElem.style.top = btnTop + "px";
  btnElem.style.borderRadius = "6px";
}

function renderLimit(parentElement: HTMLElement) {
  let limitElem = parentElement.getElementsByClassName(
    "webcast-chatroom___limit"
  )[0] as HTMLElement;
  limitElem.style.position = "absolute";
  limitElem.style.color = "#ffd5dd";
  limitElem.style.bottom = "6px";
  limitElem.style.right = "-22px";
  limitElem.style.zIndex = "1";
}

function hideLivingPlayer() {
  let videoElem = document.getElementsByTagName("video")[0] as HTMLVideoElement;
  videoElem.style.display = "none";
}

/**
 * 判断是否包含用户昵称
 * @param elem
 * @param nickname
 * @returns true or false
 */
function isContainAtUser(elem: Element, nickname: string) {
  return (elem as HTMLElement).innerText.includes(nickname);
}

/**
 * 监听 chatroom___items 子列表
 * @param filter 过滤条件
 * @param callback
 */
function mutationObserver(filter: Function, callback: Function) {
  const config = { childList: true, subtree: true };
  // 当观察到变动时执行的回调函数
  const observerCallback = function(
    mutationsList: MutationRecord[],
    observer: MutationObserver
  ) {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i] as HTMLElement;
        let item = node.childNodes[0] as HTMLElement;
        if (item.classList.contains("webcast-chatroom__room-message")) {
          continue;
        }
        if (filter(item.children[2])) {
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

export interface ChatRoomItem {
  nickname: string;
  content: string;
}

function getChatroomItem(elem: HTMLElement): ChatRoomItem {
  let content = (elem.children[2] as HTMLElement).innerText;
  let nickname = getNickname(elem.children[1]);
  return {
    nickname,
    content,
  };
}

function getFilterNickname() {
  return "";
}

window.addEventListener("load", () => {
  removeOtherDom();
  // hideLivingPlayer();

  try {
    //获取直播区域
    let liveElem = document.querySelector(
      "[data-e2e='living-container']"
    ) as HTMLElement;

    renderPlayerView(liveElem);

    addNicknameListener(insertNicknameToTextAreaElem);

    mutationObserver(
      (elem: Element) => {
        return isContainAtUser(elem, getFilterNickname());
      },
      (elem: HTMLElement, id: string) => {
        getChatroomItem(elem);
      }
    );

    setTimeout(renderChatroomInputContainer, 1000);
  } catch (error) {
    console.error(error);
  }
});

export {};
