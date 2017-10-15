<template>
  <v-ons-page>
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
            <h2>Listings for {{this.data.name}}</h2>
            <p>Select place you want to go!</p>
          </div>
        </ons-col>
        <ons-col width="20%">
          <div class="cross_icon">
           <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
            <img @click="pop" :src="close" alt="close" />
          </div>
        </ons-col>
      </ons-row>
      <ons-row align="">
        <ons-col width="100%">
          <div class="left_side_button" v-for="rest in restaurant">
            <button class="button button--light button_customize" @click="restaurants(rest.ID)">{{ rest.post_title }}</button>
          </div>
        </ons-col>
      </ons-row>
      <div v-if="loading" class="loading" v-cloak>
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <!--<span>Loading...</span>-->
      </div>



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

    </div>



  </v-ons-page>
</template>

<script>
    import Vue from 'vue'
    import carousel from "assets/carousel.jpg"
    import menuicon from "assets/menuicon.svg"
    import closeicon from "assets/close.svg"
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import restaurant2 from './restaurant2'
    import {dataBus} from './static/assets/js/custom.js';
    export default {
        data () {
            return {
                footercarousel: carousel,
                menuico: menuicon,
                close: closeicon,
                notificationicon: notification,
                restaurant: {},
                food: dataBus.$data,
                loading:true,
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
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/' + this.data.id + '/')
                    .then((resp) => {
                        this.restaurant = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            restaurants (id) {
                this.pageStack.push({
                    extends: restaurant2,
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