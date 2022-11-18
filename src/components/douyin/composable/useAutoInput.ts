export type AutoInputType = {
    fireInput: (value: string) => void
};
export default (element: HTMLTextAreaElement): AutoInputType => {
    let valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
    if (!valueSetter) {
        valueSetter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), "value")?.set;
    }
    function fireInput(value: string) {
        valueSetter?.call(element, element.value + value);
        element.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return { fireInput }
}