<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue'
//  import page1 from './Page1';
//  import page2 from './Page2';
  import yay from './yay';
  import restaurant2 from './restaurant2';
  export default {
    data() {
      return {
        pageStack: [yay]
      }
    }
  }
</script>
