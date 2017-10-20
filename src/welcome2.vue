<template>
    <v-ons-page id="gray_bg">
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"><img :src="menuico" alt="" /></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="50px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
            </ons-row>
        </div>
        <div class="hello_jorge_bg">
            <ons-row align="" class="hello_jorge_headding_area">
                <ons-col width="100%">
                    <div class="hello_jorge_heading">
                        <h2>Hello {{username}}!</h2>
                        <p>Today is good day to<br /> eat out. Why not plan something?</p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="" class="hello_jorge_button_area">
                <ons-col width="100%">
                    <div class="hello_jorge_button">
                        <button class="button button--light nay_button" >Nay!</button>
                        <button class="button button--light yay_button" @click="yaypage">Yay!</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>

        <!--Footer Carousel-->
        <div class="cuisine_footer_carousel" id="hellojorge-area">
            <ons-row class="cuisine_footer_carousel" id="hellojorge-area">
                <ons-row class="hellojorge_carousel_heading">
                    <p>Today's Special</p>
                </ons-row>
                <ons-carousel fullscreen swipeable auto-scroll overscrollable id="carousel">
                    <ons-carousel-item v-for="foo in food['foods']"  style="background-color: #085078;">
                        <div class="image_footer">
                            <a href="" v-if="foo.img"><img v-bind:src="foo.img" /></a>
                            <a href="" v-else><img :src="footercarousel" /></a>
                            <!--<img :src="footercarousel" alt="" />-->
                            <div class="image_overlay_content">
                                <h4 v-html="foo.short_title"></h4>
                                <p v-html="foo.short_content"> </p>
                            </div>
                        </div>
                    </ons-carousel-item>
                </ons-carousel>
            </ons-row>
        </div>
        <!--Footer Carousel-->
        <div class="hello_jorge_footer_option">
            <ons-row align="" class="hello_jorge_footer_area">
                <ons-col width="25%">
                    <div class="left_logo">
                        <img :src="footerlogo" alt="" />
                    </div>
                </ons-col>
                <ons-col width="45%">
                    <div class="discover_button">
                        <button class="button button--light" @click="yaypage">Discover</button>
                    </div>
                </ons-col>
                <ons-col width="25%">
                    <div class="reserve_button">
                        <button class="button button--light reserve_button_customize" @click="reservedpage">Reserve</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>

    </v-ons-page>
</template>



<script>
    import carousel from "assets/carousel.jpg"
    import menuicon from "assets/menuicon.svg"
    import footerlogo from "assets/apple-touch-icon.png"
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import VModal from 'vue-js-modal';
    import {dataBus} from './static/assets/js/custom.js';
    import yay from './yay'
    import nya from './nya'
    import reserved from './reserved2'
    export default {
        data () {
            return {
                footerlogo: footerlogo,
                menuico: menuicon,
                footercarousel: carousel,
                notificationicon: notification,
                restaurant: {},
                food: dataBus.$data,
                username: this.$session.get('user')
            }
        },
        created () {
            this.$session.start()
            console.log(this.$session.get('user'));

        },
        methods:{
            yaypage () {
                this.pageStack.push(yay)
            },
            nyapage () {
                this.pageStack.push(nya)
            },
            reservedpage () {
                this.pageStack.push(reserved)
            },
        },
        props: ['pageStack']
    }
</script>
<style scoped>


</style>