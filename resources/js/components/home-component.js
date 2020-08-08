require('../bootstrap');

window.Vue = require('vue');
window.Axios = require('axios');

// import store from './store/store'
import HomeComponent from './readers/HomeComponent'

Vue.component('home-component', HomeComponent);

const app = new Vue({
    el: '#app'
    // store
});