// For testing using the source file
import libvue from '../lib/main.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/sass/app.scss';

// Create app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(libvue);

// Mount the app
app.mount('#app');