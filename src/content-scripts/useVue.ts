import { App, createApp } from "vue";
import DouyinComponent from '../components/douyin/index.vue'
import { createElement } from './useCreateElement'
import { createPinia } from 'pinia'

function createVueApp(video: HTMLVideoElement) {
    const mountEl = createElement();
    const app: App<Element> = createApp(DouyinComponent);
    app.provide('video', video);
    app.use(createPinia());
    app.mount(mountEl);
    return app;
}

export {
    createVueApp
}
