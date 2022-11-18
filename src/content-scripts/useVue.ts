import { App, createApp } from "vue";
import DouyinComponent from '../components/douyin/index.vue'
import { createDyExtElement, createZimuElement } from './useCreateElement'
import { createPinia } from 'pinia'
import useEmojiPlugin from "../components/douyin/emoji/useEmojiPlugin";
import EmojiComponent from "../components/douyin/emoji/index.vue"
import ZimuComponent from "../components/douyin/zimu/index.vue"

let pinia = createPinia();

function createVueApp() {
    const mountEl = createDyExtElement();
    const app: App<Element> = createApp(DouyinComponent);
    app.use(pinia);
    app.mount(mountEl);
    return app;
}

function createEmojiVueApp(){
    const el = useEmojiPlugin();
    const app: App<Element> = createApp(EmojiComponent);
    app.use(pinia);
    app.mount(el);
    return app;
}

function createZimuVueApp(){
    const el = createZimuElement();
    const app: App<Element> = createApp(ZimuComponent);
    app.use(pinia);
    app.mount(el);
    return app;
}


export {
    createVueApp,
    createEmojiVueApp,
    createZimuVueApp
}
