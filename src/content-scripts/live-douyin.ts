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

  let p1 = useMutationObserver.catch(err => {
    console.error(err);
    return p2;
  });

  let p2 = new Promise((resolve, reject) => {
    console.log(`5s 后执行`);
    setTimeout(() => {
      resolve(5000);
    }, 5000)
  });

  //先监听聊天区dom创建，再创建vue。
  //若监听失败，5s后执行创建操作。
  Promise.race([p1, p2])
    .then(createVueApp)
    .catch(console.error);

});