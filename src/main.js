import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
var VueResource = require('vue-resource');

import $ from 'jquery';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('static/assets/css/main.css');
require('static/assets/js/custom.js');
require('static/assets/js/login.js');

import App from './App';
Vue.use(VueOnsen);
Vue.use(VueResource);



new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
