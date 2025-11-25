import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { test, getInfo } from './app';
test();
getInfo();
createApp(App).mount('#root');
