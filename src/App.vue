<template>
  <div id="app" class="main" 
  :style="`background: linear-gradient(145deg,#103688 ${-100-percentageForBackground1}%, #169CE7,#A3DEF2,#ecc55a ,#FF9759 ${200 - percentageForBackground2}%)`">
    <router-view/>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      averageTemperature: (state) => state.averageTemperature
    }),
    percentageForBackground2(){
      let percentage = 0;
      if (this.averageTemperature > 0){
        percentage = ((this.averageTemperature + 40) * 100) / 80
        return percentage 
      }else return 0
    },
    percentageForBackground1(){
      let percentage = 0;
      if (this.averageTemperature < 0){
        percentage = ((this.averageTemperature + 40 - 100) * 100) / 80
        return percentage
      }else return 0
    }
  }
};
</script>

<style scoped>
.main{
  /* background: linear-gradient(to bottom right,#103688, #169CE7, 0%,#A3DEF2, 60% ,#FFD56F, 100%,#FF9759); */
   /* background: linear-gradient(145deg,#103688, #169CE7,#A3DEF2,#ecc55a ,#FF9759 100%); */
    /* background: linear-gradient(145deg,#103688, 60%,#FF9759 ); */
  min-height: 100vh;
  height: 100%;
  /* background-size: 250%; 
  background-position-x: 95%; */
}
</style>
