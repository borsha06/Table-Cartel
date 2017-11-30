<template>
    <v-ons-page id="login-body">
        <div class="login_bg">
            <ons-row align="center" class="logo-area">
                <ons-col width="100%">
                    <div class="logos">                        
                        <img :src="logo" alt="" />
                    </div>
                </ons-col>
            </ons-row>

            <form v-on:submit.prevent="loginuser">
                 <ons-row align="center" class="loginarea">
                    <ons-col width="100%">
                        <div class="login_form">
                            <input type="text"  v-model="user" onfocus="this.placeholder=''" class="text-input form_name" placeholder="Username" required value="" />
                            <input type="password"  v-model="pass" onfocus="this.placeholder=''" class="text-input form_pass"   placeholder="Password" required value="" />
                        </div>
                     </ons-col>
                 </ons-row>
                 <ons-row align="left" class="submit">
                    <ons-col width="100%">

                        <div class="sign_in">
                            <button type="button button&#45;&#45;light" >Sign In</button>
                            &lt;!&ndash;<p type="button button&#45;&#45;light" @click="registration">Sign Up</p>&ndash;&gt;
                            <!--<p @click="" type="button button&#45;&#45;light">Sign Up</p>-->
                        </div>
                    </ons-col>
                </ons-row>
                <ons-row>
                    <ons-col width="100%">
                        <div class="login_with">
                            <span>Login With</span>
                        </div>
                    </ons-col>
                </ons-row>
            </form>

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
                        <p class="button button--light" @click="login" >facebook</p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="connect">
                <ons-col width="100%">
                    <div class="connect_button">                        
                        <!--<p class="button " @click="push"><img :src="connect" alt="" /></p>-->
                        <p class="button" @click=""  ><img :src="connect" alt="" /></p>
                    </div>
                </ons-col>
            </ons-row>
    </div>



    </v-ons-page>
</template>



<script>
    import Vue from 'vue';
    import connects from "assets/connect.png"
    import logos from "assets/logo.png"
    import welcome from './landing'
    import registration from './register'
    import axios from 'axios';
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    import VueSession from 'vue-session'
    import swal from 'sweetalert'
    Vue.use(VModal)
    Vue.use(VueSession)


    export default {
        name: 'login',
        data () {
            return {
                last_name: '',
                connect: connects,
                logo: logos,
                user: '',
                pass: '',
                logindata: '',
                loading: false,
                fbSignInParams: {
                    scope: 'email,user_likes',
                    return_scopes: true
                }
            }
        },
        methods: {
            push() {
                this.pageStack.push(welcome)
            },
            loginuser (){
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
//                    console.log('--------------------------------')
//                    console.log(resp);
//                    console.log(this.logindata);
                    this.loading = false
                    if(this.logindata == 1){
                        this.$session.start()
                        this.$session.set('last_name', this.user)
                        this.$session.set('user', this.user)
                        this.user = '';
                        this.pass = '';
                        this.$modal.hide('loading-modal')
                        this.pageStack.push(welcome);


                    }
                    else{
                        this.$modal.hide('loading-modal')
                        swal({
                            title: "Oops!",
                            text: "Invalid  Username or Password",
                            icon: "warning",
                        });
                    }
                }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$modal.hide('loading-modal')
                        swal({
                            title: "Oops!",
                            text: "Please connect your internet",
                            icon: "error",
                        });
                    })
            },
            registration (){
                this.pageStack.push(registration)
            },
            check(){
                this.pageStack.push(welcome)
            },
            login () {
                var that = this;
                facebookConnectPlugin.getLoginStatus(function onLoginStatus(result_get) {
                    if(((result_get.status!='unknown') ? ((result_get.authResponse.session_key) ? true : false) : false)) {
                        //alert('logged in');
                        //alert(JSON.stringify(result_get));
                        facebookConnectPlugin.api("/me?fields=email,name,picture,last_name", ["public_profile","email"], function(result){
                            //alert(JSON.stringify(result));
                            that.$session.start()
                            that.$session.set('user', result.name)
                            that.$session.set('last_name', result.last_name)
                            that.$session.set('email', result.email)
                            that.pageStack.push(welcome);
                        },function(error){
                            swal({
                                title: "Oops!",
                                text: "There is an error or Connetion Failed",
                                icon: "error",
                            });
                        });
                    }
                    else {
                        facebookConnectPlugin.login(['email', 'public_profile',], function(response) {
                            //alert('logged in');
                            //alert(JSON.stringify(response.authResponse));
                            facebookConnectPlugin.api('/' + response.authResponse.userID +'/?fields=id,name,email,gender,age_range,last_name',[],
                                function onSuccess (result) {
                                    //alert(JSON.stringify(result.last_name));
                                    that.$http.post('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-app-facebook-users/', {
                                        username: 'itsd@dmin',
                                        password: 'itsd321#',
                                        id: result.id,
                                    }, {emulateJSON:true}).then(function(res){
                                        // alert(JSON.stringify(res));
                                        //alert(JSON.stringify(res.body));
                                        //alert(res.body.length);
                                        if(res.body.length == 1){
                                            that.$session.start()
                                            that.$session.set('user', result.name)
                                            that.$session.set('last_name', result.last_name)
                                            that.$session.set('email', result.email)
                                            that.pageStack.push(welcome);
                                        }else{
                                            that.$http.post('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/post-app-facebook-users/', {
                                                username: 'itsd@dmin',
                                                password: 'itsd321#',
                                                id: result.id,
                                                email: result.email,
                                                name: result.name,
                                                birthday: result.age_range,
                                                gender: result.gender,
                                                title: result.name,
                                            }, {emulateJSON:true}).then(function(res){
                                                //alert(JSON.stringify(res));
                                                that.$session.start()
                                                that.$session.set('user', result.name)
                                                that.$session.set('last_name', result.last_name)
                                                that.$session.set('email', result.email)
                                                that.pageStack.push(welcome);
                                            }).catch((err)=>{
                                                //alert('There is an error');
                                                swal({
                                                    title: "Oops!",
                                                    text: "There is an error",
                                                    icon: "error",
                                                });
                                            });
                                        }
                                    }).catch((err)=>{
                                        //alert('There is an error');
                                        swal({
                                            title: "Oops!",
                                            text: "There is an error",
                                            icon: "error",
                                        });
                                    });
                                }, function onError (error) {
                                   // alert('There is an error');
                                    swal({
                                        title: "Oops!",
                                        text: "There is an error",
                                        icon: "error",
                                    });
                                }
                            )
                        }, function(err) {
                            //alert('There is an error');
                            swal({
                                title: "Oops!",
                                text: "There is an error or Connetion Failed",
                                icon: "error",
                            });
                        });


                    }
                },function(err) {
                    //alert('There is an error');
                    swal({
                        title: "Oops!",
                        text: "There is an error or Connetion Failed",
                        icon: "error",
                    });
                });
            },
            logout () {
                facebookConnectPlugin.logout(function(data){
                    //alert(JSON.stringify(data));
                    swal({
                        title: "Oops!",
                        text: "Logout",
                        icon: "success",
                    });
                },function(error){
                    //alert(JSON.stringify(error));
                    swal({
                        title: "Oops!",
                        text: "There is an error",
                        icon: "error",
                    });
                });
            },

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
    .loadingp{
        text-align: center;

        color: #009688;
        font-size: 13px;
    }

    .page__content{
        background:red !important;

    }
    .page__background{
        background:#f3f5f7 !important;

    }

</style>