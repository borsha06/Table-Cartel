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
		      	<h2>Search by cuisine</h2>
		      	<p>Here is the list of cuisinnes on offer!</p>
		      </div>
		    </ons-col>
		    <ons-col width="20%">
		      <div class="cross_icon">
		      	<i class="fa fa-times-circle-o" aria-hidden="true"></i>
		      </div>
		    </ons-col>
	  	</ons-row>
	    <ons-row align="">
		    <ons-col width="100%">
		      <div class="left_side_search_heading">
		      	<button class="button button--light button_customize">Continental</button>
		      	<button class="button button--light button_customize">Italian</button>
		      	<button class="button button--light button_customize">Spanish</button>
		      	<button class="button button--light button_customize">Japanese</button>
		      	<button class="button button--light button_customize">French</button>
		      	<button class="button button--light button_customize">Indian</button>
		      	<button class="button button--light button_customize">Iranian</button>
		      </div>
		    </ons-col>
	  	</ons-row>
  </div>




  </v-ons-page>
</template>











<script>

  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       }
     },
     props: ['pageStack']
  }
</script>
<style scoped>
	

</style>