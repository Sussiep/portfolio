<template>
  <v-app>
    <v-toolbar app>
      
          <v-layout justify-center>

              <img id="logoimg" src="@/assets/logo.png" />
    
          </v-layout>
    
     </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.theme--light.v-toolbar
{
  background-color: #B88C8C !important;
}
  #logoimg {
    margin: 0 auto;
    width:400px;
    height: 50px
  }
  .container{
    padding: 0 !important;
   max-width: 100% !important;

  }
</style>