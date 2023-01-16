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

function createElement(id:string) {
   let mountEl = document.getElementById(id);
  if (mountEl) {
    mountEl.remove();
  }
  mountEl = document.createElement("div");
  mountEl.setAttribute("id", id);

  return mountEl;
}

function createDyExtElement(){
  const MOUNT_EL_ID = "dy-ext-box";
  let mountEl = createElement(MOUNT_EL_ID);
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

function createZimuElement(){
  const id = "dy-zimu-box";
  const div = createElement(id);
  let style:Style = {
    display:"flex",
    position:"fixed",
    'z-index':zIndex
  };
  setElemStyle(div, style);
  document.body.append(div);
  return div;
}

function createTimeElement(){
  const id = "dy-time-box";
  const div = createElement(id);
  let style:Style = {
    display:"flex",
    position:"absolute",
    bottom:"0px",
    right:"16px",
    'z-index':zIndex,
    color: 'var(--color-text-2)',
    'font-size': 'small',
  };
  let Elem = document.querySelector(".webcast-chatroom");
  setElemStyle(div, style);
  
  Elem?.append(div);
  return div;
}

export { createDyExtElement , createZimuElement, createTimeElement};
