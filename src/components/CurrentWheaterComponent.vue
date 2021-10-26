<template>
  <div>
    <div class="row">
<search-bar></search-bar>
    </div>
      <div class="pollutionDiv">
<pollution></pollution>
      </div>
      <div class="currentWeatherCity" v-if="sevenDaysForecast[0] != undefined">
        {{new Date(sevenDaysForecast[0].dt * 1000) | datePartOne}} - {{new Date(sevenDaysForecast[6].dt * 1000) | datePartTwo}}
        </div>
      <div class="currentWeather" >{{Math.round(sevenDaysForecastAverageTemp)}}°</div>
      <div class="row">
        <div class="col-12">
<seven-days-forecast></seven-days-forecast>
        </div>
      </div>
      
  </div>
</template>

<script>
import moment from 'moment';
import {mapState} from 'vuex';
import SearchBar from '../components/SearchBar.vue';
import SevenDaysForecast from '../components/SevenDaysForecast.vue';
import Pollution from '../components/Pollution.vue';
export default {
  data: function () {
    return {

      weather: {}
    };
  },
  components:{
SevenDaysForecast,
Pollution,
SearchBar
  },
  filters:{
  datePartOne: function(date){
    return moment(date).format('MMM DD')
  },
  datePartTwo: function(date){
    return moment(date).format('MMM DD YYYY')
  }
},
  computed:{
  ...mapState({
    tenDaysForecast: (state) => state.tenDaysForecast,
    tenDaysForecastCity: (state) => state.tenDaysForecastCity,
    averageTemperature: (state) => state.averageTemperature,
    sevenDaysForecast: (state) => state.sevenDaysForecast
  }),
  tenDaysForecastPrepared(){
    let days = [];
    this.tenDaysForecast.forEach(item => {
      if(days.length <= 9) days.push(item)
    });
    return days
  },
  sevenDaysForecastAverageTemp(){
    let averageTemp = 0;
    let sum = 0;
    this.sevenDaysForecast.forEach((item) => {
      sum = item.temp.day + sum;
    })
    averageTemp = sum / this.sevenDaysForecast.length
    return averageTemp
    
  }
  }
};
</script>

<style scoped>
.currentWeather{
      color: white;
  font-size: 60px;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
}
.currentWeatherCity{
  margin-top: 24px;
    color: #3d4f53;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}
.pollutionDiv{
  position: absolute;
  top: 30px;
  right: 150px;
  width: 200px !important;
}
</style>>
