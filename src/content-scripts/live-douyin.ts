import { App } from 'vue';
import useMutationObserver from './useMutationObserver';
import { createEmojiVueApp, createDyExVueApp, createTimeVueApp } from './useVue';

let app: App<Element> = undefined as unknown as App;
let emojiApp: App<Element> = undefined as unknown as App;
let timeApp: App<Element> = undefined as unknown as App;

window.addEventListener('load', () => {
  setTimeout(() => {
    app = createDyExVueApp();
  }, 5000);
  useMutationObserver.then(node => {
    timeApp = createTimeVueApp();
    emojiApp = createEmojiVueApp();
  }).catch(console.error);

});