import { App } from 'vue';
import { createEmojiVueApp, createDyExVueApp, createTimeVueApp } from './useVue';

let app: App<Element> = undefined as unknown as App;
let emojiApp: App<Element> = undefined as unknown as App;
let timeApp: App<Element> = undefined as unknown as App;

window.addEventListener('load', () => {
  setTimeout(() => {
    app = createDyExVueApp();
    timeApp = createTimeVueApp();
    emojiApp = createEmojiVueApp();
  }, 5000);

});