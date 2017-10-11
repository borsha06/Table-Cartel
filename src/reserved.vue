<template>
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="40px" class="header_left_icon"><i class="fa fa-bars" aria-hidden="true"></i></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="40px" class="header_right_icon"><i class="fa fa-bell" aria-hidden="true"></i></ons-col>
            </ons-row>
        </div>   
        <div class="reserve_background reserved_side">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="left_side_reserved_heading">
                        <h2>Reservations</h2>
                        <p>You are almost there!</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="reserved_cross_icon">
                        <i @click="" class="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <div class="reserve_top_button_text">                        
                        <p>You want us to reserve you seats at</p>
                    </div>
                </ons-col>
                <ons-col width="100%">
                    <div class="reserve_top_button">
                       	 <button class="button button--light">Vapianos italian's gourment</button>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_second_button_area">
                <ons-col width="100%">
                    <div class="reserve_top_second_button_text">                        
                        <p>It will be table/s for</p>
                    </div>
                </ons-col>
                <ons-col width="100%">
                    <div class="reserve_second_top_button">
                       	 <button class="button button--light">Headcount</button>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_third_button_area">
                <ons-col width="100%">
                    <div class="reserve_top_third_button_text">                        
                        <p>It will be joining them on</p>
                    </div>
                </ons-col>
                <ons-col width="100%">
                    <div class="reserve_third_top_button">
                       	 <button class="button button--light">DD/MM</button>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="reserve_button_area">
                <ons-col width="100%">
                    <div class="reserve_button_text">                        
                      <button class="button button--light">Reserve</button>
                    </div>
                </ons-col>
            </ons-row>

        </div>

        <!--Footer Carousel-->
        <div class="cuisine_footer_carousel">
            <ons-row class="reserved_carousel_heading">
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
        </div>
        <!--Footer Carousel-->





    </v-ons-page>
</template>



<script>
    import carousel from "assets/carousel.jpg"
    import axios from 'axios'
    import { dataBus } from './main.js';
    export default {
        data () {
            return {
                footercarousel: carousel,
                restaurant: {},
                food: dataBus.$data,
                loading:false,
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