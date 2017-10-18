<template>
    <v-ons-page id="gray_bg">
        <div class="login_bg">
            <ons-row align="left" class="menu_header_area">
                <ons-col width="85%">
                    <div class="menu_header">                        
                       <h2>Menu</h2>
                       <p>Select any of the service below</p>
                       <strong>Today 30th of sept 2017</strong>
                    </div>
                </ons-col>
                <ons-col width="15%">
                    <div @click="pop" class="back_icon">
                       <img  :src="backarrowlogo" alt="icon" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="left" class="menu_button_area">
                <ons-col width="100%">
                    <div class="menu_button">
                        <button class="button button--light">Discover</button>
                        <button class="button button--light">Benefits</button>
                        <button class="button button--light">Ingredients</button>
                        <button class="button button--light">Recpies</button>
                        <button class="button button--light">Mastercalss</button>
                        <button class="button button--light">Marketplace</button>
                    </div>
                </ons-col>
            </ons-row>
            <div class="menu_footer_fixed">
            <ons-row align="left" class="menu_connect_area">
                <ons-col width="100%">
                    <div class="menu_connect_button">
                        <button class="button button--light"><img :src="connect" alt="" /></button>
                    </div>
                </ons-col>
            </ons-row>
            <div class="card card--material">
                <div class="card__content card--material__content">
                        <ons-row align="center" class="menu_footer_area">
                            <ons-col width="15%">
                                <div class="menu_footer_left_icon">
                                   <img :src="leftmenuicon" alt="" />
                                </div>
                            </ons-col>
                            <ons-col width="35%">
                                <div class="menu_footer_notifications">
                                    <p>Notification<br /> & Updates</p>
                                </div>
                            </ons-col>
                            <ons-col width="35%">
                                <div class="menu_footer_settings">
                                   <p>Settings & <br />Preferences</p>
                                </div>
                            </ons-col>
                            <ons-col width="15%">
                                <div class="menu_footer_right_icon">
                                  <img :src="rightmenuicon" alt="" />
                                </div>
                            </ons-col>
                        </ons-row>
                        <ons-row align="center" class="menu_footer_row">
                            <ons-col width="100%">
                                <div class="menu_footer_row_black">
                                   
                                </div>
                            </ons-col>
                        </ons-row>
                    </div>
              </div>
          </div>

        </div>



    </v-ons-page>
</template>



<script>
    import leftmenuicon from "assets/account.svg"
    import notification from "assets/notification.svg"
    import rightmenuicon from "assets/settings.svg"
    import carousel from "assets/carousel.jpg"
    import backarrow from "assets/menuback.svg"
    import connect from "assets/connect.png"
    import logo from "assets/logo.png"
    import axios from 'axios'
    export default {
        data () {
            return {
                notificationicon: notification,
                leftmenuicon: leftmenuicon,
                rightmenuicon: rightmenuicon,
                backarrowlogo: backarrow,
                connect: connect,
                logo: logo,
                footercarousel: carousel,
                restaurant: {},
                loading:false,
            }
        },
        methods: {
            pop() {
                this.pageStack.pop();
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
.login_bg{
    background:#f3f5f7 !important;
    height:100%;

}

::placeholder{
color:#444;
font-family: 'Nunito', sans-serif;
font-weight:bold;


}
    .button{
        float:left;
    }
   .card--material{
            border-radius: 12px;
    }

</style>