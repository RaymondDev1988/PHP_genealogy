import Vue from 'vue';

import '@core-modules';

import App from '@enso-ui/ui/bulma';
import router from './router';
import store from './store';

import './app';

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
