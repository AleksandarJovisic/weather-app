<template>
  <div>
    <div class="row">
      <div class="col-12">
    <div class='card' v-for="(day, index) in sevenDaysForecast" :key="index">   
    {{new Date(day.dt * 1000) | moment}}     
     <br />
     <span class="temp">
  {{Math.round(day.temp.day)}}°
     </span>
   </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment';
import {mapState} from 'vuex';
export default {
data(){
  return{
  }
},
computed:{
  ...mapState({
    sevenDaysForecast: (state) => state.sevenDaysForecast
  }),
},
filters:{
  moment: function(date){
    return moment(date).format('dddd')
  }
}
}
</script>

<style scoped>
.temp{
  color: white;
  font-size: 40px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}
.card{
  padding: 25px;
  display: inline-block;
  margin-top: 60px;
  border-radius: 16px;
  background: transparent;
  border: none;
  color: #3d4f53;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}
</style>