/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router'
import Vuex from 'vuex'


Vue.use(VueRouter);
Vue.use(Vuex);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

let router = require('./config/router').default;
Vue.router = router;
let store = require('./config/store').default;
Vue.store = store;

const app = new Vue({
    router: router,
    store: store,
    el: '#app',
    template: '<router-view/>',
    mounted() {
        let user = localStorage.getItem('user')
        if (user !== undefined && user !== null) {
            user = JSON.parse(user)
            Vue.store.commit('USER_LOGGED_IN', user)
        }
    }
});
