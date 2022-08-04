import { App, createApp } from "vue";
import Index from '../view/index.vue'
import { createElement } from './useCreateElement'

function createVueApp(video: HTMLVideoElement) {
    const mountEl = createElement();
    const app: App<Element> = createApp(Index);
    app.provide('video', video);
    app.mount(mountEl);
    return app;
}

export {
    createVueApp
}
