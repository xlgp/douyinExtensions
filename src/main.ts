import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './style.css'

const video = document.getElementsByTagName('video')[0];

createApp(App).use(createPinia()).provide('video', video).mount('#side-bar-app')
