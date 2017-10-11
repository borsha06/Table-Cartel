<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue'
  import yay from './yay';
  import restaurant2 from './restaurant2';
  import welcome from './welcome';
  export default {
    data() {
      return {
        pageStack: [welcome]
      }
    }
  }
</script>
