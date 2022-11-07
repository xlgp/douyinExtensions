import { App, createApp } from "vue";
import DyDialog from '../components/douyin/index.vue'
import { createElement } from './useCreateElement'

function createVueApp(video: HTMLVideoElement) {
    const mountEl = createElement();
    const app: App<Element> = createApp(DyDialog);
    app.provide('video', video);
    app.mount(mountEl);
    return app;
}

export {
    createVueApp
}
