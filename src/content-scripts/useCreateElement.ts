type Style = {
  [key: string]: string;
};

function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

const zIndex = "10240";

/**
 * douyin 自己的侧边导航bar
 */
function getDySideBar() {
  return document.getElementById("douyin-sidebar");
}

function setElemStyle(elem: HTMLElement) {
  let style: Style = {
    position: "fixed",
    bottom: "8px",
    right: "8px",
    "z-index": zIndex,
  };

  Object.keys(style).forEach((key) => {
    if (isValidKey(key, style)) {
      elem!.style[key] = style[key];
    }
  });
}

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
    setElemStyle(mountEl);
    document.body.appendChild(mountEl);
  }

  return mountEl;
}

export { createElement };
