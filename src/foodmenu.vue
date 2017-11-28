<template>
    <v-ons-page id="">
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
                    <div class="food_menu_header_left">
                        <h2>Vapiano's</h2>
                        <p>Food menu</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="cross_icon">
                       <!--  <i  class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="close" alt="close" >
                    </div>
                </ons-col>
            </ons-row>

            <div v-for="texo in restaurantfood" class="food_menu_top">
                <ons-row align="left" width="100%" class="food_menu_bg">
                    <ons-col width="100%">
                        <div class="">                        
                           <div style="height: 200px; padding: 1px 0 0 0;">
                              <div class="card menu_card_bg">
                                <h2 class="card__title food_menu_title" align="center">{{texo.name}}</h2>

                                <div class="single_food_menu_items_desc">
                                    <ons-row>
                                        <ons-col width="85%" align="left">
                                            <div class="card__content">
                                                <h4 class="card__title single_food_menu_title">
                                                    Le paysan
                                                </h4>
                                                <p class="single_food_menu_para">Smoked turkey, Brie & apple chutney</p>
                                            </div>                                     
                                        </ons-col>
                                        <ons-col width="15%" align="left">
                                            <h4 class="food_menu_dollar">$14</h4>
                                        </ons-col>
                                    </ons-row>
                                </div>
                                <div class="single_food_menu_items_desc">
                                    <ons-row>
                                        <ons-col width="85%" align="left">
                                            <div class="card__content">
                                                <h4 class="card__title single_food_menu_title">
                                                    Soho Mediterranean sandwich
                                                </h4>
                                                <p class="single_food_menu_para">Hummus, grilled vegetables & halloumi cheese</p>
                                            </div>                                     
                                        </ons-col>
                                        <ons-col width="15%" align="left">
                                            <h4 class="food_menu_dollar">$14</h4>
                                        </ons-col>
                                    </ons-row>
                                </div>


                              </div>
                            </div>
                        </div>
                    </ons-col>

                </ons-row>
            </div>
            

        </div>










    </v-ons-page>
</template>

<script>
    import menuicon from "assets/menuicon.svg"
    import notification from "assets/notification.svg"
    import closeicon from "assets/close.svg"
    import axios from 'axios'
    export default {
        name: 'area',
        data (){
            return {
                notificationicon: notification,
                menuico: menuicon,
                close: closeicon,
                restaurantfood: {},
                loading:false,
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
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-food/' + this.data.id +  '/')
                    .then((resp) => {
                        this.restaurantfood = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                    })
                    .catch((err) => {
//                        console.log(err)
                    })
            },
            pop(){
                this.pageStack.pop();
            },
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .loading{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
        color: #009688;
        font-size: 13px;
    }

</style>