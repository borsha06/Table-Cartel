<template>
    <v-ons-page id="gray_bg">
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
                        <h2>Woohoo! Let's plan</h2>
                        <!--<p>Today is good day to eat out.Why not plan somethink? !</p>-->
                        <p>Do you have a cuisine in mind or you want to choose by area? better still you know the restaurant you visit </p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="cross_icon">
                        <i class="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="left_side_button">
                        <button class="button button--light button_customize" @click="cuisine">Cuisine</button>
                        <button class="button button--light button_customize" @click="area">Area</button>
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
                    <ons-carousel-item style="background-color: #085078;">
                      <div class="image_footer">
                            <img :src="footercarousel" alt="" />
                            <div class="image_overlay_content">
                                <h4>Lorem Ipsum Doller sit</h4>
                                <p>Lorem ipsum doller site amet.Lorem ipsum doller site amet. </p>
                            </div>
                      </div>
                    </ons-carousel-item>
                    <ons-carousel-item style="background-color: #085078;">
                      <div class="image_footer">
                            <img :src="footercarousel" alt="" />
                            <div class="image_overlay_content">
                                <h4>Lorem Ipsum Doller sit</h4>
                                <p>Lorem ipsum doller site amet.Lorem ipsum doller site amet. </p>
                            </div>
                      </div>
                    </ons-carousel-item>
                    <ons-carousel-item style="background-color: #085078;">
                      <div class="image_footer">
                            <img :src="footercarousel" alt="" />
                            <div class="image_overlay_content">
                                <h4>Lorem Ipsum Doller sit</h4>
                                <p>Lorem ipsum doller site amet.Lorem ipsum doller site amet. </p>
                            </div>
                      </div>
                    </ons-carousel-item>
                    <ons-carousel-item style="background-color: #085078;">
                      <div class="image_footer">
                            <img :src="footercarousel" alt="" />
                            <div class="image_overlay_content">
                                <h4>Lorem Ipsum Doller sit</h4>
                                <p>Lorem ipsum doller site amet.Lorem ipsum doller site amet. </p>
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
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import cuisine from './cuisine'
    import area from './area'
    export default {
        data () {
            return {
                notificationicon: notification,
                footercarousel: carousel,
                restauranttexo: {}
            }
        },
        methods: {
            pop(){
                this.pageStack.pop();
            },
            area() {
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