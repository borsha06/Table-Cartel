import Vue from 'vue';
import axios from 'axios'
export const dataBus = new Vue({
    data () {
        return {
            foods: {}
        }
    },
    beforeCreate () {
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-foods')
            .then((resp) => {
                this.foods = resp.data

                console.log('--------------------------------')
                console.log(resp.data)
            })
            .catch((err) => {
                console.log(err)
            })
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
    mounted: function () {
        this.fetchData();

        setInterval(function () {
            this.fetchData();
            console.log('hello');
        }.bind(this), 3000);
    }
});
