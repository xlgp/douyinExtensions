import { App } from 'vue';
import { createEmojiVueApp, createVueApp } from './useVue';

let app: App<Element> = undefined as unknown as App;
let EmojiApp:App<Element> = undefined as unknown as App;

window.addEventListener('load', () => {
  app = createVueApp();
  EmojiApp = createEmojiVueApp();
});