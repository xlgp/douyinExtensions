import { setElemStyle, Style } from "./useStyle";

const zIndex = "10240";

/**
 * douyin 自己的侧边导航bar
 */
function getDySideBar() {
  return document.getElementById("douyin-sidebar");
}

let style: Style = {
  position: "fixed",
  bottom: "8px",
  right: "8px",
  "z-index": zIndex,
};

function createElement() {
  const MOUNT_EL_ID = "dy-ext-box";

  let mountEl = document.getElementById(MOUNT_EL_ID);
  if (mountEl) {
    mountEl.remove();
  }
  mountEl = document.createElement("div");
  mountEl.setAttribute("id", MOUNT_EL_ID);

  let sidebarElem = getDySideBar();
  if (sidebarElem) {
    sidebarElem.style.zIndex = zIndex;
    sidebarElem.appendChild(mountEl);
  } else {
    setElemStyle(mountEl, style);
    document.body.appendChild(mountEl);
  }

  return mountEl;
}

export { createElement };
