import Vue from 'vue';
import axios from 'axios'
export const dataBus = new Vue({
    data () {
        return {
            foods: {}
        }
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

                    console.log('--------------------------------')
                    console.log(resp.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
});
