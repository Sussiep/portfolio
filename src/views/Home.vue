<template>
  <v-container grid-list text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="blue--text text--accent-2">
    
        <comp-one />
        <comp-two />
        <comp-three/>
        <comp-four />
        <comp-six />
    
      </v-flex>
 
    </v-layout>
  </v-container>
</template>

<script>
import compOne from '@/components/compOne.vue'
import compTwo from '@/components/compTwo.vue'
import compThree from '@/components/compThree.vue'
import compFour from '@/components/compFour.vue'
import compSix from '@/components/compSix.vue'

export default {
  name: 'home',
  data() {
    return {
   
    }
  },
  components: {
    compOne,
    compTwo,
    compThree,
    compFour,
    compSix
  }
}
</script>
<style lang="scss">
 

</style>
