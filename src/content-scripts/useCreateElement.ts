type Style = {
  [key: string]: string;
};

function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

function createElement() {
  const MOUNT_EL_ID = "dy-ext-box";

  let mountEl = document.getElementById(MOUNT_EL_ID);
  if (mountEl) {
    mountEl.remove();
  }
  mountEl = document.createElement("div");
  mountEl.setAttribute("id", MOUNT_EL_ID);
  let style: Style = {
    position: "fixed",
    bottom: "90px",
    right: "8px",
    "z-index": "10240",
  };
  mountEl.style["position"] = style["position"];

  Object.keys(style).forEach((key) => {
    if (isValidKey(key, style)) {
      mountEl!.style[key] = style[key];
    }
  });

  document.body.appendChild(mountEl);
  return mountEl;
}

export { createElement };
