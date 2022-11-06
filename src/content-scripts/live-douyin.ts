import { App } from 'vue';
import { createVueApp } from './useVue';

const getVideo = () => { return document.getElementsByTagName('video')[0]; }

let app: App<Element> = undefined as unknown as App;
window.addEventListener('load', (event) => {
  let videoDom: HTMLVideoElement = getVideo();
  if (videoDom) {
    app = createVueApp(videoDom);
  }
});

chrome.runtime.onMessage.addListener(
  (
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    if (message.key == 'create' && !app) { //创建
      app = createVueApp(getVideo());
    }
    sendResponse("ok");
  }
);