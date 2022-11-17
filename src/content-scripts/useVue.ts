import { App, createApp } from "vue";
import DouyinComponent from '../components/douyin/index.vue'
import { createElement } from './useCreateElement'
import { createPinia } from 'pinia'
import useEmojiPlugin from "../components/douyin/emoji/useEmojiPlugin";
import EmojiComponent from "../components/douyin/emoji/index.vue"

function createVueApp() {
    const mountEl = createElement();
    const app: App<Element> = createApp(DouyinComponent);
    app.use(createPinia());
    app.mount(mountEl);
    return app;
}

function createEmojiVueApp(){
    const el = useEmojiPlugin();
    const app: App<Element> = createApp(EmojiComponent);
    app.use(createPinia());
    app.mount(el);
    return app;
}

export {
    createVueApp,
    createEmojiVueApp
}
