export const formatDate = (date: Date) => {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return (
        ((h < 10 && "0" + h) || h) +
        ":" +
        ((m < 10 && "0" + m) || m) +
        ":" +
        ((s < 10 && "0" + s) || s)
    );
}