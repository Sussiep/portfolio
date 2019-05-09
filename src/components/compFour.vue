<template>
  <v-container style="background-color:#ffffff !important" fluid>

    <v-layout align-center justify-center class="black--text">
     <p class="mb-4" style="font-family: 'Great Vibes', cursive; font-size:40px;">Projekter</p> 
     </v-layout>
    <v-layout>
      

    <v-layout row wrap>
       <v-flex xs12 sm6 md4 order-md3>
        <v-card  tile flat class="gray--text">
          <v-card-text> 
            <iframe width="400" height="300" src="https://www.youtube.com/embed/cAGj2of_pi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-flex shrink>
            <div class="subheading1" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Spas med space</div>
            <div class="body-1" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Eksamens opgave 2018</div>
          </v-flex>
          </v-card-text>
      
        </v-card>
        
      </v-flex>

       <v-flex xs12 sm6 md4 order-md3>
        <v-card  tile flat class="gray--text">
          <v-card-text> 
             <img id="photoruin" src='@/assets/photoruin.png' alt="">

             <v-flex shrink>
            <div class="subheading2" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Trøjborg ruin </div>
            <div class="body-2" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Fotografering</div>
          </v-flex>
          </v-card-text>
      
        </v-card>
        
      </v-flex>

             <v-flex xs12 sm6 md4 order-md3>
        <v-card  tile flat class="gray--text">
          <v-card-text> 

            <iframe width="400" height="300" src="https://www.youtube.com/embed/VRWfWqloaCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <v-flex shrink>
            <div class="subheading3" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Ren Strand Fanø</div>
            <div class="body-3" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Documentary infomercial</div>
          </v-flex>
          </v-card-text>
      
        </v-card>
        
      </v-flex>

             <v-flex xs12 sm6 md4 order-md4>
        <v-card  tile flat class="gray--text">
          <v-card-text> 
          <img id="onmymind" src='@/assets/onmymind.png' alt="">
           <v-flex shrink>
            <div class="subheading4" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">On My Mind</div>
            <div class="body-4" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Double exposure photo</div>
          </v-flex>
          
          </v-card-text>
      
        </v-card>
        
      </v-flex>

       <v-flex xs12 sm6 md4 order-md5>
    <v-card  tile flat class="gray--text">
          <v-card-text> 
            <img id="fjordensdag" src='@/assets/fjordensdag.png' alt="">
            <v-flex shrink>
            <div class="subheading5" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Fjordensdag plakat</div>
            <div class="body-5" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Fjordensdag konkurrence 2019</div>
          </v-flex>
          </v-card-text>
      
        </v-card>
        
      </v-flex>

      <v-flex xs12 sm6 md4 order-md6>
        <v-card  tile flat class="gray--text">
          <v-card-text> 
            <img id="snowglobe" src='@/assets/snowglobe.jpg' alt="">
            <v-flex shrink>
            <div class="subheading6" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Snekugle</div>
            <div class="body-6" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;">Illustration</div>
          </v-flex>
          </v-card-text>
      
        </v-card>
      </v-flex>
    
    </v-layout>

    </v-layout>
  
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

#introbillede{ 
margin: 0 auto;
    width:300px;
    height: 300px;
}

#onmymind{
  margin: 0 auto;
    width:300px;
    height: 300px;
}

#spasmedspace{
  margin: 0 auto;
    width:400px;
    height: 300px;
}

#renstrandfano{
  margin: 0 auto;
    width:400px;
    height: 300px;
}

#photoruin{
  margin: 0 auto;
    width:400px;
    height: 300px;
}

#fjordensdag{
  margin: 0 auto;
    width:250px;
    height:300px;
}
#snowglobe{
  margin: 0 auto;
    width:350px;
    height: 300px;
}

.text-box {
  padding:10px 40px 0 40px;
  text-align: left
}


</style>