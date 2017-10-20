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
            <ons-row align="right">
                <ons-col width="100%">
                    <div class="cross_icon">
                        <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                            <img @click="pop" :src="close" alt="close" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center">
                <ons-col width="100%">
                    <div class="yah_side_search_heading">
                        <h2>Woohoo! Let's plan</h2>
                        <!--<p>Today is good day to eat out.Why not plan somethink? !</p>-->
                        <p>Do you have a cuisine in mind or you want to choose by area? better still you know the restaurant you visit </p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="left_side_button">
                        <button class="button button--light button_customize" @click="cuisine">Cuisine</button>
                        <button class="button button--light button_customize area_button_change" @click="area__a">Area</button>
                        <!--<h2 v-for="foo in food['foods']">{{foo.ID}}/10</h2>-->
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="i_know_button">
                        <button class="button button--light button_customize" >I know what i want</button>
                    </div>
                </ons-col>
            </ons-row>

        <!--Footer Carousel-->
         <div class="cuisine_footer_carousel">
            <ons-row class="carousel_heading">
                    <p>Today's Special</p>
                </ons-row>
            <ons-carousel fullscreen swipeable auto-scroll overscrollable id="carousel">

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
    import cuisine from './cuisine'
    import restaurant from './restaurant'
    import area from './area'
    import {dataBus} from './static/assets/js/custom.js';
    export default {
        data () {
            return {
                footercarousel: carousel,
                menuico: menuicon,
                notificationicon: notification,
                close: closeicon,
                restauranttexo: {},
                food: dataBus.$data
            }
        },
        methods: {
            hello (id) {
                this.pageStack.push({
                    extends: restaurant,
                    data() {
                        return {
                            data: {'id': id}
                        }
                    }
                });
            },
            pop(){
                this.pageStack.pop();
            },
            area__a() {
                this.pageStack.push(area)
            },
            cuisine() {
                this.pageStack.push(cuisine)
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .button{
        float:left;
    }

</style>