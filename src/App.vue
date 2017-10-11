<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue'
  import reserved from './reserved';
  import restaurant2 from './restaurant2';
  export default {
    data() {
      return {
        pageStack: [reserved]
      }
    }
  }
</script>
