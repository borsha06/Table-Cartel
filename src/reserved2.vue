<template>
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"><img :src="menuico" alt="" /></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="50px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
            </ons-row>
        </div>
        <div v-if="loading" class="loading" v-cloak>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <!--<span>Loading...</span>-->
        </div>
        <div v-show="pageloading">
            <form v-on:submit.prevent="permit">
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
                                <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                                <img @click="pop" :src="close" alt="close" />
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
                                <!--<input type="text" class="text-input" v-model="restaurant" placeholder="Vapianos italian's gourment" value="">-->
                                <!--<p class="button button&#45;&#45;light">{{this.data.name}}</p>-->
                                <select v-model="restaurant_id" required="">
                                    <option id="select_align" v-for="item in restaurants" v-bind:value="item.ID">{{ item.post_title }}</option>
                                </select>
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
                                <input type="number" v-on:click="hidefooter" class="text-input" v-model="people" placeholder="Headcount" required value="" >
                                <!-- <button class="button button--light">Headcount</button> -->
                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="top_third_button_area">
                        <ons-col width="100%">
                            <div class="reserve_top_third_button_text">
                                <p>It will be joining them on</p>
                            </div>
                        </ons-col>
                        <ons-col width="35%">
                            <div class="reserve_third_top_button" @click="showfooter">
                                <!--<input type="date" class="text-input" placeholder="Headcount" value="">-->
                                <date-picker :date="date"  :option="option"  :limit="limit" class="datepicker text-input"  ></date-picker>
                                <!-- <button class="button button--light">DD/MM</button> -->
                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="reserve_button_area">
                        <ons-col width="100%">
                            <div class="reserve_button_text">
                                <button class="button button--light" type="submit">Reserve</button>
                            </div>
                        </ons-col>
                    </ons-row>
                    <modal name="permit-modal"
                           transition="nice-modal-fade"
                           :min-width="200"
                           :min-height="200"
                           :pivot-y="0.60"
                           width="60%"
                           height="auto"
                           :delay="100"
                    >
                        <div class="example-modal-content">
                            <div class="dialogs"> <font color="green"> <center>Are You Sure ???</center> </font></div>
                            <button class="yes_button" @click="onSubmit">YES</button>
                        </div>
                    </modal>
                    <modal name="success-modal"
                           transition="nice-modal-fade"
                           :min-width="200"
                           :min-height="200"
                           :pivot-y="0.60"
                           width="60%"
                           height="auto"
                           :delay="100"
                    >
                        <div class="example-modal-content">
                            <div class="dialogs"> <font color="green"> <center>WOW!! Bbooking Success</center> </font></div>
                            <button class="yes_button" @click="pop">OK</button>
                        </div>
                    </modal>
                    <modal name="error-modal"
                           transition="nice-modal-fade"
                           :min-width="200"
                           :min-height="200"
                           :pivot-y="0.60"
                           width="60%"
                           height="auto"
                           :delay="100"
                    >
                        <div class="example-modal-content errors">
                            <font color="#8b0000"> <center>Booking Time is Empty.</center> </font>
                        </div>
                    </modal>
                    <modal name="error2-modal"
                           transition="nice-modal-fade"
                           :min-width="200"
                           :min-height="200"
                           :pivot-y="0.60"
                           width="60%"
                           height="auto"
                           :delay="100"
                    >
                        <div class="example-modal-content errors">
                            <font color="#8b0000"> <center>Tablebooking Failed</center> </font>
                        </div>
                    </modal>
                    <modal name="loading-modal"
                           transition="nice-modal-fade"
                           :min-width="200"
                           :min-height="200"
                           :pivot-y="0.45"
                           width="60%"
                           height="auto"
                           :delay="100"
                           classes="false"
                    >
                        <div v-if="loading" class="loadingp">
                            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                            <!--<span>Loading...</span>-->
                        </div>
                    </modal>
                </div>
            </form>


            <!--Footer Carousel-->
            <div v-show="typing"  class="cuisine_footer_carousel">
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
        </div>




    </v-ons-page>
