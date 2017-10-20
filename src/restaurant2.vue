<template>
    <v-ons-page id="gray_bg">
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
            <div class="background_white" id="bg-restaurant">
                <ons-row align="left">
                    <ons-col width="80%">
                        <div class="vapianos_left_side_heading">
                            <h2 v-html="rest.post_title"></h2>
                            <p>All you need to know</p>
                        </div>
                    </ons-col>
                    <ons-col width="20%">
                        <div class="vapianos_cross_icon">
                             <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                             <img @click="pop" :src="close" alt="close" />
                        </div>
                    </ons-col>
                </ons-row>

            </div>
            <div class="vapianos_order_load_wallet">
                <ons-row align="left">
                    <ons-col width="70%">
                        <div class="vapianos_left_side_wallet">
                            <ons-row>
                                <ons-col width="50%">
                                    <div class="load_wallet">
                                        <strong>Load on wallet</strong>
                                    </div>
                                    <div class="wallet_progressr">
                                        <div class="progress-bar">
                                          <div class="progress-bar__primary" style="width: 60%"></div>

                                        </div>
                                    </div>
                                </ons-col>
                                <ons-col width="50%">
                                    <div class="cusine_type">
                                        <strong>Cuisine Type</strong>
                                        <p  class="cuisine" v-for="item in rest.cuisine_type" >
                                            {{ item.name }}
                                        </p>
                                    </div>
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col width="100%">
                                    <div class="vapianos_address">
                                        <strong>Address</strong>
                                        <p>{{rest.restaurant_address}}</p>
                                    </div>
                                </ons-col>
                            </ons-row>
                        </div>
                    </ons-col>
                    <ons-col align="right" width="30%">
                        <div class="vapianos_right_side_rating">
                            <div class="card">
                                <div class="card__content card_text">
                                    <span>{{ rest.restaurant_rating}}</span>
                                    <p>Rating</p>
                                </div>
                            </div>
                        </div>
                        <div class="reserv_button">
                            <button class="button button--light reserv_modified" @click="reservedpage(rest.ID,rest.post_title)">Reserve</button>
                        </div>
                    </ons-col>
                </ons-row>

            </div>
            <div class="vapianos_menu_button">
                <ons-row align="left">
                    <ons-col width="25%">

                    </ons-col>
                    <ons-col width="50%">
                        <div class="vapianos_menu_button_text">
                            <button class="button button--light" @click="menupage">Menu</button>
                        </div>
                    </ons-col>
                    <ons-col width="25%">

                    </ons-col>
                </ons-row>
            </div>
            <div class="menu_bottom_item">
                <ons-row align="left" class="margin-left">
                    <ons-col width="50%">
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="phonecallicon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Phone</strong>
                                <p>{{rest.contact_number}}</p>
                            </div>
                        </ons-row>
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="paymenticon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Price</strong>
                                <p class="price_uppercase">{{rest.price_range}}</p>
                            </div>
                        </ons-row>
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="menuicon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Cuisine</strong>
                                <p  class="cuisine" v-for="item in rest.cuisine_type" >
                                    {{ item.name }}
                                </p>
                            </div>
                        </ons-row>
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="alarmicon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Hours</strong>
                                <p class="hours_capitalize">{{rest.restaurant_hours}}</p>
                            </div>
                        </ons-row>
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="parkingicon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Parking</strong>
                                <p class="parking_capitalize">{{rest.parking}}</p>
                            </div>
                        </ons-row>
                        <ons-row align="left" class="vapianos_icon_row">
                            <div class="icon">
                                <img :src="tieicon" alt="" />
                            </div>
                            <div class="icon_text">
                                <strong>Dresscode</strong>
                                <p class="parking_dresscode">{{rest.dress_code}}</p>
                            </div>
                        </ons-row>
                    </ons-col>
                    <ons-col width="50%">
                        <ons-row class="vapianos_icon_right_des">
                            <div class="icon">
                                <img :src="bookicon" alt="" />
                            </div>
                            <div class="icon_text another_icon_text">
                                <strong>Description</strong>
                                <p v-html="rest.post_content"></p>
                               
                            </div>
                        </ons-row>
                    </ons-col>
                </ons-row>
            </div>
        </div>




    </v-ons-page>
</template>

<script>
    import parking from "assets/parking.svg"
    import menuicon from "assets/menuicon.svg"
    import book from "assets/book.svg"
    import tie from "assets/tie.svg"    
    import menu from "assets/menu.svg"
    import notification from "assets/notification.svg"
    import closeicon from "assets/close.svg"
    import alarm from "assets/alarm-clock.svg"
    import payment from "assets/payment.svg"
    import phonecall from "assets/phone-call.svg"
    import axios from 'axios'
    import cuisine from './cuisine'
    import area from './area'
    import reserved from './reserved'
    import menus from './menu'
    export default {
        data () {
            return {
                bookicon: book,
                tieicon: tie,                
                phonecallicon: phonecall,
                menuicon: menu,
                alarmicon: alarm,
                notificationicon: notification,
                menuico: menuicon,
                close: closeicon,
                paymenticon: payment,
                parkingicon: parking,
                restauranttexo: {},
                rest: {},
                loading: false,
                pageloading: false
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
                this.loading = true
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.data.id + '/')
                    .then((resp) => {
                        this.rest = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            reservedpage (id,name) {
//                this.pageStack.push(reserved)
                this.pageStack.push({
                    extends: reserved,
                    data() {
                        return {
                            data: {'id': id,'name':name}
                        }
                    }
                });
            },
            menupage() {
                this.pageStack.push(menus)
            },
            pop() {
                this.pageStack.pop();
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
        margin-top: 300px;
        margin-bottom: 100px;
    }
</style>