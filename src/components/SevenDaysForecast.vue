<template>
  <div>
    <div class="row">
      <div class="col-8 offset-2 week-column">
    <div class='card' v-for="(day, index) in sevenDaysForecast" :key="index">   
    {{new Date(day.dt * 1000) | moment}}     
     <br />
     <span class="temp">
  {{Math.round(day.temp.day)}}<sup class="degree">&#8451;</sup>
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
.degree {
  font-size: large;
  vertical-align: super;
}
.temp{
  color: white;
  font-size: 40px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
.card{
  text-align: center;
  padding: 25px;
  display: inline-block;
  margin-top: 60px;
  margin-right: 1%;
  border-radius: 16px;
  background: transparent;
  border: none;
  color: #3f4446;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}
.week-column{

}
</style>