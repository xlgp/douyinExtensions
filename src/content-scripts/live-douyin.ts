import { App } from 'vue';
import useMutationObserver from './useMutationObserver';
import { createEmojiVueApp, createDyExVueApp, createTimeVueApp } from './useVue';

let app: App<Element> = undefined as unknown as App;
let emojiApp: App<Element> = undefined as unknown as App;
let timeApp: App<Element> = undefined as unknown as App;

window.addEventListener('load', () => {

  function createVueApp() {
    timeApp = createTimeVueApp();
    emojiApp = createEmojiVueApp();
    app = createDyExVueApp();
  }

  useMutationObserver()
    .catch(err => {
      console.error(err);
      return p2;
    }).then(createVueApp);

  let p2 = new Promise((resolve, reject) => {
    let millis = 10000;
    setTimeout(() => {
      console.log(`10s 后执行`);
      resolve(millis);
    }, millis)
  });

  //先监听聊天区dom创建，再创建vue。
  //若监听失败，5s后执行创建操作。


});