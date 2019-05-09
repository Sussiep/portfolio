<template>
  <v-container style="background-color:#ecdede !important">
     <h2 class="mb-4"></h2> 

     <v-flex>
      <div id="box">  
    
    <v-layout  align-space-around justify-center row fill-height>
        <v-layout row>
      <v-flex xs4 order-md2 order-xs1 style="background-color:#B88C8C;">
        <v-card flat>
          <v-card-text >

        <p class="text-sm-left" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">

            Kontakt:
            <v-spacer>  
                + 45 28 14 55 24
            </v-spacer>
            <v-spacer>  
            sussiepetersen@gmail.com
            </v-spacer>
            <v-spacer>  
           sussiepetersen.dk
            </v-spacer>
        </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs4 order-md3 order-xs2 style="height:131px; background-color:#B88C8C;">
    

               
        
    <v-layout align-center justify-space-around>
      <div id="threeicon">
        <a target="_blank" href="https://www.facebook.com/sussie.petersen.7?ref=bookmarks">
          <v-icon id="iconfb">fab fa-facebook-square</v-icon>
        </a>

        <a target="_blank" href="https://www.instagram.com/sussie_petersen/?hl=da">
          <v-icon  id="iconig">fab fa-instagram</v-icon>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/sussie-petersen-8b41a917b/">
          <v-icon  id="iconld">fab fa-linkedin</v-icon>  
        </a>

    </div>
     </v-layout>


      </v-flex>
      
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat color="white lighten-2">
          <v-card-text>
               <img id="footerlogo" src='@/assets/logodone.png' alt="">
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
    </v-layout> 

      </div>
    </v-flex>  

 <v-flex>     
      <v-footer
    dark
    height="auto"
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">
        &copy;2018 — Sussie Petersen
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-flex>


  
  </v-container>
</template>

<script>
  
export default {
    
  }

</script>

<style lang="scss" scoped>
.container {
     max-width: 100% !important;
}


#footerlogo{ 
margin: 0 auto;
    width:90px;
    height: 90px;
}

#box{
  height: 120px;
  width: 1300px;
  background-color:lightblue;
}
#threeicon {
  padding: 30px 30px 0 30px;
}
#iconfb {
  margin:20px;
  color:#F6D2D4;
  
}
#iconig {
margin:20px;
color:#F6D2D4;
}

#iconld {
  margin: 20px;
  color:#F6D2D4;
}

</style>