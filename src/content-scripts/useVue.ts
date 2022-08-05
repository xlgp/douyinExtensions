import { App, createApp } from "vue";
import DyVideoCssDialog from '../components/douyin/DyVideoCssDialog.vue'
import { createElement } from './useCreateElement'

function createVueApp(video: HTMLVideoElement) {
    const mountEl = createElement();
    const app: App<Element> = createApp(DyVideoCssDialog);
    app.provide('video', video);
    app.mount(mountEl);
    return app;
}

export {
    createVueApp
}
