import { App } from 'vue';
import useMutationObserver from './useMutationObserver';
import { createEmojiVueApp, createDyExVueApp, createTimeVueApp } from './useVue';

let app: App<Element> = undefined as unknown as App;
let emojiApp: App<Element> = undefined as unknown as App;
let timeApp: App<Element> = undefined as unknown as App;

function createVueApp() {
  timeApp = createTimeVueApp();
  emojiApp = createEmojiVueApp();
  app = createDyExVueApp();
}

function listenCallback() {
  useMutationObserver()
    .catch(err => {
      console.error(err);
      return p2;
    }).then(createVueApp);

  let p2 = new Promise((resolve, reject) => {
    let millis = 10000;
    setTimeout(() => {
      resolve(millis);
    }, millis)
  });
}

window.addEventListener('load', listenCallback);