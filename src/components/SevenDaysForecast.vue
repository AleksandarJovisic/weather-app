<template>
  <div>
    <div class='card' v-for="day in sevenDaysForecast" :key="day.valid_date">
     {{sevenDaysForecastCity}}     
     <br />
     {{Math.round(day.temp.min)}}° - {{Math.round(day.temp.max)}}°
   </div>
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
    sevenDaysForecastCity: (state) => state.sevenDaysForecastCity,
    sevenDaysForecast: (state) => state.sevenDaysForecast
  })  
}
}
</script>

<style scoped>
.card{
  padding: 25px;
  display: inline-block;
  margin-top: 60px;
  margin-right: 26px;
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  color: rgb(109, 104, 104);
  font-size: 20px;
  font-weight: 900;
}
</style>