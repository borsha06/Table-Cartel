<template class="footer_show_hide">
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"><img :src="menuico" alt="" /></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="50px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
            </ons-row>
        </div>
        <div v-if="loadings" class="loadingrequest" v-cloak>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <!--<span>Loading...</span>-->
        </div>
        <!--<div v-show="pageloading">-->
            <form v-on:submit.prevent="permit">
                <div class="reserve_background reserved_side">
                    <ons-row align="center">
                        <ons-col width="80%">
                            <div class="left_side_reserved_heading">
                                <h2>Reservations</h2>
                                <p>You’re almost there!</p>
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
                                <p>You want us to reserve your seats at</p>
                            </div>
                        </ons-col>
                        <ons-col width="100%">
                            <div class="reserve_top_button">
                                <!--<input type="text" class="text-input" v-model="restaurant" placeholder="Vapianos italian's gourment" value="">-->
                                <!--<p class="button button&#45;&#45;light">{{this.data.name}}</p>-->
                                
                                <!--<select v-model="restaurant_id" required="">-->
                                    <!--<option id="select_align"  v-for="item in sortedArray" v-bind:value="item.ID">{{ item.post_title }}</option>-->
                                <!--</select>-->
                                <v-select  v-model="selected" onfocus="this.placeholder=''" placeholder="Search your restaurant" :on-search="getOptions"  :options="options"></v-select>

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
                                <input type="number" v-on:click="hidefooter"  class="text-input" v-model="people"  placeholder="Headcount" required  >
                                <!-- <button class="button button--light">Headcount</button> -->
                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="top_third_button_area">
                        <ons-col width="100%">
                            <div class="reserve_top_third_button_text">
                                <p>You will be joining them on</p>
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
                        <div v-if="loadings" class="loadingp">
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
            </div>
            <!--Footer Carousel-->
        <!--</div>-->




    </v-ons-page>
</template>



