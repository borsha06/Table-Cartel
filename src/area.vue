<template>
    <v-ons-page id="">
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"><img :src="menuico" alt="" /></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="50px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
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
                       <!--  <i  class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="close" alt="close" >
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
            <!--Footer Carousel-->
             <div class="cuisine_footer_carousel">
                <ons-carousel fullscreen swipeable auto-scroll overscrollable id="carousel">
                 <ons-row class="carousel_heading">
                    <p>Today's Special</p>
                </ons-row>
                    <ons-carousel-item v-for="foo in food['foods']"  style="background-color: #085078;">
                        <div class="image_footer">
                            <a href="" v-if="foo.img"><img v-bind:src="foo.img" /></a>
                            <a href="" v-else><img :src="footercarousel" /></a>
                            <img :src="footercarousel" alt="" />
                            <div class="image_overlay_content">
                                <h4 v-html="foo.short_title"></h4>
                                <p v-html="foo.short_content"> </p>
                            </div>
                        </div>
                    </ons-carousel-item>
                </ons-carousel>
            </div> 
            <!--Footer Carousel-->


        </div>








    </v-ons-page>
</template>

<script>
    import carousel from "assets/carousel.jpg"
    import menuicon from "assets/menuicon.svg"
    import notification from "assets/notification.svg"
    import closeicon from "assets/close.svg"
    import axios from 'axios'
    import arearest from './arearest'
    import {dataBus} from './static/assets/js/custom.js';
    export default {
        data (){
            return {
                notificationicon: notification,
                menuico: menuicon,
                close: closeicon,
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