export type Style = {
    [key: string]: string;
};

export function isValidKey(
    key: string | number | symbol,
    object: object
): key is keyof typeof object {
    return key in object;
}

export function setElemStyle(elem: HTMLElement, style: Style) {
    Object.keys(style).forEach((key) => {
        if (isValidKey(key, style)) {
            elem!.style[key] = style[key];
        }
    });
}