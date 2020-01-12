// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from "vuex-router-sync";

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import store from '../src/store'

import "@/assets/sass/app.sass"

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	mode: 'history'
});

sync(store, router);

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
});