</template>



<script>
    import Vue from 'vue';
    import carousel from "assets/carousel.jpg"
    import menuicon from "assets/menuicon.svg"
    import notification from "assets/notification.svg"
    import closeicon from "assets/close.svg"
    import axios from 'axios'
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    import {dataBus} from './static/assets/js/custom.js';
    import myDatepicker from 'vue-datepicker';

    Vue.use(VModal)
    export default {
        data () {
            return {
                typing: true,
                rest: '',
                restaurant_id: '',
                restaurant: '',
                people: '',
                mobile: '',
                email: '',
                order_time: '',
                confirm:'Yes',
                footercarousel: carousel,
                menuico: menuicon,
                notificationicon: notification,
                close: closeicon,
                restaurants: {},
                food: dataBus.$data,
                loading:false,
                pageloading: false,
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'MM-DD HH:mm',
                    placeholder: 'MM-DD HH:mm',
                    required: true,
                },
                limit: [{},
                    {
                        type: 'fromto',
                        from: new Date(new Date() -1 * 86400000),
                        to: '2040-02-20'
                    }],
                date: {
                    time: ''
                },
                required: true
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods:{
            fetchData () {
                this.loading = true
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/0')
                    .then((resp) => {
                        this.restaurants = resp.data
                        this.loading = false
                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            onSubmit: function () {
                this.loading= true
                this.$modal.hide('permit-modal')
                this.$modal.show('loading-modal')
                if(this.date.time) {
                    axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.restaurant_id + '/')
                        .then((resp) => {
                            this.rest = resp.data
                            console.log('--------------------------------')
                            console.log(resp.data)
                            $.ajax({
                                method: "POST",
                                url: 'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/orders',
                                data: {
                                    restaurant_id: this.restaurant_id,
                                    title: 'Riaydh',
//                            mobile: this.mobile,
//                            email: this.email,
                                    restaurant: this.rest.post_title,
                                    table_number: this.people,
                                    booking_time: this.date.time,
                                    confirm: this.confirm,
                                    username: 'itsd@dmin',
                                    password: 'itsd321#',
                                }
                            }).then((resp) => {
                                console.log(resp);
                                this.name= '';
                                this.mobile= '';
                                this.email= '';
                                this.table_number= '';
                                this.date.time = '';
                                this.loading= false
                                this.$modal.hide('loading-modal');
                                this.$modal.show('success-modal');
                            })
                                .catch((err) => {
                                    console.log(err)
                                    this.$modal.show('error2-modal');
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                }
                else{
                    console.log( 'empty' );
//                    this.$modal.show('error-modal');
                }
            },
            permit(){
                if(this.date.time) {
                    this.$modal.show('permit-modal');
                }
                else{
                    console.log( 'empty' );
                    this.$modal.show('error-modal');
                }
            },
            hidefooter (){
                this.typing = false
            },
            showfooter (){
                this.typing = true
            },
            pop () {
                this.pageStack.pop()
            }
        },
        components: {
            'date-picker': myDatepicker,
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .text-input:invalid {
        border: none;
        background-color: white;
        color: #1f1f21;
    }
::placeholder{
    color:black;
    text-transform: uppercase;
    font-size:10px;
    /*font-weight: bold;*/
    font-family: 'Nunito', sans-serif;
    padding-top:-3px;
}
    .button{
        float:left;
    }
    .loading{
        text-align: center;
        margin-top: 300px;
        margin-bottom: 100px;
    }
    .dialogs{
        margin-top: 6px;
    }
    .errors{
        margin: 6px;
    }
    .loadingp{
        text-align: center;
        /*color: white;*/
        /*margin-top: 250px;*/
        /*margin-bottom: 150px;*/
    }
    .yes_button{
        background: black;
        border: 1px solid rgba(255, 255, 255, 0.86);
        color: #fff;
        padding: 4px 20px;
        width: 100%;
        margin-top: 8px

    }
    .v--modal-box>.v--modal{
        top:275px;
    }

</style>