<template>
    <v-ons-page id="gray_bg">
            <ons-row align="center" class="logo-area">
                <ons-col width="100%">
                    <div class="logos">                        
                        <img :src="logo" alt="" />
                    </div>
                </ons-col>
            </ons-row>





    </v-ons-page>
</template>



<script>
    import carousel from "assets/carousel.jpg"
    import logo from "assets/logo.png"
    import axios from 'axios'
    import { dataBus } from './main.js';
    export default {
        data () {
            return {
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
.page--material__background{
    background:#A2A2A2 !important;

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