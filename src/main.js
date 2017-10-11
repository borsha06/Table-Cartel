import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('static/assets/css/main.css');
require('static/assets/js/custom.js');

import App from './App';
import axios from 'axios'
export const dataBus = new Vue({
    data: {
        foods: {}
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData() {
            axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-foods')
                .then((resp) => {
                    this.foods = resp.data

                    // console.log('--------------------------------')
                    // console.log(resp.data)
//                        console.log('--------------------------------')
//                        console.log(this.paginate)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
});

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
