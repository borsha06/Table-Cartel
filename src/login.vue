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
            <form>
            <ons-row align="center" class="loginarea">
                <ons-col width="100%">
                    <div class="login_form">                        
                        <input type="text" class="text-input form_pass" placeholder="Jorge Sims" value="" />
                        <input type="password" class="text-input form_pass" placeholder="Password" value="" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="facebook_connect">
                <ons-col width="100%">
                    <div class="facebook_button">                        
                        <p class="button button--light" @click="push">facebook</p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center" class="connect">
                <ons-col width="100%">
                    <div class="connect_button">                        
                        <p class="button " @click="push"><img :src="connect" alt="" /></p>
                    </div>
                </ons-col>
            </ons-row>
        </form>
    </div>



    </v-ons-page>
</template>



<script>
    import connects from "assets/connect.png"
    import logos from "assets/logo.png"
    import welcome from './welcome'
    export default {
        data () {
            return {
                connect: connects,
                logo: logos,
            }
        },
        methods: {
            push() {
                this.pageStack.push(welcome)
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
    ::placeholder{
    color:#444;
    font-family: 'Nunito', sans-serif;
    font-weight:bold;


    }
    .button{
        float:left;
    }


</style>