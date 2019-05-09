<template>
  <v-container>
    <v-flex>
  
    <v-img id="parallaximg" contain
    height="550"
  :src="require('@/assets/cover.jpg')"
  ></v-img>

  </v-flex>
  

    
    <v-layout>
      <v-flex>
  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        showOne: true,
        showTwo: true,
        showThree: true,
        paralaximg: '../assets/cover.jpg',
      }
    },
  }
</script>

<style lang="scss" scoped>


#parallaximg {
    width: 120%;
    margin-left: -10%;
    height: 500px;
 
}
.v-parallax__image-container img {
  background-size: cover
}
#blocker {
height: 1000px;
border:2px solid lightblue
}


h4{
   color: map-get($colorz, secondary)
 }



</style>