import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './style.css'
import { createEmojiVueApp, createZimuVueApp } from './content-scripts/useVue'

createApp(App).use(createPinia()).mount('#side-bar-app')

createEmojiVueApp();
createZimuVueApp();

