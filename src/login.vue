<template>
    <v-ons-page id="">
        <div class="login_bg">
            <ons-row align="center" class="logo-area">
                <ons-col width="100%">
                    <div class="logos">                        
                        <img :src="logo" alt="" />
                    </div>
                </ons-col>
            </ons-row>

            <form v-on:submit.prevent="login">
                <ons-row align="center" class="loginarea">
                    <ons-col width="100%">
                        <div class="login_form">
                            <input type="text"  v-model="user" class="text-input form_name" placeholder="Username" required value="" />
                            <input type="password"  v-model="pass" class="text-input form_pass"   placeholder="Password" required value="" />
                        </div>
                        <!--<button class="button button&#45;&#45;light" type="submit">Sign in</button>-->
                        <!--<p class="button button&#45;&#45;light" @click="registration">Sign up</p>-->
                    </ons-col>
                </ons-row>
                <ons-row align="left" class="submit">
                    <ons-col width="100%">
                        <div class="sign_in">
                            <button type="button button--light" >Sign In</button>
                            <!--<p type="button button&#45;&#45;light" @click="registration">Sign Up</p>-->
                            <p type="button button--light">Sign Up</p>
                        </div>
                    </ons-col>
                </ons-row>
            </form>
            <modal name="error-modal"
                   transition="nice-modal-fade"
                   :min-width="200"
                   :min-height="200"
                   :pivot-y="0.65"
                   width="60%"
                   height="auto"
                   :delay="100"
            >
                <div class="example-modal-content errors">
                    <font color="#8b0000"> <center>There is an error</center> </font>
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
                    <font color="#8b0000"> <center>Invalid Username or Password.</center> </font>
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

            <ons-row align="center" class="facebook_connect">
                <ons-col width="100%">
                    <div class="facebook_button">                        
                        <!--<p class="button button&#45;&#45;light" @click="push">facebook</p>-->
                        <p class="button button--light" >facebook</p>
                        <!--<fb-signin-button-->
                                <!--:params="fbSignInParams"-->
                                <!--@success="onSignInSuccess"-->
                                <!--@error="onSignInError">-->
                             <!--facebook-->
                        <!--</fb-signin-button>-->
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="connect">
                <ons-col width="100%">
                    <div class="connect_button">                        
                        <!--<p class="button " @click="push"><img :src="connect" alt="" /></p>-->
                        <p class="button " ><img :src="connect" alt="" /></p>
                    </div>
                </ons-col>
            </ons-row>
    </div>



    </v-ons-page>
</template>



<script>
    import Vue from 'vue';
//    import facebook from './facebook.js'
//    import FBSignInButton from 'vue-facebook-signin-button'
//    Vue.use(FBSignInButton)
    import connects from "assets/connect.png"
    import logos from "assets/logo.png"
    import welcome from './welcome'
    import registration from './register'
    import axios from 'axios';
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    import VueSession from 'vue-session'
    Vue.use(VueSession)

    export default {
        data () {
            return {
                connect: connects,
                logo: logos,
                user: '',
                pass: '',
                logindata: '',
                loading: false,
//                fbSignInParams: {
//                    scope: 'email,user_likes',
//                    return_scopes: true
//                }
            }
        },
        methods: {
            push() {
                this.pageStack.push(welcome)
            },
            login (){
                this.loading = true
                this.$modal.show('loading-modal')
                $.ajax({
                    method:'POST',
                    url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-app-users/',
                    data: {
                        user: this.user,
                        pass: this.pass,
                    }
                }).then((resp)=>{
//                    this.logindata = resp.data.length
                    this.logindata = resp.length
                    console.log('--------------------------------')
                    console.log(resp);
                    console.log(this.logindata);
                    this.loading = false
                    if(this.logindata == 1){
                        this.$session.start()
                        this.$session.set('user', this.user)
                        this.user = '';
                        this.pass = '';
                        this.pageStack.push(welcome);
                    }
                    else{
                        console.log('there is an error')
                        this.$modal.hide('loading-modal')
                        this.$modal.show('username-modal')
                    }
//                        this.loading = false
//
                })
                    .catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$modal.hide('loading-modal')
                        this.$modal.show('error-modal')
                    })
            },
            check () {
                console.log('error')
            },
            registration (){
                this.pageStack.push(registration)
            },
//            onSignInSuccess (response) {
//                FB.api('/me', dude => {
//                    console.log(`Good to see you, ${dude.name}.`)
//                })
//            },
//            onSignInError (error) {
//                console.log('OH NOES', error)
//            }
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
    .login_bg{
        background:#f3f5f7 !important;
        height: 100%;

    }
    ::placeholder{
    color:#444;
    font-family: 'Nunito', sans-serif;
    font-weight:bold;
    }
    .button{
        float:left;
    }
    /*.fb-signin-button {*/
        /*!* This is where you control how the button looks. Be creative! *!*/
        /*width: 100%;*/
        /*border-radius: 25px;*/
        /*background: #000;*/
        /*color: #fff;*/
        /*font-family: 'Nunito', sans-serif;*/
        /*font-size: 14px;*/
        /*padding: 7px 0px;*/
        /*font-weight: bold;*/
        /*text-align: center;*/
        /*box-shadow: 0px 0px 2px black;*/
    /*}*/
    .loadingp{
        text-align: center;
        color: black;
    }
    .space{
        height: 90px;
        background:#f3f5f7 !important;
    }

</style>