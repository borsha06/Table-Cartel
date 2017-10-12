<template>
    <v-ons-page id="gray_bg">
        <div class="login_bg">
            <ons-row align="center" class="logo-area">
                <ons-col width="100%">
                    <div class="logos">                        
                        <img :src="logo" alt="" />
                    </div>
                </ons-col>
            </ons-row>
            <form>
            <ons-row align="center" class="loginarea">
                <ons-col width="100%">
                    <div class="login_form">                        
                        <input type="text" class="text-input form_name" placeholder="Jorge Sims" value="" />
                        <input type="password" class="text-input form_pass" placeholder="Password" value="" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="facebook_connect">
                <ons-col width="100%">
                    <div class="facebook_button">                        
                        <button class="button button--light">facebook</button>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="connect">
                <ons-col width="100%">
                    <div class="connect_button">                        
                        <button class="button button--light"><img :src="connect" alt="" /></button>
                    </div>
                </ons-col>
            </ons-row>
        </form>
    </div>



    </v-ons-page>
</template>



<script>
    import carousel from "assets/carousel.jpg"
    import connect from "assets/connect.png"
    import logo from "assets/logo.png"
    import axios from 'axios'
    import { dataBus } from './main.js';
    export default {
        data () {
            return {
                connect: connect,
                logo: logo,
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
.login_bg{
    background:#A2A2A2 !important;
    height:100%;

}
::-webkit-placeholder{
color:#444;
font-family: 'Nunito', sans-serif;


}
::-moz-placeholder{
color:#444;
font-family: 'Nunito', sans-serif;


}
::placeholder{
color:#444;
font-family: 'Nunito', sans-serif;
font-weight:bold;


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