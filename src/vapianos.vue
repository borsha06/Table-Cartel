<template>
    <v-ons-page id="gray_bg">
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="40px" class="header_left_icon"><i class="fa fa-bars" aria-hidden="true"></i></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="40px" class="header_right_icon"><img :src="notificationicon" alt="" /></ons-col>
            </ons-row>
        </div>
        <div class="background_white">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="vapianos_left_side_heading">
                        <h2>Vapiano's</h2>
                        <p>All you need to know</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="vapianos_cross_icon">
                        <i @click="pop" class="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                </ons-col>
            </ons-row>           

        </div>
        <div class="vapianos_order_load_wallet">
            <ons-row align="center">
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
                                    <p>Italian</p>
                                </div>
                            </ons-col>
                        </ons-row>
                        <ons-row>
                            <ons-col width="100%">
                                <div class="vapianos_address">
                                    <strong>Address</strong>
                                    <p>Road 12 Rangs Pearl Tower, Dhaka, 1213</p>
                                </div>
                            </ons-col>
                        </ons-row>
                    </div>
                </ons-col>
                <ons-col width="30%">
                    <div class="vapianos_right_side_rating">
                        <div class="card">
                            <div class="card__content card_text">
                                <span>4.3</span>
                                <p>Rating</p>
                            </div>
                        </div>
                    </div>
                    <div class="reserv_button">
                        <button class="button button--light">Reserve</button>
                    </div>
                </ons-col>
            </ons-row>           

        </div>
        <div class="vapianos_menu_button">
            <ons-row align="center">
                <ons-col width="25%">

                </ons-col>
                <ons-col width="50%">
                    <div class="vapianos_menu_button_text">
                        <button class="button button--light">Menu</button>
                    </div>
                </ons-col>
                <ons-col width="25%">

                </ons-col>
            </ons-row>
        </div>
        <div class="menu_bottom_item">
            <ons-row align="center" class="margin-left">
                <ons-col width="50%" class="vapianos_left_content">
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Phone</strong>
                            <p>+880 1700 000 00</p>
                        </div>
                    </ons-row>
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Price</strong>
                            <p>BDT 180-5.500</p>
                        </div>
                    </ons-row>
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Cuisine</strong>
                            <p>Italian</p>
                        </div>
                    </ons-row>
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Hours</strong>
                            <p>Sun-Thu 12-9pm</p>
                            <p>Fri-Sat 7-10am</p>
                        </div>
                    </ons-row>
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Parking</strong>
                            <p>Roadside</p>
                        </div>
                    </ons-row>
                    <ons-row align="left" class="vapianos_icon_row">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Dresscode</strong>
                            <p>Casual</p>
                        </div>
                    </ons-row>
                </ons-col><!-- 
                <ons-col width="50%">
                    <ons-row class="vapianos_icon_right_des">
                        <div class="icon">
                            <img :src="phone" alt="" />
                        </div>
                        <div class="icon_text">
                            <strong>Description</strong>                 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        </div>
                    </ons-row>
                </ons-col> -->
            </ons-row>
        </div>





    </v-ons-page>
</template>

<script>
    import phone from "assets/phone-call.svg"
    import notification from "assets/notification.svg"
    import axios from 'axios'
    import cuisine from './cuisine'
    import area from './area'
    export default {
        data () {
            return {
                phone: phone,
                notificationicon: notification,
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