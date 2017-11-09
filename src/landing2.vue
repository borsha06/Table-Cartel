<template>
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"><img :src="menuicon" alt="" /></ons-col>
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
                        <button class="button button--light nay_button" @click="nyapage">Nay</button>
                        <button class="button button--light yay_button" @click="yaypage">Yay!</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>

        Footer Carousel

        <div class="cuisine_footer_carousel" id="hellojorge-area">

            <ons-row class="cuisine_footer_carousel" id="hellojorge-area">
                    <ons-row class="hellojorge_carousel_heading">
                        <p>Today's Special</p>
                    </ons-row>

                <ons-carousel fullscreen swipeable auto-scroll overscrollable id="carousel">

                    <ons-carousel-item v-for="(item,index) in food['foods']"  style="background-color: #085078;">
                        <div class="image_footer">
                            <a href="" v-if="item.img"><img v-bind:src="item.img" /></a>
                            <a href="" v-else>
                                <div v-if="index==0">
                                    <img :src="footercarousel" />
                                </div>
                                <div v-else-if="index==1">
                                    <img :src="footercarousel2" />
                                </div>
                                <div v-else-if="index==2">
                                    <img :src="footercarousel3" />
                                </div>
                                <div v-else-if="index==3">
                                    <img :src="footercarousel4" />
                                </div>
                                <div v-else-if="index==4">
                                    <img :src="footercarousel5" />
                                </div>
                                <div v-else-if="index==5">
                                    <img :src="footercarousel6" />
                                </div>
                                <div v-else-if="index==6">
                                    <img :src="footercarousel7" />
                                </div>
                                <div v-else-if="index==7">
                                    <img :src="footercarousel8" />
                                </div>
                                <div v-else-if="index==8">
                                    <img :src="footercarousel9" />
                                </div>
                                <div v-else>
                                    <img :src="footercarousel10" />
                                </div>
                            </a>
                            <!--<img :src="footercarousel" alt="" />-->
                            <div class="image_overlay_content">
                                <h4 v-html="item.short_title"></h4>
                                <p v-html="item.short_content"> </p>
                            </div>
                        </div>
                    </ons-carousel-item>

                </ons-carousel>
            </ons-row>
        </div>
        Footer Carousel
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
    import menuicons from "assets/menuicon.svg"
    import carousel from "assets/carousel.jpg"
    import carousel2 from "assets/carousel2.jpg"
    import carousel3 from "assets/carousel3.jpg"
    import carousel4 from "assets/carousel4.jpg"
    import carousel5 from "assets/carousel5.jpg"
    import carousel6 from "assets/carousel6.jpg"
    import carousel7 from "assets/carousel7.jpg"
    import carousel8 from "assets/carousel8.jpg"
    import carousel9 from "assets/carousel9.jpg"
    import carousel10 from "assets/carousel10.jpg"
    import footerlogos from "assets/appleicon.png"
    import notification from "assets/notification.svg"
    import VModal from 'vue-js-modal';
    import {dataBus} from './static/assets/js/custom.js';
    import yay from "./yay"
    import nya from "./nya"
    import reserved from './reserved2'
    export default {
        name: 'landing2',
        data () {
            return {
                menuicon: menuicons,
                footerlogo: footerlogos,
                footercarousel: carousel2,
                footercarousel2: carousel3,
                footercarousel3: carousel10,
                footercarousel4: carousel4,
                footercarousel5: carousel5,
                footercarousel6: carousel6,
                footercarousel7: carousel7,
                footercarousel8: carousel8,
                footercarousel9: carousel9,
                footercarousel10: carousel,
                notificationicon: notification,
                food: dataBus.$data,
                username: this.$session.get('last_name')
            }
        },
        created () {
            this.$session.start()

        },
        methods: {
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
