<template>
    <v-ons-page>
        <div class="header_top">
            <ons-row align="top" width="100%">
                <ons-col width="50px" class="header_left_icon"></ons-col>
                <ons-col id="table-cartel-heading">Tablecartel.com</ons-col>
                <ons-col width="50px" class="header_right_icon"></ons-col>
            </ons-row>
        </div>
        <div class="reserve_background reserved_side">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="left_side_reserved_heading">
                        <h2>Registration</h2>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="reserved_cross_icon">
                        <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="close" alt="close" />
                    </div>
                </ons-col>
            </ons-row>
            <form v-on:submit.prevent="permit" >
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <input type="text" v-model="user" class="text-input form_name" placeholder="User Name" required value="">
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <input type="Email" v-model="email" class="text-input form_name" placeholder="Email" required value="">
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <input type="number" v-model="mobile" class="text-input form_name" placeholder="Mobile" required value="" >
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <input type="password" v-model="pass1" class="text-input form_name" placeholder="Password" required value="" >
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <input type="password" v-model="pass2" class="text-input form_name" placeholder="Confirm Password" required value="">
                </ons-col>
            </ons-row>
            <ons-row align="center" class="top_button_area">
                <ons-col width="100%">
                    <button class="home_signup" type="submit">Sign Up</button>
                </ons-col>
            </ons-row>
            </form>
        </div>
        <div>
            <modal name="permit-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.75"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content">
                    <div class="dalogs"> <font color="green"> <center>Continue... ??</center> </font></div>
                    <button class="yes_button" @click="register">YES</button>
                </div>
            </modal>
            <modal name="success-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.75"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content">
                    <div class="dalogs"><font color="green"> <center>Resistration Success</center> </font></div>
                    <button class="yes_button" @click="pop">OK</button>
                </div>
            </modal>
            <modal name="error-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.75"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content errors">
                    <font color="#8b0000"> <center>Password Not Match.</center> </font>
                </div>
            </modal>
            <modal name="error2-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.65"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content errors">
                    <font color="#8b0000"> <center>Tablebooking Failed</center> </font>
                </div>
            </modal>
            <modal name="username-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.75"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content errors">
                    <font color="#8b0000"> <center>Username is allready exist.</center> </font>
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
                </div>
            </modal>
        </div>
    </v-ons-page>
</template>
<script>
    import closeicon from "assets/close.svg"
    import axios from 'axios'
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    export default {
        name: 'Registration',
        data () {
            return {
                user: '',
                email: '',
                mobile: '',
                pass1: '',
                pass2: '',
                loading: false,
                logindata: '',
                close: closeicon,

            }
        },
        methods: {
            register (){
                this.$modal.hide('permit-modal')
                this.loading = true
                this.$modal.show('loading-modal')
//               axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-app-username/' + this.user + '/')
                $.ajax({
                    method:'POST',
                    url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-app-username/',
                    data: {
                        username: 'itsd@dmin',
                        password: 'itsd321#',
                        user: this.user
                    }
                })
                    .then((response) => {
                        this.loading = false
                        this.$modal.hide('loading-modal')
                        this.logindata = response.length
                        console.log('--------------------------------')
                        console.log(this.logindata);
                        if(this.logindata <= 0){
                            this.$modal.hide('permit-modal')
                            this.loading = true
                            this.$modal.show('loading-modal')
                            $.ajax({
                                method:'POST',
                                url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/post-app-users/',
                                data: {
                                    username: 'itsd@dmin',
                                    password: 'itsd321#',
                                    user: this.user,
                                    email: this.email,
                                    mobile: this.mobile,
                                    pass: this.pass1,
                                    title: this.user,
                                }
                            }).then((resp)=>{
                                console.log('****');
                                console.log(resp);
                                this.user = '',
                                    this.email ='',
                                    this.mobile ='',
                                    this.pass1 = '',
                                    this.pass2 = ''
                                this.loading = false
                                this.$modal.hide('loading-modal');
                                this.$modal.show('success-modal');
                            }).catch((err)=>{
                                console.log(err);
                                this.$modal.hide('loading-modal');
                                this.$modal.show('error2-modal');
                            })
                        }else{
                            console.log('Username is allready exist');
                            this.$modal.hide('permit-modal')
                            this.$modal.show('username-modal');
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        this.$modal.hide('loading-modal');
                        this.$modal.show('error2-modal');
                    })


            },
            permit(){
                if(this.pass1==this.pass2) {
                    this.$modal.show('permit-modal');
                }
                else{
                    console.log( 'empty 2' );
                    this.$modal.show('error-modal');
                }
            },
            pop() {
                this.pageStack.pop();
            },
        },
        props:['pageStack']
    }
</script>
<style scoped>
    .yes_button{
        background: black;
        border: 1px solid rgba(255, 255, 255, 0.86);
        color: #fff;
        padding: 4px 20px;
        width: 100%;
        margin-top: 8px

    }


    .errors{
        margin: 6px;
    }
    .dalogs{
        margin-top: 6px;
    }
    .loadingp{
        text-align: center;
        color: black;
    }
    .text-input:invalid {
        border: none;
        background-color: white;
        color: #1f1f21;
    }
    .home_signup{
        width: 100%;
        background-color: black;
        color: white;
        padding: 10px 0px 10px;
        border: none;
        margin-top: 10px;

    }
    ::placeholder{
        color:#444;
        font-family: 'Nunito', sans-serif;
        font-weight:bold;


    }
    .reserved_cross_icon img {
        margin-top: 20px;
    }


</style>
