import { createApp } from 'vue'

import App from './App.vue'

const video = document.getElementsByTagName('video')[0];

createApp(App).provide('video', video).mount('#app')
