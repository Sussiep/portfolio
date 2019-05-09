<template>
  <v-container style="background-color:#ecdede !important" fluid>

  <v-layout align-center justify-center class="black--text">
     <p class="mb-4" style="font-family: 'Great Vibes', cursive; font-size:40px;">Om mig</p> 

  </v-layout>
    <v-layout  class="black--text">
      

    <v-layout row wrap>


             <v-flex xs12 md6 order-md1>
        <v-card tile flat style="background-color:#ecdede !important" >
          <v-card-text> 
            <img id="introbillede" src='@/assets/introbillede.png' alt="">
          
          </v-card-text>
      
        </v-card>
        
      </v-flex>
      <v-flex xs12 md6 order-md2>
        <div class="text-box;" style="font-family: 'Nanum Myeongjo', serif; font-size:14px;" >
        <p>
            Jeg er en smilende pige på 19 år, der til dagligt studere som multiemediedesigner i Esbjerg. 
          </p> 
          <p> 
            Jeg vil beskrive mig selv, som en meget åben og loyal person, der gerne vil dele ud af mine kompetencer samt evner. 
            Jeg er en person fyldt med energi og kærlighed til mine medmennesker.
            </p> 
            <p>
            Min passion for det kreative, spiller en stor rolle og jeg elsker, at kunne udfolde mig selv og bidrage min kreativitet med andre. 
            </p>
           Min fritid bruge oftest med en daglig træning i det lokale fitness center og hygge med venner og familie. I weekenderne har jeg mit studiejob hos fabrikken Hartmann. Det er et arbejde, som jeg snart har haft i 2 år, og er fuld tilfreds med.
           
        </div>
        
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
padding-bottom: 30px;
    width:400px;
    height: 400px;
}
.text-box {
  padding:10px 40px 0 40px;
  text-align: left;
  color: black;
  
}


</style>