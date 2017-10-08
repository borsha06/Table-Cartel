<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import page1 from './Page1';
  import page2 from './Page2';
  import cuisine from './cuisine';

  export default {
    data() {
      return {
        pageStack: [cuisine]
      }
    }
  }
</script>
