export const useDouyinStore = defineStore("douyinStore", () => {

    //控制页面上其他区域显示与隐藏
    const pageCompDisplay = ref<boolean>(false);

    function toggleDisplay() {
        pageCompDisplay.value = !pageCompDisplay.value;
    }

    return { pageCompDisplay, toggleDisplay }
});