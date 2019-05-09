<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 class="blue--text text--accent-2">
      About us
      <template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card dark>
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dRq5ljzboCc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Hej med dig
        </v-card-title>

        <v-card-text>
        Hellllloo
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

    </v-flex>
    <v-flex>
      
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
