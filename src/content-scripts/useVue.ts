import { App, Component, createApp } from "vue";
import DouyinComponent from '../components/douyin/index.vue'
import { createDyExtElement, createTimeElement, createZimuElement } from './useCreateElement'
import { createPinia, Pinia } from 'pinia'
import useEmojiPlugin from "../components/douyin/emoji/useEmojiPlugin";
import EmojiComponent from "../components/douyin/emoji/index.vue"
import ZimuComponent from "../components/douyin/zimu/index.vue"
import TimeComponent from "../components/douyin/time/index.vue"

let pinia = createPinia();

function createVueApp(mountEl:HTMLElement, component:Component, pinia?:Pinia){
    const app: App<Element> = createApp(component);
    pinia && app.use(pinia);
    app.mount(mountEl);
    return app;
}

function createDyExVueApp() {
    return createVueApp(createDyExtElement(), DouyinComponent, pinia);
}

function createEmojiVueApp(){
    return createVueApp(useEmojiPlugin(), EmojiComponent, pinia);
}

function createZimuVueApp(){
    return createVueApp(createZimuElement(), ZimuComponent, pinia);
}

function createTimeVueApp(){
    return createVueApp(createTimeElement(), TimeComponent, pinia);
}

export {
    createDyExVueApp,
    createEmojiVueApp,
    createZimuVueApp,
    createTimeVueApp
}
