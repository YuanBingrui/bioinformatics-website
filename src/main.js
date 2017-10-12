import Vue from 'vue';
import iView from 'iview';
import { Menu, Submenu, MenuItem } from 'element-ui';
import Util from './libs/util';
import App from './app.vue';
import '../my-theme/dist/iview.css';

Vue.use(iView);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);



new Vue({
    el: '#app',
    //router: router,
    render: h => h(App)
});