<template>
  <v-container style="background-color:#ffffff !important" grid-list-sm>
    <v-layout align-center justify-center class="black--text">
       <p class="mb-4" style="font-family: 'Great Vibes', cursive; font-size:40px;" >Se mit cv og mit visit kort</p>
    </v-layout>   
    <v-layout row wrap>
      <v-flex xs12 class="mb-2">
    
      
      </v-flex>

      <v-flex xs12 sm6 class="mb-2">
        
        <v-card>

<v-dialog v-model="dialog" persistent max-width="450">
      <template v-slot:activator="{ on }">
        <p v-on="on">

        <v-img contain
          class="black--text"
          height="220px"
          :src="require('../assets/kortvisit.jpg')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
             
            </v-layout>
          </v-container>
        </v-img>
        </p>
      </template>

      

       <v-card>
         <v-layout align-center justify-center>
        <v-card-title class="headline;"  style="font-family: 'Great Vibes', cursive; font-size:40px;">Visit kort</v-card-title>
        </v-layout>
        <v-card-text>
          
          <v-img 
          height="500px"
          width="400px"
        :src="require('../assets/kort.jpg')"
        >
      
        </v-img>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#B88C8C" style="font-family: 'Nanum Myeongjo', serif; font-size:20px;" flat @click="dialog = false">Luk</v-btn>
        </v-card-actions>
        </v-card>
       </v-dialog>
       </v-card>
      </v-flex>





<v-flex xs12 sm6 class="mb-2">
        
        <v-card>

<v-dialog v-model="dialog1" persistent max-width="800">
      <template v-slot:activator="{ on }">
        <p v-on="on">

        <v-img contain
          class="black--text"
          height="220px"
        :src="require('../assets/cvkort.jpg')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height >

            </v-layout>
          </v-container>
        </v-img>
        </p>
      </template>

      

       <v-card>
         <v-layout align-center justify-center>
        <v-card-title class="headline;" style="font-family: 'Great Vibes', cursive; font-size:40px;">C V</v-card-title>
       </v-layout>
        <v-card-text>
        
        <v-img
        
          height="800px"
          width="600px"
        :src="require('../assets/sussiecv.jpg')"
        >
      
        </v-img>


         </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#B88C8C" style="font-family: 'Nanum Myeongjo', serif; font-size:20px;" flat @click="dialog1 = false">Luk</v-btn>
        
        </v-card-actions>
        </v-card>
       </v-dialog>
       </v-card>
   
     

      </v-flex>


    
      
    </v-layout>
  </v-container>


</template>

<script>
  export default {
    data() {
      return {
        show: true,
       dialog:false,
       dialog1:false
      
      }
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" >



</style>