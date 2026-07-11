import { createApp } from 'vue';

import App from './app.vue';
import { setupClickAnimation } from './main/setup-click-animation.js';
import { setupClickSound } from './main/setup-click-sound.js';
import { setupCustomCursor } from './main/setup-custom-cursor.js';
import { router } from './router';

const app = createApp(App);

app.use(router);

setupCustomCursor();
setupClickSound();
setupClickAnimation();

app.mount('#app');
