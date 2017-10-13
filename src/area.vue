<template>
    <v-ons-page id="">
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="40px" class="header_left_icon"><i class="fa fa-bars" aria-hidden="true"></i></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="40px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
            </ons-row>
        </div>
        <div class="background">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="left_side_search_heading">
                        <h2>search by area</h2>
                        <p>Here is the list of cuisinnes on offer!</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="cross_icon">
                        <i @click="pop" class="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center">
                <ons-col width="100%">

                    <div class="left_side_button" v-for="resttexo in restauranttexo">
                        <button class="button button--light button_customize" @click="rest_list(resttexo.term_id,resttexo.name)">{{ resttexo.name }}</button>
                    </div>
                </ons-col>
            </ons-row>
            <div v-if="loading" class="loading" v-cloak>
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                <!--<span>Loading...</span>-->
            </div>
        </div>








    </v-ons-page>
</template>

<script>
    import carousel from "assets/carousel.jpg"
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import arearest from './arearest'
    import {dataBus} from './static/assets/js/custom.js';
    export default {
        data (){
            return {
                notificationicon: notification,
                footercarousel: carousel,
                restauranttexo: {},
                food: dataBus.$data,
                loading:false,
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.loading= true
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/all-terms?term=location')
                    .then((resp) => {
                        this.restauranttexo = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            rest_list(id,name) {
                this.pageStack.push({
                    extends: arearest,
                    data() {
                        return {
                            data: {'id': id,'name':name}
                        }
                    }
                });
            },
            pop(){
                this.pageStack.pop();
            },
            push() {
                this.pageStack.push(cuisine_rest)
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .button{
        float:left;
    }
    .loading{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
    }

</style>