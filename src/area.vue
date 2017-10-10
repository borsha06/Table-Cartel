<template>
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="40px" class="header_left_icon"><i class="fa fa-bars" aria-hidden="true"></i></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="40px" class="header_right_icon"><i class="fa fa-bell" aria-hidden="true"></i></ons-col>
            </ons-row>
        </div>
        <div class="background">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="left_side_search_heading">
                        <h2>Search by area</h2>
                        <p>Here is the list of cuisinnes on offer!</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="cross_icon">
                        <i @click="pop" class="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="left_side_button" v-for="restarea in restaurantarea">
                        <button class="button button--light button_customize" @click="rest_list(restarea.term_id)">{{ restarea.name }}</button>
                    </div>
                </ons-col>
            </ons-row>
        </div>




    </v-ons-page>
</template>

<script>
    import axios from 'axios'
    import area_rest from './area_rest'
    export default {
        data () {
            return {
                restaurantarea: {}
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
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/all-terms?term=location')
                    .then((resp) => {
                        this.restaurantarea = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            rest_list(id) {
                this.pageStack.push({
                    extends: area_rest,
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
            push() {
                this.pageStack.push(cuisine_rest)
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