<script>
    import reservation from "assets/restaurant.svg"
    import Vue from 'vue';
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
    import menuicon from "assets/menuicon.svg"
    import notification from "assets/notification.svg"
    import closeicon from "assets/close.svg"
    import axios from 'axios'
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    import {dataBus} from './static/assets/js/custom.js';
    import myDatepicker from 'vue-datepicker';
    import swal from 'sweetalert'
    import vSelect from "vue-select"

    Vue.use(VModal)
    export default {
        name: 'reserved2',
        data () {
            return {
                id: false,
                options: [],
                selected: null,
                name: this.$session.get('user'),
                typing: true,
                rest: '',
                restaurant_id: '',
                restaurant: '',
                people: '',
                mobile: '',
                email: this.$session.get('email'),
                order_time: '',
                confirm:'No',
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
                menuico: menuicon,
                notificationicon: notification,
                close: closeicon,
                restaurants: [],
                food: dataBus.$data,
                loadings:false,
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
                    format: 'DD/MM/YYYY HH:mm',
                    placeholder: 'DD/MM',
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
//        created () {
//            this.fetchData();
//            this.$session.start()
//        },
//        watch: {
//            '$route': 'fetchData'
//        },
        methods:{
            getOptions(search, loading) {
                loading(true)
                this.$http.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/search/' + search + '/').then(resp => {
                    //console.log(JSON.stringify(resp.data))
                    //this.options = resp.data
                    this.restaurants = resp.data
                    console.log(this.restaurants)
                    this.options = []
                    var that = this;
                    this.restaurants.forEach(function(entrys) {
                        if(entrys.type == 'restaurant'){
                            if(that.options.length > 0){
                                console.log(that.options);
                                var thats = this;
                                that.id = false
                                that.options.forEach(function(entry){
                                    if(entrys.id != entry.id){
                                        that.id = true
                                    }
                                })
                                if(that.id == true){
                                    that.options.push(entrys)
                                    that.id = false
                                }

                            }
                            else{
                                that.options.push(entrys)
                            }
                            console.log(that.options)
                        }

                    });

                    loading(false)
                })
            },
//            fetchData () {
//                this.loadings = true
//                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/0')
//                    .then((resp) => {
//                         console.log(resp.data)
//                        this.restaurants = resp.data
//                        console.log(this.restaurants)
//                        this.loadings = false
//                        this.pageloading = true
//                    })
//                    .catch((err) => {
//                        console.log(err)
//                    });
//            },
            onSubmit: function () {
                this.loadings = true
                this.$modal.show('loading-modal')
                if(this.date.time) {
                    axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.selected.value + '/')
                        .then((resp) => {
                            this.rest = resp.data
                            console.log('--------------------------------')
                            console.log(resp.data)
                            $.ajax({
                                method: "POST",
                                url: 'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/orders',
                                data: {
                                    restaurant_id: this.selected.value,
                                    title: this.name,
                                    mobile: this.mobile,
                                    email: this.email,
                                    restaurant: this.rest.post_title,
                                    table_number: this.people,
                                    booking_time: this.date.time,
                                    confirm: this.confirm,
                                    username: 'itsd@dmin',
                                    password: 'itsd321#',
                                }
                            }).then((resp) => {
                                console.log(resp);
                                this.restaurant_id = ''
                                this.mobile= '';
                                this.people = '';
                                this.date.time = '';
                                this.loadings= false
                                this.$modal.hide('loading-modal');
                                //this.$modal.show('success-modal');
                                //alert('Reservation request submited.')
                                swal({
                                    title:"We are processing your request.",
                                    text: "We will notify ASAP!!",
                                    icon: reservation,
                                }).then((resp) => {
                                    for (this.i = 0; this.i <1; this.i++) {
                                        this.pageStack.pop()
                                    }
                                });

                            })
                                .catch((err) => {
                                    console.log(err)
                                    //this.$modal.show('error2-modal');
                                    this.$modal.hide('loading-modal');
                                    //alert('Reservation Failed')
                                    swal({
                                        title: "Oops!",
                                        text: "Reservation Failed",
                                        icon: "error",
                                    });
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                }
                else{
                    console.log( 'empty' );
//                    this.$modal.show('error-modal');
                    this.$modal.hide('loading-modal');
                    //alert('There is an error')
                    swal({
                        title: "Oops!",
                        text: "There is an error",
                        icon: "error",
                    });
                }
            },
            permit(){
                if(this.date.time) {
                    //this.$modal.show('permit-modal');
//                    var txt;
//                    this.mobile = prompt("Please enter your mobile number:", "");
//                    if (this.mobile == null || this.mobile == "") {
//                        txt = "User cancelled the prompt.";
//                    } else {
//                        if (confirm("Are you sure???") == true) {
//                            this.onSubmit();
//                        } else {
//                            txt = "You pressed Cancel!";
//                        }
//                    }
                    swal({
                        content: {
                            element: "input",
                            attributes: {
                                placeholder: "Type your mobile number",
                                type: "number",
                            },
                        },
                    }).then(mobile => {
                        var valueC = mobile
                        if (valueC != ""){
                            var bd_phone_no_regX = /^(?:\+?88)?0?1[15-9]\d{8}$/i;
                            if (bd_phone_no_regX.test(valueC)) {
                                valueC = '01' + valueC.substring(valueC.length - 9, valueC.length);
                                this.mobile = valueC;
                                swal({
                                    title: "Are you sure?",
                                    //text: "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "info",
                                    buttons: true,
                                    dangerMode: true,
                                }).then((response) => {
                                    if(response){
                                        this.onSubmit();
                                    }
                                    else{
                                        this.mobile= '';
                                        this.people = '';
                                        this.date.time = '';
                                        swal({
                                            title: "Oops",
                                            text: "You Cancel the reservation",
                                            icon: "info",
                                        })
                                    }
                                });
                            }
                            else{
                                swal({
                                    title: "Oops",
                                    text: "Not a mobile number",
                                    icon: "warning",
                                })
                            }
                        }
                        else{
                            swal({
                                   title: "Oops",
                                   text: "Mobile number is empty",
                                   icon: "warning",
                               })
                        }

                    })
                }
                else{
                    console.log( 'empty' );
                    //this.$modal.show('error-modal');
                    //alert('Time is empty')
                    swal({
                        title: "Oops!",
                        text: "Time is empty",
                        icon: "error",
                    });

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
            'v-select': vSelect,
        },
        computed: {
            sortedArray: function() {
                function compare(a, b) {
                    if (a.post_title < b.post_title)
                        return -1;
                    if (a.post_title > b.post_title)
                        return 1;
                    return 0;
                }

                return this.restaurants.sort(compare);
            }
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
    .loadingrequest{
        text-align: center;
        color: #009688;
        font-size: 13px;
        margin-top: 300px;
        margin-bottom: 100px;
    }

    .loadingp{
        text-align: center;
        color: #009688;
        font-size: 13px;
        /*color: white;*/
        /*margin-top: 250px;*/
        /*margin-bottom: 150px;*/
    }

    .v--modal-box>.v--modal{
        top:275px;
    }











</style>