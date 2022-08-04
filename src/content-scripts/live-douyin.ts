import {createVueApp} from './useVue';

let videoDom:HTMLVideoElement = document.getElementsByTagName('video')[0];

if (videoDom) {
    createVueApp(videoDom);
}