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
            <ons-row align="right">
                <ons-col width="100%">
                    <div class="nay_cross_icon">
                        <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="close" alt="close" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="" class="hello_jorge_headding_area">
                <ons-col width="100%">
                    <div class="nay_heading">
                        <h2>uh-ohh :(</h2>
                        <p>Well since you all ready here why not check out some your wonderful content.There are a good read :)</p>
                    </div>
                </ons-col>
            </ons-row>
        </div>

        <!--Footer Carousel-->
        <div class="cuisine_footer_carousel" id="hellojorge-area">
            <ons-row class="nay_carousel_heading">
                <p>The TableCartel Chronicles</p>
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
        </div>
        <!--Footer Carousel-->

        <div class="hello_jorge_footer_option">
            <ons-row align="" class="hello_jorge_footer_area">
                <ons-col width="25%">
                    <div @click="welcomepage" class="left_logo">
                        <img  :src="footerlogo" alt="" />
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
    import closeicon from "assets/close.svg"
    import footerlogo from "assets/apple-touch-icon.png"
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import {dataBus} from './static/assets/js/custom.js';
    import yay from "./yay"
    import reserved from './reserved2'
    import welcome from './welcome2';
    export default {
        data () {
            return {
                footerlogo: footerlogo,
                menuico: menuicon,
                close: closeicon,
                notificationicon: notification,
                footercarousel: carousel,
                restaurant: {},
                food: dataBus.$data,
                loading:false,
            }
        },
        methods:{
            yaypage () {
                this.pageStack.push(yay)
            },
            reservedpage () {
                this.pageStack.push(reserved)
            },
            welcomepage () {
                this.pageStack.push(welcome)
            },
            pop () {
                this.pageStack.pop()
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .page--material__background{
        background:#A2A2A2 !important;

    }
    .button{
        float:left;
    }
    .loading{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
    }

</style>