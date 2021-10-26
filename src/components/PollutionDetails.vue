<template>
  <div>
      {{pollutionData}}
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
data(){
  return{

  }
},
computed:{
  ...mapState({
    pollutionData: (state) => state.pollutionData
  }), 
}
}
</script>

<style>

</style>