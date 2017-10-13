<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue'
  import login from './login'
  export default {
    data() {
      return {
        pageStack: [login]
      }
    }
  }
</script>
